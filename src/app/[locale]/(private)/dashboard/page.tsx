import { getUserFromCookie } from "@/services/auth";
import { LayoutDashboard, User, Settings, Bell } from "lucide-react";

export default async function DashboardPage() {
  const user = await getUserFromCookie();

  return (
    <div className="section-padding bg-dark min-h-screen">
      <div className="container">

        {/* Header */}
        <div className="mb-10">
          <h1 className="page-title">
            Welcome back{user?.name ? `, ${user.name}` : ""}
          </h1>
          <p className="page-subtitle mt-2">
            Here&apos;s an overview of your account.
          </p>
        </div>

        {/* Stats cards — replace with your domain-specific data */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {STAT_CARDS.map((card) => (
            <div key={card.label} className="card p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-gray-400">{card.label}</p>
                <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center text-primary">
                  <card.icon className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-bold text-white">{card.value}</p>
              <p className="text-xs text-gray-500 mt-1">{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Profile summary */}
        <div className="card p-6 max-w-xl">
          <h2 className="section-title text-lg mb-4">Account details</h2>
          <dl className="space-y-3">
            <div className="flex gap-4">
              <dt className="w-24 text-sm text-gray-500 flex-shrink-0">Name</dt>
              <dd className="text-sm font-medium text-white">{user?.name ?? "—"}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 text-sm text-gray-500 flex-shrink-0">Email</dt>
              <dd className="text-sm font-medium text-white">{user?.email ?? "—"}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 text-sm text-gray-500 flex-shrink-0">Role</dt>
              <dd className="text-sm font-medium text-white capitalize">{user?.role ?? "user"}</dd>
            </div>
          </dl>
        </div>

      </div>
    </div>
  );
}

const STAT_CARDS = [
  { label: "Total Orders",     value: "—", sub: "Lifetime orders",       icon: LayoutDashboard },
  { label: "Account Status",   value: "Active", sub: "Account is in good standing", icon: User },
  { label: "Notifications",    value: "0",  sub: "Unread messages",     icon: Bell },
  { label: "Settings",         value: "✓",  sub: "Profile complete",    icon: Settings },
];
