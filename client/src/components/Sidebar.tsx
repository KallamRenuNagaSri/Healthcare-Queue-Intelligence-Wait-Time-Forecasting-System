import { Link, useLocation } from "wouter";
import { LayoutDashboard, UserPlus, Users, Building2, LogOut } from "lucide-react";
import logoImg from "@assets/ChatGPT_Image_Mar_10,_2026,_09_04_52_PM_1773156915193.png";

export function Sidebar() {
  const [location] = useLocation();

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Add Patient", href: "/dashboard", icon: UserPlus }, // Keeping on same page for seamless experience
    { label: "View Queues", href: "/dashboard", icon: Users },
    { label: "Departments", href: "/dashboard", icon: Building2 },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-border/50 flex flex-col shadow-soft z-10 hidden md:flex sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <img src={logoImg} alt="QueueCare Logo" className="h-10 object-contain" />
        <span className="text-xl font-bold text-foreground">QueueCare</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.label} href={item.href} className={`
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
              ${isActive 
                ? "bg-primary/10 text-primary font-medium" 
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"}
            `}>
              <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary transition-colors"}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border/50">
        <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors duration-200">
          <LogOut className="w-5 h-5" />
          Logout
        </Link>
      </div>
    </div>
  );
}
