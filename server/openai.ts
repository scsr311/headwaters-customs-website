import { ENV } from "./_core/env";

/**
 * Generate an image using OpenAI's DALL-E 3 API
 */
export async function generateVehicleImage(prompt: string): Promise<string> {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ENV.openAiApiKey}`,
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      quality: "standard",
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`OpenAI API error: ${error.error?.message || "Unknown error"}`);
  }

  const data = await response.json();
  return data.data[0]?.url || "";
}

/**
 * Analyze vehicle images using GPT-4 Vision
 */
export async function analyzeVehicleImages(
  imageUrls: string[],
  modifications: string[]
): Promise<string> {
  const modsList = modifications.join(", ");
  
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ENV.openAiApiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are an expert automotive technician analyzing vehicles for custom restoration and modification work. Provide detailed, professional assessments.`,
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Analyze these vehicle photos and provide a detailed summary for a custom build project. The customer wants the following modifications: ${modsList}. 

Please provide:
1. Vehicle identification (year, make, model if visible)
2. Current condition assessment
3. Visible issues or concerns
4. Feasibility of requested modifications
5. Recommended additional work

Be specific and professional. This summary will be sent to both the customer and the shop.`,
            },
            ...imageUrls.map((url) => ({
              type: "image_url" as const,
              image_url: { url, detail: "high" as const },
            })),
          ],
        },
      ],
      max_tokens: 1000,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`OpenAI API error: ${error.error?.message || "Unknown error"}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || "Unable to analyze images.";
}
