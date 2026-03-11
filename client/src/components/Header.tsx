import { Search, User } from "lucide-react";

export function Header() {
  const email = typeof window !== "undefined" ? localStorage.getItem("userEmail") : null;
  const displayName = email || "Staff";

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-20 flex items-center justify-between px-8">
      <div className="flex items-center bg-secondary rounded-full px-4 py-2 w-96 border border-border/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
        <Search className="w-5 h-5 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search patients, ID, or departments..." 
          className="bg-transparent border-none outline-none w-full ml-3 text-sm placeholder:text-muted-foreground"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 pl-4 border-l border-border/50 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{displayName}</p>
            <p className="text-xs text-muted-foreground">Admin Desk</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:shadow-md transition-all">
            <User className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
