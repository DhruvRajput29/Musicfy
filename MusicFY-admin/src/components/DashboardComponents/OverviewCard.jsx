import { TrendingUp } from "lucide-react";

const OverviewCard = () => {
  return (
    <div
      className="
        xl:col-span-2
        bg-[#121212]
        border border-zinc-800
        rounded-xl
        p-5
      "
    >
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold text-white">
            Overview
          </h2>

          <p className="text-sm text-zinc-500 mt-1">
            MusicFY platform statistics
          </p>
        </div>

        <TrendingUp
          size={22}
          className="text-green-500"
        />

      </div>

      <div
        className="
          h-64
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <TrendingUp
          size={40}
          className="text-zinc-700 mb-4"
        />

        <h3 className="text-white font-medium">
          No data available
        </h3>

        <p className="text-sm text-zinc-600 mt-1">
          Statistics will appear here once data is available.
        </p>
      </div>
    </div>
  );
};

export default OverviewCard;