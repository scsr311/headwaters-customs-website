import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * AI Dream Build requests - stores user prompts and generated images
 */
export const dreamBuilds = mysqlTable("dream_builds", {
  id: int("id").autoincrement().primaryKey(),
  sessionId: varchar("sessionId", { length: 255 }).notNull(), // For rate limiting
  ipAddress: varchar("ipAddress", { length: 45 }), // IPv4 or IPv6
  userEmail: varchar("userEmail", { length: 320 }), // Captured after free renders
  prompt: text("prompt").notNull(),
  generatedImages: text("generatedImages").notNull(), // JSON array of image URLs
  renderCount: int("renderCount").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type DreamBuild = typeof dreamBuilds.$inferSelect;
export type InsertDreamBuild = typeof dreamBuilds.$inferInsert;

/**
 * AI-Assisted Quote Requests - stores vehicle photos and modification requests
 */
export const quoteRequests = mysqlTable("quote_requests", {
  id: int("id").autoincrement().primaryKey(),
  customerName: varchar("customerName", { length: 255 }).notNull(),
  customerEmail: varchar("customerEmail", { length: 320 }).notNull(),
  customerPhone: varchar("customerPhone", { length: 50 }),
  vehiclePhotos: text("vehiclePhotos").notNull(), // JSON array of S3 URLs
  selectedModifications: text("selectedModifications").notNull(), // JSON array of selected options
  aiSummary: text("aiSummary"), // AI-generated summary
  status: mysqlEnum("status", ["pending", "reviewed", "quoted", "declined"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type QuoteRequest = typeof quoteRequests.$inferSelect;
export type InsertQuoteRequest = typeof quoteRequests.$inferInsert;

/**
 * Finished Project Gallery - showcase completed builds
 */
export const projects = mysqlTable("projects", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description").notNull(),
  vehicleYear: int("vehicleYear"),
  vehicleMake: varchar("vehicleMake", { length: 100 }),
  vehicleModel: varchar("vehicleModel", { length: 100 }),
  modifications: text("modifications").notNull(), // JSON array of modifications
  coverImage: varchar("coverImage", { length: 500 }).notNull(), // S3 URL
  galleryImages: text("galleryImages").notNull(), // JSON array of S3 URLs
  featured: boolean("featured").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = typeof projects.$inferInsert;

/**
 * Rate limiting tracking for AI features
 */
export const rateLimits = mysqlTable("rate_limits", {
  id: int("id").autoincrement().primaryKey(),
  identifier: varchar("identifier", { length: 255 }).notNull().unique(), // IP address or session ID
  feature: varchar("feature", { length: 50 }).notNull(), // 'dream_build' or 'quote_request'
  requestCount: int("requestCount").default(0).notNull(),
  lastRequest: timestamp("lastRequest").defaultNow().notNull(),
  resetAt: timestamp("resetAt").notNull(),
});

export type RateLimit = typeof rateLimits.$inferSelect;
export type InsertRateLimit = typeof rateLimits.$inferInsert;
