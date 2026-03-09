import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { dreamBuildRouter, quoteRequestRouter } from "./features";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Contact form
  contact: router({
    send: publicProcedure
      .input(z.object({
        name: z.string().min(2),
        email: z.string().email(),
        phone: z.string().optional(),
        message: z.string().min(5),
      }))
      .mutation(async ({ input }) => {
        const content = [
          `Name: ${input.name}`,
          `Email: ${input.email}`,
          input.phone ? `Phone: ${input.phone}` : null,
          ``,
          `Message:`,
          input.message,
        ].filter(Boolean).join("\n");

        await notifyOwner({
          title: `New Contact Message from ${input.name}`,
          content,
        });

        return { success: true };
      }),
  }),

  // Feature routers
  dreamBuild: dreamBuildRouter,
  quoteRequest: quoteRequestRouter,
});

export type AppRouter = typeof appRouter;
