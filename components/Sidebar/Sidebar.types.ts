
export interface SidebarItem {
  label: string;
  href: string;
  icon?: React.ReactNode; // Optional icon
}

export interface SidebarProps {
  items: SidebarItem[];
}
