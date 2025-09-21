import { type User, type InsertUser, type Patient, type InsertPatient, type Report, type InsertReport, type Imaging, type InsertImaging, type Analytics, type InsertAnalytics } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Patients
  getPatients(): Promise<Patient[]>;
  getPatient(id: string): Promise<Patient | undefined>;
  createPatient(patient: InsertPatient): Promise<Patient>;
  updatePatient(id: string, updates: Partial<Patient>): Promise<Patient | undefined>;
  
  // Reports
  getReports(): Promise<Report[]>;
  getReportsByPatient(patientId: string): Promise<Report[]>;
  createReport(report: InsertReport): Promise<Report>;
  
  // Imaging
  getImaging(): Promise<Imaging[]>;
  getImagingByPatient(patientId: string): Promise<Imaging[]>;
  createImaging(imaging: InsertImaging): Promise<Imaging>;
  
  // Analytics
  getAnalytics(): Promise<Analytics[]>;
  updateAnalytics(metric: string, value: number, change?: number): Promise<Analytics>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private patients: Map<string, Patient>;
  private reports: Map<string, Report>;
  private imaging: Map<string, Imaging>;
  private analytics: Map<string, Analytics>;

  constructor() {
    this.users = new Map();
    this.patients = new Map();
    this.reports = new Map();
    this.imaging = new Map();
    this.analytics = new Map();
    
    // Initialize with default doctor user
    this.initializeDefaultData();
  }

  private initializeDefaultData() {
    const defaultUser: User = {
      id: randomUUID(),
      username: "dr.johnson",
      password: "hashedpassword",
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    };
    this.users.set(defaultUser.id, defaultUser);

    // Initialize sample patients
    const samplePatients: Patient[] = [
      {
        id: randomUUID(),
        name: "Emily Chen",
        age: 34,
        gender: "Female",
        medicalId: "MED-2024-001",
        status: "Active",
        lastVisit: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 30 days ago
      },
      {
        id: randomUUID(),
        name: "Michael Rodriguez",
        age: 58,
        gender: "Male",
        medicalId: "MED-2024-002",
        status: "Critical",
        lastVisit: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
        createdAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000) // 45 days ago
      },
      {
        id: randomUUID(),
        name: "Sarah Thompson",
        age: 42,
        gender: "Female",
        medicalId: "MED-2024-003",
        status: "Follow-up",
        lastVisit: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
        createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) // 60 days ago
      },
      {
        id: randomUUID(),
        name: "James Wilson",
        age: 67,
        gender: "Male",
        medicalId: "MED-2024-004",
        status: "Active",
        lastVisit: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) // 90 days ago
      }
    ];

    samplePatients.forEach(patient => {
      this.patients.set(patient.id, patient);
    });

    const patientIds = samplePatients.map(p => p.id);

    // Initialize sample reports
    const sampleReports: Report[] = [
      {
        id: randomUUID(),
        patientId: patientIds[0],
        title: "Echocardiogram Analysis",
        summary: "Normal left ventricular function with ejection fraction of 65%. No significant valvular abnormalities detected. Recommended continuation of current cardiac medications.",
        confidence: 92,
        type: "Cardiology",
        aiGenerated: true,
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000) // 1 hour ago
      },
      {
        id: randomUUID(),
        patientId: patientIds[1],
        title: "Chest X-Ray Assessment",
        summary: "Mild cardiomegaly observed with possible early signs of pulmonary edema. Recommend urgent follow-up and adjustment of diuretic therapy. Monitor oxygen saturation closely.",
        confidence: 88,
        type: "Radiology",
        aiGenerated: true,
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000) // 3 hours ago
      },
      {
        id: randomUUID(),
        patientId: patientIds[2],
        title: "Stress Test Results",
        summary: "Exercise stress test completed successfully. No ischemic changes noted at maximum heart rate. Patient demonstrated good exercise tolerance. Follow-up in 6 months.",
        confidence: 95,
        type: "Cardiology",
        aiGenerated: true,
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000) // 6 hours ago
      }
    ];

    sampleReports.forEach(report => {
      this.reports.set(report.id, report);
    });

    // Initialize sample imaging
    const sampleImaging: Imaging[] = [
      {
        id: randomUUID(),
        patientId: patientIds[0],
        type: "Echocardiogram",
        description: "Transthoracic echocardiogram showing normal cardiac chambers and wall motion",
        anomalyDetected: false,
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
      },
      {
        id: randomUUID(),
        patientId: patientIds[1],
        type: "Chest X-Ray",
        description: "PA and lateral chest radiograph demonstrating cardiomegaly with possible fluid retention",
        anomalyDetected: true,
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
      },
      {
        id: randomUUID(),
        patientId: patientIds[3],
        type: "CT Scan",
        description: "Cardiac CT angiography showing patent coronary arteries without significant stenosis",
        anomalyDetected: false,
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000) // 8 hours ago
      }
    ];

    sampleImaging.forEach(imaging => {
      this.imaging.set(imaging.id, imaging);
    });

    // Initialize analytics metrics
    const metrics = [
      { metric: "reports_month", value: 1247, change: 125, period: "monthly" },
      { metric: "anomalies_detected", value: 23, change: 3, period: "daily" },
      { metric: "storage_usage", value: 2400, change: 50, period: "daily" },
      { metric: "active_patients", value: 892, change: 45, period: "weekly" }
    ];

    metrics.forEach(metric => {
      const analytics: Analytics = {
        id: randomUUID(),
        ...metric,
        updatedAt: new Date()
      };
      this.analytics.set(analytics.id, analytics);
    });
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id, avatar: insertUser.avatar || null };
    this.users.set(id, user);
    return user;
  }

  // Patient methods
  async getPatients(): Promise<Patient[]> {
    return Array.from(this.patients.values()).sort((a, b) => 
      new Date(b.lastVisit || 0).getTime() - new Date(a.lastVisit || 0).getTime()
    );
  }

  async getPatient(id: string): Promise<Patient | undefined> {
    return this.patients.get(id);
  }

  async createPatient(insertPatient: InsertPatient): Promise<Patient> {
    const id = randomUUID();
    const patient: Patient = { 
      ...insertPatient, 
      id, 
      lastVisit: insertPatient.lastVisit || null,
      createdAt: new Date() 
    };
    this.patients.set(id, patient);
    return patient;
  }

  async updatePatient(id: string, updates: Partial<Patient>): Promise<Patient | undefined> {
    const patient = this.patients.get(id);
    if (!patient) return undefined;
    
    const updatedPatient = { ...patient, ...updates };
    this.patients.set(id, updatedPatient);
    return updatedPatient;
  }

  // Report methods
  async getReports(): Promise<Report[]> {
    return Array.from(this.reports.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async getReportsByPatient(patientId: string): Promise<Report[]> {
    return Array.from(this.reports.values())
      .filter(report => report.patientId === patientId)
      .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
  }

  async createReport(insertReport: InsertReport): Promise<Report> {
    const id = randomUUID();
    const report: Report = { 
      ...insertReport, 
      id, 
      aiGenerated: insertReport.aiGenerated ?? true,
      createdAt: new Date() 
    };
    this.reports.set(id, report);
    return report;
  }

  // Imaging methods
  async getImaging(): Promise<Imaging[]> {
    return Array.from(this.imaging.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async getImagingByPatient(patientId: string): Promise<Imaging[]> {
    return Array.from(this.imaging.values())
      .filter(imaging => imaging.patientId === patientId)
      .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
  }

  async createImaging(insertImaging: InsertImaging): Promise<Imaging> {
    const id = randomUUID();
    const imaging: Imaging = { 
      ...insertImaging, 
      id, 
      anomalyDetected: insertImaging.anomalyDetected ?? false,
      imageUrl: insertImaging.imageUrl || null,
      createdAt: new Date() 
    };
    this.imaging.set(id, imaging);
    return imaging;
  }

  // Analytics methods
  async getAnalytics(): Promise<Analytics[]> {
    return Array.from(this.analytics.values());
  }

  async updateAnalytics(metric: string, value: number, change?: number): Promise<Analytics> {
    const existing = Array.from(this.analytics.values()).find(a => a.metric === metric);
    if (existing) {
      existing.value = value;
      existing.change = change ?? null;
      existing.updatedAt = new Date();
      this.analytics.set(existing.id, existing);
      return existing;
    } else {
      const id = randomUUID();
      const analytics: Analytics = {
        id,
        metric,
        value,
        change: change ?? null,
        period: "daily",
        updatedAt: new Date()
      };
      this.analytics.set(id, analytics);
      return analytics;
    }
  }
}

export const storage = new MemStorage();
