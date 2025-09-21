import { useGetAnalyticsQuery } from "@/store/slices/analyticsSlice";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import type { Analytics } from "@shared/schema";

// Mock data for the chart - in a real app this would come from the API
const monthlyData = [
  { month: "Jan", reports: 850 },
  { month: "Feb", reports: 920 },
  { month: "Mar", reports: 1100 },
  { month: "Apr", reports: 1050 },
  { month: "May", reports: 1180 },
  { month: "Jun", reports: 1247 },
];

export function AnalyticsChart() {
  const { data: analytics, isLoading } = useGetAnalyticsQuery();

  return (
    <Card className="shadow-sm" data-testid="analytics-chart">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4" data-testid="chart-title">
          Monthly Reports Trend
        </h2>
        
        {isLoading ? (
          <div className="h-48" data-testid="chart-loading">
            <Skeleton className="w-full h-full" />
          </div>
        ) : (
          <div className="h-48" data-testid="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="reports" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
