import { useGetPatientsQuery } from "@/store/slices/patientsSlice";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { Patient } from "@shared/schema";

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-accent/10 text-accent";
    case "critical":
      return "bg-destructive/10 text-destructive";
    case "follow-up":
      return "bg-chart-3/10 text-chart-3";
    default:
      return "bg-muted/10 text-muted-foreground";
  }
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map(part => part[0])
    .join("")
    .toUpperCase();
};

const formatLastVisit = (date: Date | null) => {
  if (!date) return "Never";
  
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  if (days < 7) return `${days} days ago`;
  if (days < 14) return "1 week ago";
  return `${Math.floor(days / 7)} weeks ago`;
};

export function PatientList() {
  const { data: patients, isLoading } = useGetPatientsQuery();

  if (isLoading) {
    return (
      <Card className="shadow-sm" data-testid="patient-list-loading">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                </div>
                <div className="text-right">
                  <Skeleton className="h-3 w-20 mb-2" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Show empty state if no patients
  if (!patients || patients.length === 0) {
    return (
      <Card className="shadow-sm" data-testid="patient-list-empty">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Recent Patients</h2>
            <Button variant="link" className="text-primary hover:text-primary/80 text-sm font-medium">
              View All
            </Button>
          </div>
          <div className="text-center py-8">
            <p className="text-muted-foreground">No patients found. Add your first patient to get started.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-sm" data-testid="patient-list">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground" data-testid="patient-list-title">
            Recent Patients
          </h2>
          <Button variant="link" className="text-primary hover:text-primary/80 text-sm font-medium" data-testid="view-all-patients">
            View All
          </Button>
        </div>
        
        <div className="space-y-4">
          {patients.slice(0, 3).map((patient) => (
            <div 
              key={patient.id} 
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
              data-testid={`patient-card-${patient.id}`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold" data-testid={`patient-initials-${patient.id}`}>
                    {getInitials(patient.name)}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground" data-testid={`patient-name-${patient.id}`}>
                    {patient.name}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`patient-details-${patient.id}`}>
                    {patient.age} years old • {patient.gender} • ID: {patient.medicalId}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground" data-testid={`patient-last-visit-${patient.id}`}>
                  Last visit: {formatLastVisit(patient.lastVisit)}
                </p>
                <Badge className={getStatusColor(patient.status)} data-testid={`patient-status-${patient.id}`}>
                  {patient.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
