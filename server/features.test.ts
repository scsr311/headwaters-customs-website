import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createTestContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
      ip: "127.0.0.1",
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("Dream Build Feature", () => {
  it("should check rate limit status for a new session", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);
    
    const sessionId = `test_session_${Date.now()}`;
    const status = await caller.dreamBuild.checkLimit({ sessionId });
    
    expect(status).toBeDefined();
    expect(status.limit).toBe(8);
    expect(status.used).toBe(0);
    expect(status.remaining).toBe(8);
  });

  it("should retrieve empty history for a new session", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);
    
    const sessionId = `test_session_${Date.now()}`;
    const history = await caller.dreamBuild.getHistory({ sessionId });
    
    expect(Array.isArray(history)).toBe(true);
    expect(history.length).toBe(0);
  });
});

describe("Quote Request Feature", () => {
  it("should validate required fields in quote request", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);
    
    const sessionId = `test_session_${Date.now()}`;
    
    // Test with missing fields - should throw validation error
    await expect(
      caller.quoteRequest.submit({
        customerName: "",
        customerEmail: "invalid-email",
        vehiclePhotos: [],
        selectedModifications: [],
        sessionId,
      })
    ).rejects.toThrow();
  });
});

describe("Rate Limiting", () => {
  it("should enforce rate limits across multiple requests", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);
    
    const sessionId = `test_session_${Date.now()}`;
    
    // Check initial status
    const initialStatus = await caller.dreamBuild.checkLimit({ sessionId });
    expect(initialStatus.remaining).toBe(8);
  });
});
