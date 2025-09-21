import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  avatar: text("avatar"),
});

export const patients = pgTable("patients", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  gender: text("gender").notNull(),
  medicalId: text("medical_id").notNull().unique(),
  status: text("status").notNull(),
  lastVisit: timestamp("last_visit"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const reports = pgTable("reports", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  patientId: varchar("patient_id").references(() => patients.id).notNull(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  confidence: integer("confidence").notNull(),
  type: text("type").notNull(),
  aiGenerated: boolean("ai_generated").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const imaging = pgTable("imaging", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  patientId: varchar("patient_id").references(() => patients.id).notNull(),
  type: text("type").notNull(),
  description: text("description").notNull(),
  anomalyDetected: boolean("anomaly_detected").default(false),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const analytics = pgTable("analytics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  metric: text("metric").notNull(),
  value: integer("value").notNull(),
  change: integer("change"),
  period: text("period").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  name: true,
  role: true,
  avatar: true,
});

export const insertPatientSchema = createInsertSchema(patients).pick({
  name: true,
  age: true,
  gender: true,
  medicalId: true,
  status: true,
  lastVisit: true,
});

export const insertReportSchema = createInsertSchema(reports).pick({
  patientId: true,
  title: true,
  summary: true,
  confidence: true,
  type: true,
  aiGenerated: true,
});

export const insertImagingSchema = createInsertSchema(imaging).pick({
  patientId: true,
  type: true,
  description: true,
  anomalyDetected: true,
  imageUrl: true,
});

export const insertAnalyticsSchema = createInsertSchema(analytics).pick({
  metric: true,
  value: true,
  change: true,
  period: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertPatient = z.infer<typeof insertPatientSchema>;
export type Patient = typeof patients.$inferSelect;
export type InsertReport = z.infer<typeof insertReportSchema>;
export type Report = typeof reports.$inferSelect;
export type InsertImaging = z.infer<typeof insertImagingSchema>;
export type Imaging = typeof imaging.$inferSelect;
export type InsertAnalytics = z.infer<typeof insertAnalyticsSchema>;
export type Analytics = typeof analytics.$inferSelect;
