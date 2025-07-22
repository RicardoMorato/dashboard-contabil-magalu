import { LucideIcon } from "lucide-react";

interface StatCardProps {
  name: string;
  icon: LucideIcon;
  value: number | string;
  valueClassName?: string;
}

const StatCard = ({
  name,
  icon: Icon,
  value,
  valueClassName,
}: StatCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
      <div className="p-2 bg-blue-100 rounded-full text-blue-600">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-gray-500">{name}</p>
        <p className={`text-lg font-semibold ${valueClassName}`}>{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
