import { TrendingUp } from "lucide-react";

const StatCard = ({
  title,
  value,
  description,
  icon: Icon,
}) => {
  return (
    <div
      className="
        bg-[#121212]
        border border-zinc-800
        rounded-xl
        p-5
        hover:border-zinc-700
        transition
      "
    >
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-zinc-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h2>
        </div>

        <div
          className="
            w-11 h-11
            rounded-lg
            bg-green-500/10
            flex
            items-center
            justify-center
          "
        >
          <Icon
            size={22}
            className="text-green-500"
          />
        </div>

      </div>

      <p className="mt-4 text-xs text-zinc-600">
        {description}
      </p>
    </div>
  );
};

export default StatCard;