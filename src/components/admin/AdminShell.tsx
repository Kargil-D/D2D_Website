import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  Package,
  CalendarCheck,
  Users,
  Truck,
  Wallet,
  BarChart3,
  Settings,
} from "lucide-react";
import Logo from "@/components/common/Logo";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/enquiries", label: "Enquiries", icon: MessageSquare },
  { href: "/admin/packages", label: "Packages", icon: Package, active: true },
  { href: "/admin/bookings", label: "Bookings", icon: CalendarCheck },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/suppliers", label: "Suppliers", icon: Truck },
  { href: "/admin/finance", label: "Finance", icon: Wallet },
  { href: "/admin/reports", label: "Reports", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

interface AdminShellProps {
  children: React.ReactNode;
  title?: string;
}

/**
 * Admin layout shell with left sidebar + top bar.
 *
 * Note: this is the Phase-4 admin scaffold from ARCHITECTURE.md. Auth.js
 * protection will be added when the auth module ships; for now the routes
 * are reachable in dev so admins can manage itinerary markdown files.
 */
export default function AdminShell({ children, title }: AdminShellProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="text-sm font-semibold tracking-wide">
            Admin / Backend{title ? ` � ${title}` : ""}
          </div>
          <Link
            href="/"
            className="text-xs font-medium text-white/70 hover:text-white"
          >
            View site ?
          </Link>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto grid grid-cols-[240px_1fr] gap-0">
        {/* Sidebar */}
        <aside className="bg-white border-r border-slate-200 min-h-[calc(100vh-3.5rem)] sticky top-14">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
            <Logo size="sm" tone="dark" />
          </div>
          <div className="px-4 py-3 flex items-center gap-3 border-b border-slate-100">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold">
              A
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Admin</div>
              <div className="text-xs text-slate-500">Super Admin</div>
            </div>
          </div>
          <nav className="py-2">
            {NAV.map((n) => {
              const Icon = n.icon;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`flex items-center gap-3 px-6 py-2.5 text-sm font-medium transition-colors ${
                    n.active
                      ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <main className="bg-slate-100 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
