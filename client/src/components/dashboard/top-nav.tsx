import { Search, Bell, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TopNav() {
  return (
    <header className="bg-card border-b border-border z-10" data-testid="top-navigation">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" data-testid="mobile-menu-button">
            <Menu className="w-6 h-6" />
          </Button>
          
          {/* Search Bar */}
          <div className="relative max-w-lg w-full" data-testid="search-container">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input 
              type="text" 
              className="pl-10 pr-3 py-2"
              placeholder="Search patients, reports, or ask AI..."
              data-testid="search-input"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative" data-testid="notifications-button">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-3 h-3 bg-destructive rounded-full" data-testid="notification-badge"></span>
          </Button>

          {/* User Profile */}
          <div className="flex items-center space-x-3" data-testid="user-profile-section">
            <img 
              className="w-8 h-8 rounded-full" 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
              alt="Dr. Sarah Johnson"
              data-testid="profile-avatar"
            />
            <span className="hidden md:block text-sm font-medium" data-testid="profile-name">
              Dr. Sarah Johnson
            </span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
}
