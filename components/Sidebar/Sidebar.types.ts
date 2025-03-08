export interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  subItems?: SidebarItem[]; // Untuk menu nested
}

export interface SidebarProps {
  items: SidebarItem[];
}
