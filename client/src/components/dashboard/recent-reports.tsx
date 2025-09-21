import { useGetReportsQuery } from "@/store/slices/reportsSlice";
import { useGetPatientsQuery } from "@/store/slices/patientsSlice";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbulb } from "lucide-react";
import type { Report, Patient } from "@shared/schema";

const formatTimeAgo = (date: Date | null) => {
  if (!date) return "Unknown";
  
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  
  if (hours < 1) return "Just now";
  if (hours === 1) return "1h ago";
  if (hours < 24) return `${hours}h ago`;
  
  const days = Math.floor(hours / 24);
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
};

export function RecentReports() {
  const { data: reports, isLoading: reportsLoading } = useGetReportsQuery();
  const { data: patients, isLoading: patientsLoading } = useGetPatientsQuery();

  const isLoading = reportsLoading || patientsLoading;

  const getPatientName = (patientId: string) => {
    const patient = patients?.find(p => p.id === patientId);
    return patient?.name || "Unknown Patient";
  };

  if (isLoading) {
    return (
      <div className="mt-8" data-testid="recent-reports-loading">
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Skeleton className="w-8 h-8 rounded-lg" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <Skeleton className="h-3 w-12" />
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-12 w-full mb-3" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show empty state if no reports
  if (!reports || reports.length === 0) {
    return (
      <div className="mt-8" data-testid="recent-reports-empty">
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">AI-Generated Report Summaries</h2>
              <Button variant="link" className="text-primary hover:text-primary/80 text-sm font-medium">
                View All Reports
              </Button>
            </div>
            <div className="text-center py-8">
              <p className="text-muted-foreground">No AI reports generated yet. Reports will appear here as they are created.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mt-8" data-testid="recent-reports">
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground" data-testid="reports-title">
              AI-Generated Report Summaries
            </h2>
            <Button variant="link" className="text-primary hover:text-primary/80 text-sm font-medium" data-testid="view-all-reports">
              View All Reports
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.slice(0, 3).map((report) => (
              <div 
                key={report.id} 
                className="border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors cursor-pointer"
                data-testid={`report-card-${report.id}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 text-accent" />
                    </div>
                    <Badge className="bg-accent/10 text-accent text-xs font-medium" data-testid={`ai-badge-${report.id}`}>
                      AI Summary
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground" data-testid={`report-timestamp-${report.id}`}>
                    {formatTimeAgo(report.createdAt)}
                  </span>
                </div>
                <h3 className="font-medium text-foreground mb-2" data-testid={`report-title-${report.id}`}>
                  {report.title} - {getPatientName(report.patientId)}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3" data-testid={`report-summary-${report.id}`}>
                  {report.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground" data-testid={`report-confidence-${report.id}`}>
                    Confidence: {report.confidence}%
                  </span>
                  <Button variant="link" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto" data-testid={`review-report-${report.id}`}>
                    Review
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
