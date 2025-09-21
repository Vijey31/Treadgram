import { useGetImagingQuery } from "@/store/slices/imagingSlice";
import { useGetPatientsQuery } from "@/store/slices/patientsSlice";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AnalyticsChart } from "./analytics-chart";
import type { Imaging, Patient } from "@shared/schema";

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

export function ImagingPanel() {
  const { data: imaging, isLoading: imagingLoading } = useGetImagingQuery();
  const { data: patients, isLoading: patientsLoading } = useGetPatientsQuery();

  const isLoading = imagingLoading || patientsLoading;

  const getPatientName = (patientId: string) => {
    const patient = patients?.find(p => p.id === patientId);
    return patient?.name || "Unknown Patient";
  };

  const getPatientInitials = (patientId: string) => {
    const name = getPatientName(patientId);
    return name
      .split(" ")
      .map(part => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <>
      {/* Recent Imaging */}
      <Card className="shadow-sm" data-testid="recent-imaging">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground" data-testid="imaging-title">
              Recent Imaging
            </h2>
            <Button variant="link" className="text-primary hover:text-primary/80 text-sm font-medium" data-testid="view-all-imaging">
              View All
            </Button>
          </div>
          
          {isLoading ? (
            <div className="space-y-4" data-testid="imaging-loading">
              <Skeleton className="w-full h-32 rounded-lg" />
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-3 w-24 mb-1" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          ) : !imaging || imaging.length === 0 ? (
            <div className="text-center py-8" data-testid="imaging-empty">
              <p className="text-muted-foreground text-sm">No recent imaging studies available.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {imaging.slice(0, 1).map((scan) => (
                <div key={scan.id} data-testid={`imaging-item-${scan.id}`}>
                  <div className="relative">
                    {scan.imageUrl ? (
                      <img 
                        src={scan.imageUrl}
                        alt={`${scan.type} scan`}
                        className="w-full h-32 object-cover rounded-lg border border-border"
                        data-testid={`imaging-image-${scan.id}`}
                      />
                    ) : (
                      <div className="w-full h-32 bg-muted rounded-lg border border-border flex items-center justify-center">
                        <p className="text-muted-foreground text-sm">No image available</p>
                      </div>
                    )}
                    
                    {scan.anomalyDetected && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-destructive text-destructive-foreground text-xs" data-testid={`anomaly-badge-${scan.id}`}>
                          Anomaly Detected
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="mt-2">
                    <h4 className="font-medium text-foreground" data-testid={`imaging-description-${scan.id}`}>
                      {scan.type} - {getPatientInitials(scan.patientId)}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`imaging-details-${scan.id}`}>
                      {scan.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1" data-testid={`imaging-timestamp-${scan.id}`}>
                      {formatTimeAgo(scan.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Analytics Chart */}
      <AnalyticsChart />
    </>
  );
}
