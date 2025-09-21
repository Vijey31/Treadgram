import { useGetAnalyticsQuery } from "@/store/slices/analyticsSlice";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, AlertTriangle, Database, Users } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Analytics } from "@shared/schema";

const icons = {
  reports_month: FileText,
  anomalies_detected: AlertTriangle,
  storage_usage: Database,
  active_patients: Users,
};

const colors = {
  reports_month: "text-primary",
  anomalies_detected: "text-destructive",
  storage_usage: "text-accent",
  active_patients: "text-chart-2",
};

const backgrounds = {
  reports_month: "bg-primary/10",
  anomalies_detected: "bg-destructive/10",
  storage_usage: "bg-accent/10",
  active_patients: "bg-chart-2/10",
};

const titles = {
  reports_month: "Reports This Month",
  anomalies_detected: "Anomalies Detected",
  storage_usage: "Storage Usage",
  active_patients: "Active Patients",
};

const formatValue = (metric: string, value: number) => {
  if (metric === "storage_usage") {
    return `${(value / 1000).toFixed(1)} TB`;
  }
  return value.toLocaleString();
};

const formatChange = (metric: string, change: number) => {
  if (metric === "storage_usage") {
    return "78% capacity";
  }
  const sign = change > 0 ? "+" : "";
  if (metric === "reports_month") {
    return `${sign}${((change / 1247) * 100).toFixed(1)}% from last month`;
  }
  if (metric === "anomalies_detected") {
    return `${sign}${change} since yesterday`;
  }
  if (metric === "active_patients") {
    return `${sign}${change} new this week`;
  }
  return `${sign}${change}`;
};

export function AnalyticsCards() {
  const { data: analytics, isLoading } = useGetAnalyticsQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-testid="analytics-loading">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <Skeleton className="h-12 w-12 rounded-lg mb-4" />
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-8 w-16 mb-4" />
              <Skeleton className="h-4 w-32" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-testid="analytics-cards">
      {analytics?.map((metric) => {
        const Icon = icons[metric.metric as keyof typeof icons];
        const iconColor = colors[metric.metric as keyof typeof colors];
        const bgColor = backgrounds[metric.metric as keyof typeof backgrounds];
        const title = titles[metric.metric as keyof typeof titles];
        
        if (!Icon) return null;

        return (
          <Card key={metric.id} className="shadow-sm" data-testid={`analytics-card-${metric.metric}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground" data-testid={`metric-title-${metric.metric}`}>
                    {title}
                  </p>
                  <p className="text-2xl font-bold text-foreground" data-testid={`metric-value-${metric.metric}`}>
                    {formatValue(metric.metric, metric.value)}
                  </p>
                </div>
                <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
              </div>
              {metric.change !== null && metric.change !== undefined && (
                <div className="mt-4 flex items-center">
                  <span className={`text-sm font-medium ${
                    metric.metric === "storage_usage" ? "text-accent" :
                    metric.change > 0 ? "text-accent" : "text-destructive"
                  }`} data-testid={`metric-change-${metric.metric}`}>
                    {metric.metric === "storage_usage" ? "78% capacity" : 
                     metric.change > 0 ? `+${metric.change}` : metric.change}
                  </span>
                  {metric.metric !== "storage_usage" && (
                    <span className="text-sm text-muted-foreground ml-2">
                      {formatChange(metric.metric, metric.change).split(metric.change.toString())[1]}
                    </span>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
