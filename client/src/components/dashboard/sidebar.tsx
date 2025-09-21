import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Camera, 
  BarChart3, 
  AlertTriangle, 
  Settings,
  Plus,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Patients" },
  { icon: FileText, label: "Reports" },
  { icon: Camera, label: "Imaging" },
  { icon: BarChart3, label: "Analytics" },
  { icon: AlertTriangle, label: "Alerts", badge: "3" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-72 md:flex-col" data-testid="sidebar">
      <div className="flex flex-col flex-grow bg-sidebar border-r border-sidebar-border overflow-y-auto">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0 px-6 py-6 border-b border-sidebar-border" data-testid="logo-section">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <Plus className="w-6 h-6 text-sidebar-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-sidebar-foreground" data-testid="app-title">
                TreadGram
              </h1>
              <p className="text-xs text-muted-foreground" data-testid="app-subtitle">
                Clinical Intelligence
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-4 space-y-2" data-testid="navigation-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.label}
                variant="ghost"
                className={cn(
                  "sidebar-item flex items-center justify-start w-full px-4 py-3 text-sm font-medium rounded-lg",
                  item.active ? "active" : "text-muted-foreground"
                )}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
                {item.badge && (
                  <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Button>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="flex-shrink-0 p-4 border-t border-sidebar-border" data-testid="user-profile">
          <div className="flex items-center space-x-3">
            <img 
              className="w-10 h-10 rounded-full" 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
              alt="Dr. Sarah Johnson"
              data-testid="user-avatar"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground" data-testid="user-name">
                Dr. Sarah Johnson
              </p>
              <p className="text-xs text-muted-foreground" data-testid="user-role">
                Cardiologist
              </p>
            </div>
            <Button variant="ghost" size="sm" data-testid="logout-button">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
