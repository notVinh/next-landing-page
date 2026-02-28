// components/StatCard.tsx
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  iconBgColor: string;
  iconColor: string;
}

export const StatCard = ({
  icon: Icon,
  value,
  label,
  iconBgColor,
  iconColor,
}: StatCardProps) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 min-w-[100px]">
    <div className={`p-3 rounded-lg ${iconBgColor}`}>
      <Icon size={24} className={iconColor} />
    </div>
    <div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  </div>
);
