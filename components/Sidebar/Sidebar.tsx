
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarProps } from "./Sidebar.types";

export default function Sidebar({ items }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="bg-gray-900 text-white w-64 h-screen p-4">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-xl font-bold">My Dashboard</h1>
      </div>

      {/* Menu Items */}
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center p-2 rounded ${
                  pathname === item.href ? "bg-gray-800" : "hover:bg-gray-700"
                }`}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
