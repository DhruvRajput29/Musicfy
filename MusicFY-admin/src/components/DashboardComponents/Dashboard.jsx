import {
  Music,
  UserRound,
  Disc3,
  Users,
} from "lucide-react";

import StatCard from "./StateCard";
import OverviewCard from "./OverviewCard";
import QuickActions from "./QuickAction";
import RecentSongs from "./RecentSong";

const Dashboard = () => {

  const stats = [
    {
      title: "Total Songs",
      value: "0",
      icon: Music,
      description: "Songs in your library",
    },
    {
      title: "Total Artists",
      value: "0",
      icon: UserRound,
      description: "Artists on MusicFY",
    },
    {
      title: "Total Albums",
      value: "0",
      icon: Disc3,
      description: "Albums available",
    },
    {
      title: "Total Users",
      value: "0",
      icon: Users,
      description: "Registered users",
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Welcome back, Admin. Here's what's happening on MusicFY.
          </p>
        </div>

      </div>

      {/* Stats */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-4
        "
      >
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
          />
        ))}
      </div>

      {/* Overview + Quick Actions */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
        "
      >
        <OverviewCard />

        <QuickActions />
      </div>

      {/* Recent Songs */}
      <RecentSongs />

    </div>
  );
};

export default Dashboard;