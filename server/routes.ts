import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertDownloadSchema } from "@shared/schema";
import { generateProgramBrochure, generateDetailedSyllabus } from "./services/pdf-service";
import { sendInquiryNotification } from "./services/email-service";

export async function registerRoutes(app: Express): Promise<Server> {
  // Submit inquiry form
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      
      // Send notification email (in production)
      await sendInquiryNotification(inquiry);
      
      res.json({ success: true, inquiry });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Invalid inquiry data" 
      });
    }
  });

  // Get all inquiries (admin endpoint)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Failed to fetch inquiries" 
      });
    }
  });

  // Download program brochure
  app.post("/api/download/brochure", async (req, res) => {
    try {
      const { email } = req.body;
      
      // Track download
      await storage.createDownload({
        type: "brochure",
        email: email || null,
      });

      const pdfBuffer = await generateProgramBrochure();
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="PGDCS-Program-Brochure.pdf"');
      res.send(pdfBuffer);
    } catch (error) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Failed to generate brochure" 
      });
    }
  });

  // Download detailed syllabus
  app.post("/api/download/syllabus", async (req, res) => {
    try {
      const { email } = req.body;
      
      // Track download
      await storage.createDownload({
        type: "syllabus",
        email: email || null,
      });

      const pdfBuffer = await generateDetailedSyllabus();
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="PGDCS-Detailed-Syllabus.pdf"');
      res.send(pdfBuffer);
    } catch (error) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Failed to generate syllabus" 
      });
    }
  });

  // Get download statistics
  app.get("/api/downloads/stats", async (req, res) => {
    try {
      const downloads = await storage.getDownloads();
      const stats = {
        total: downloads.length,
        brochure: downloads.filter(d => d.type === "brochure").length,
        syllabus: downloads.filter(d => d.type === "syllabus").length,
      };
      res.json(stats);
    } catch (error) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Failed to fetch download stats" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
