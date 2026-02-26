import { describe, expect, it } from "vitest";
import { ENV } from "./_core/env";

describe("OpenAI API Key Validation", () => {
  it("should have a valid OpenAI API key configured", async () => {
    expect(ENV.openAiApiKey).toBeTruthy();
    expect(ENV.openAiApiKey).toMatch(/^sk-/);
    
    // Test the API key with a simple models list request
    const response = await fetch("https://api.openai.com/v1/models", {
      headers: {
        Authorization: `Bearer ${ENV.openAiApiKey}`,
      },
    });
    
    expect(response.ok).toBe(true);
    const data = await response.json();
    expect(data.data).toBeDefined();
    expect(Array.isArray(data.data)).toBe(true);
  }, 10000); // 10 second timeout for API call
});
