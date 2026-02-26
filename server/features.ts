import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { generateVehicleImage, analyzeVehicleImages } from "./openai";
import { 
  createDreamBuild, 
  getDreamBuildsBySession, 
  createQuoteRequest,
  checkRateLimit,
  getRateLimitStatus 
} from "./db";
import { TRPCError } from "@trpc/server";

// Rate limit constants
const DREAM_BUILD_FREE_LIMIT = 8;
const DREAM_BUILD_WINDOW_MINUTES = 60;
const QUOTE_REQUEST_LIMIT = 3;
const QUOTE_REQUEST_WINDOW_MINUTES = 60;

/**
 * AI Dream Build Router
 */
export const dreamBuildRouter = router({
  // Generate dream build images
  generate: publicProcedure
    .input(
      z.object({
        prompt: z.string().min(10, "Prompt must be at least 10 characters"),
        sessionId: z.string(),
        userEmail: z.string().email().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const identifier = ctx.req.ip || input.sessionId;
      
      // Check rate limit
      const allowed = await checkRateLimit(
        identifier,
        "dream_build",
        DREAM_BUILD_FREE_LIMIT,
        DREAM_BUILD_WINDOW_MINUTES
      );
      
      if (!allowed) {
        const status = await getRateLimitStatus(identifier, "dream_build");
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: `Rate limit exceeded. You can generate ${DREAM_BUILD_FREE_LIMIT} renders per hour. ${
            input.userEmail ? "Try again later." : "Provide your email to unlock more renders."
          }`,
        });
      }
      
      // Enhance the prompt for better automotive results
      const enhancedPrompt = `Professional automotive photography: ${input.prompt}. High quality, realistic, detailed, studio lighting, 4K resolution.`;
      
      try {
        // Generate image using OpenAI
        const imageUrl = await generateVehicleImage(enhancedPrompt);
        
        // Save to database
        await createDreamBuild({
          sessionId: input.sessionId,
          ipAddress: ctx.req.ip,
          userEmail: input.userEmail || null,
          prompt: input.prompt,
          generatedImages: JSON.stringify([imageUrl]),
          renderCount: 1,
        });
        
        return {
          imageUrl,
          remainingRenders: DREAM_BUILD_FREE_LIMIT - ((await getRateLimitStatus(identifier, "dream_build"))?.requestCount || 0),
        };
      } catch (error) {
        console.error("Dream build generation error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to generate image. Please try again.",
        });
      }
    }),
  
  // Get user's dream build history
  getHistory: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .query(async ({ input }) => {
      const builds = await getDreamBuildsBySession(input.sessionId);
      return builds.map(build => ({
        ...build,
        generatedImages: JSON.parse(build.generatedImages),
      }));
    }),
  
  // Check rate limit status
  checkLimit: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .query(async ({ input, ctx }) => {
      const identifier = ctx.req.ip || input.sessionId;
      const status = await getRateLimitStatus(identifier, "dream_build");
      
      return {
        used: status?.requestCount || 0,
        limit: DREAM_BUILD_FREE_LIMIT,
        remaining: DREAM_BUILD_FREE_LIMIT - (status?.requestCount || 0),
        resetAt: status?.resetAt || null,
      };
    }),
});

/**
 * Quote Request Router
 */
export const quoteRequestRouter = router({
  // Submit quote request with AI analysis
  submit: publicProcedure
    .input(
      z.object({
        customerName: z.string().min(2),
        customerEmail: z.string().email(),
        customerPhone: z.string().optional(),
        vehiclePhotos: z.array(z.string().url()).min(1).max(10),
        selectedModifications: z.array(z.string()).min(1),
        sessionId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const identifier = ctx.req.ip || input.sessionId;
      
      // Check rate limit
      const allowed = await checkRateLimit(
        identifier,
        "quote_request",
        QUOTE_REQUEST_LIMIT,
        QUOTE_REQUEST_WINDOW_MINUTES
      );
      
      if (!allowed) {
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: `Rate limit exceeded. You can submit ${QUOTE_REQUEST_LIMIT} quote requests per hour.`,
        });
      }
      
      try {
        // Analyze images with AI
        const aiSummary = await analyzeVehicleImages(
          input.vehiclePhotos,
          input.selectedModifications
        );
        
        // Save to database
        await createQuoteRequest({
          customerName: input.customerName,
          customerEmail: input.customerEmail,
          customerPhone: input.customerPhone || null,
          vehiclePhotos: JSON.stringify(input.vehiclePhotos),
          selectedModifications: JSON.stringify(input.selectedModifications),
          aiSummary,
          status: "pending",
        });
        
        // TODO: Send email to customer and shop
        
        return {
          success: true,
          summary: aiSummary,
        };
      } catch (error) {
        console.error("Quote request error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to process quote request. Please try again.",
        });
      }
    }),
});
