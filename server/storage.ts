import { type Inquiry, type InsertInquiry, type Download, type InsertDownload } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  createDownload(download: InsertDownload): Promise<Download>;
  getDownloads(): Promise<Download[]>;
}

export class MemStorage implements IStorage {
  private inquiries: Map<string, Inquiry>;
  private downloads: Map<string, Download>;

  constructor() {
    this.inquiries = new Map();
    this.downloads = new Map();
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = randomUUID();
    const inquiry: Inquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createDownload(insertDownload: InsertDownload): Promise<Download> {
    const id = randomUUID();
    const download: Download = {
      id,
      type: insertDownload.type,
      courseCode: insertDownload.courseCode ?? null,
      email: insertDownload.email ?? null,
      downloadedAt: new Date(),
    };
    this.downloads.set(id, download);
    return download;
  }

  async getDownloads(): Promise<Download[]> {
    return Array.from(this.downloads.values()).sort(
      (a, b) => b.downloadedAt.getTime() - a.downloadedAt.getTime()
    );
  }
}

export const storage = new MemStorage();
