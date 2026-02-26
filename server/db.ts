import { eq, and, gte } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, users, dreamBuilds, InsertDreamBuild, 
  quoteRequests, InsertQuoteRequest, rateLimits, InsertRateLimit 
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Dream Build Functions
export async function createDreamBuild(data: InsertDreamBuild) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(dreamBuilds).values(data);
  return result;
}

export async function getDreamBuildsBySession(sessionId: string) {
  const db = await getDb();
  if (!db) return [];
  
  const result = await db.select().from(dreamBuilds)
    .where(eq(dreamBuilds.sessionId, sessionId));
  
  return result;
}

// Quote Request Functions
export async function createQuoteRequest(data: InsertQuoteRequest) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(quoteRequests).values(data);
  return result;
}

export async function getAllQuoteRequests() {
  const db = await getDb();
  if (!db) return [];
  
  const result = await db.select().from(quoteRequests);
  
  return result;
}

// Rate Limiting Functions
export async function checkRateLimit(identifier: string, feature: string, maxRequests: number, windowMinutes: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return true; // Allow if DB unavailable
  
  const now = new Date();
  const resetTime = new Date(now.getTime() + windowMinutes * 60 * 1000);
  
  // Get existing rate limit record
  const existing = await db.select().from(rateLimits)
    .where(and(
      eq(rateLimits.identifier, identifier),
      eq(rateLimits.feature, feature)
    ))
    .limit(1);
  
  if (existing.length === 0) {
    // Create new rate limit record
    await db.insert(rateLimits).values({
      identifier,
      feature,
      requestCount: 1,
      lastRequest: now,
      resetAt: resetTime,
    });
    return true;
  }
  
  const record = existing[0];
  
  // Check if we need to reset the window
  if (record && record.resetAt < now) {
    await db.update(rateLimits)
      .set({
        requestCount: 1,
        lastRequest: now,
        resetAt: resetTime,
      })
      .where(eq(rateLimits.id, record.id));
    return true;
  }
  
  // Check if limit exceeded
  if (record && record.requestCount >= maxRequests) {
    return false;
  }
  
  // Increment counter
  if (record) {
    await db.update(rateLimits)
      .set({
        requestCount: record.requestCount + 1,
        lastRequest: now,
      })
      .where(eq(rateLimits.id, record.id));
  }
  
  return true;
}

export async function getRateLimitStatus(identifier: string, feature: string) {
  const db = await getDb();
  if (!db) return null;
  
  const result = await db.select().from(rateLimits)
    .where(and(
      eq(rateLimits.identifier, identifier),
      eq(rateLimits.feature, feature)
    ))
    .limit(1);
  
  return result.length > 0 ? result[0] : null;
}
