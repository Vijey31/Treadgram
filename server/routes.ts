import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPatientSchema, insertReportSchema, insertImagingSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Analytics routes
  app.get("/api/analytics", async (req, res) => {
    try {
      const analytics = await storage.getAnalytics();
      res.json(analytics);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch analytics" });
    }
  });

  // Patient routes
  app.get("/api/patients", async (req, res) => {
    try {
      const patients = await storage.getPatients();
      res.json(patients);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch patients" });
    }
  });

  app.get("/api/patients/:id", async (req, res) => {
    try {
      const patient = await storage.getPatient(req.params.id);
      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }
      res.json(patient);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch patient" });
    }
  });

  app.post("/api/patients", async (req, res) => {
    try {
      const validatedData = insertPatientSchema.parse(req.body);
      const patient = await storage.createPatient(validatedData);
      res.status(201).json(patient);
    } catch (error) {
      res.status(400).json({ message: "Invalid patient data" });
    }
  });

  // Report routes
  app.get("/api/reports", async (req, res) => {
    try {
      const reports = await storage.getReports();
      res.json(reports);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch reports" });
    }
  });

  app.get("/api/reports/patient/:patientId", async (req, res) => {
    try {
      const reports = await storage.getReportsByPatient(req.params.patientId);
      res.json(reports);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch patient reports" });
    }
  });

  app.post("/api/reports", async (req, res) => {
    try {
      const validatedData = insertReportSchema.parse(req.body);
      const report = await storage.createReport(validatedData);
      res.status(201).json(report);
    } catch (error) {
      res.status(400).json({ message: "Invalid report data" });
    }
  });

  // Imaging routes
  app.get("/api/imaging", async (req, res) => {
    try {
      const imaging = await storage.getImaging();
      res.json(imaging);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch imaging" });
    }
  });

  app.get("/api/imaging/patient/:patientId", async (req, res) => {
    try {
      const imaging = await storage.getImagingByPatient(req.params.patientId);
      res.json(imaging);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch patient imaging" });
    }
  });

  app.post("/api/imaging", async (req, res) => {
    try {
      const validatedData = insertImagingSchema.parse(req.body);
      const imaging = await storage.createImaging(validatedData);
      res.status(201).json(imaging);
    } catch (error) {
      res.status(400).json({ message: "Invalid imaging data" });
    }
  });

  // AI Search endpoint
  app.post("/api/ai/search", async (req, res) => {
    try {
      const { query } = req.body;
      // Simulate AI processing
      setTimeout(() => {
        res.json({
          response: `AI processed query: "${query}". This would typically connect to an AI service for clinical insights.`,
          confidence: 85,
          suggestions: [
            "Check patient medication interactions",
            "Review recent lab results",
            "Consult latest clinical guidelines"
          ]
        });
      }, 1000);
    } catch (error) {
      res.status(500).json({ message: "AI search failed" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
