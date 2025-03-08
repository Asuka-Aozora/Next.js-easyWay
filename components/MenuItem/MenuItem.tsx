// components/MenuItem/MenuItem.tsx
export interface MenuItemProps {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  icon,
  onClick,
  isActive = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center p-2 ${isActive ? "bg-gray-800" : ""}`}
    >
      {icon} {label}
    </button>
  );
};


