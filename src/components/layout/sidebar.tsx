"use client";

import { Mail, Contact } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLogout } from "@/src/hooks/use-logout";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LayoutDashboard, Users } from "lucide-react";

import { cn } from "@/lib/utils";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Manage Teams",
    href: "/teams",
    icon: Users,
  },
  {
    title: "Manage Invitations",
    href: "/invitations",
    icon: Mail,
  },
  {
    title: "Inspect Members",
    href: "/members",
    icon: Contact,
  },
  {
    title: "Supreme Dashboard",
    href: "/supreme-admin",
    icon: Contact,
  },
];

export default function Sidebar() {
  const logout = useLogout();
  const pathname = usePathname();

  return (
    <aside className="bg-background w-64 border-r">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold">DevHQ</h1>
      </div>

      <nav className="space-y-1 p-3">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 transition-colors",
                pathname === menu.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted",
              )}
            >
              <Icon size={18} />
              {menu.title}
            </Link>
          );
        })}
        <Button onClick={() => logout.mutate()} disabled={logout.isPending}>
          Logout
        </Button>
        <Button>
          <Link href="/">
          Go Home
        </Link>
        </Button>
      </nav>
    </aside>
  );
}
