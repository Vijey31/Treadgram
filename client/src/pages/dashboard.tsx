import { Sidebar } from "@/components/dashboard/sidebar";
import { TopNav } from "@/components/dashboard/top-nav";
import { AnalyticsCards } from "@/components/dashboard/analytics-cards";
import { PatientList } from "@/components/dashboard/patient-list";
import { AIAssistant } from "@/components/dashboard/ai-assistant";
import { RecentReports } from "@/components/dashboard/recent-reports";
import { ImagingPanel } from "@/components/dashboard/imaging-panel";

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden" data-testid="dashboard-container">
      <Sidebar />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-y-auto bg-background p-6" data-testid="main-content">
          <div className="max-w-7xl mx-auto">
            {/* Dashboard Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2" data-testid="dashboard-title">
                Clinical Dashboard
              </h1>
              <p className="text-muted-foreground" data-testid="dashboard-subtitle">
                Welcome back, Dr. Johnson. Here's your AI-powered clinical overview for today.
              </p>
            </div>

            {/* AI Assistant */}
            <AIAssistant />

            {/* Analytics Cards */}
            <AnalyticsCards />

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Patient List */}
              <div className="lg:col-span-2">
                <PatientList />
              </div>

              {/* Imaging Panel */}
              <div className="space-y-6">
                <ImagingPanel />
              </div>
            </div>

            {/* Recent Reports */}
            <RecentReports />
          </div>
        </main>
      </div>
    </div>
  );
}
