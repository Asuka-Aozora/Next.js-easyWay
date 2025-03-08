import { MenuItem } from "@/components/MenuItem/MenuItem";
import ProductData from "./api/productData/ProductData";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: " " },
  { label: "Profile", href: "/profile", icon: " " },
  { label: "Settings", href: "/settings", icon: " " },
  { label: "Notifications", href: "/notifications", icon: " " },
  { label: "Logout", href: "/logout", icon: " " },
];

export default function Home() {
  return (
    <>
      {menuItems.map(({ label, href, icon }) => (
        <MenuItem key={label} href={href} label={label} icon={icon} />
      ))}
      <ProductData />
    </>
  );
}

