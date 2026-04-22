"use client";

import { Home, Users, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Inicio", icon: Home, href: "/dashboard" },
    { name: "Usuarios", icon: Users, href: "/dashboard/users" },
    { name: "Configuración", icon: Settings, href: "/dashboard/settings" },
  ];

  const handleLogout = () => {
    toast.info("Sesión cerrada", {
      description: "Has salido del sistema correctamente.",
    });
    router.push("/login");
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] border-r border-outline-variant bg-surface z-50 flex flex-col py-6">
      <div className="px-6 mb-8">
        <h1 className="text-lg font-bold text-on-surface font-h1">WYA</h1>
        <p className="text-label-sm font-medium text-on-surface-variant/70">
          Admin
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-6 py-3 transition-colors duration-200 text-body-md group ${
                isActive
                  ? "bg-secondary-container text-primary border-l-[3px] border-primary font-semibold"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-outline group-hover:text-primary"
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="px-6 mt-auto border-t border-outline-variant/30 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant font-bold">
              AD
            </div>
            <div>
              <p className="text-body-md font-bold text-on-surface leading-none mb-1">
                Admin User
              </p>
              <p className="text-label-sm text-on-surface-variant">
                Super Admin
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-outline hover:text-error transition-colors p-2 hover:bg-error/10 rounded-full"
            title="Cerrar sesión"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
