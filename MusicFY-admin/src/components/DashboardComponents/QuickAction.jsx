import {
  Music,
  UserRound,
  Disc3,
  ListMusic,
} from "lucide-react";

const QuickActions = () => {

  const actions = [
    {
      title: "Add Song",
      description: "Upload a new song",
      icon: Music,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "Add Artist",
      description: "Create an artist",
      icon: UserRound,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Add Album",
      description: "Create a new album",
      icon: Disc3,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Manage Playlists",
      description: "View all playlists",
      icon: ListMusic,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  return (
    <div
      className="
        bg-[#121212]
        border border-zinc-800
        rounded-xl
        p-5
      "
    >
      <h2 className="text-lg font-semibold text-white">
        Quick Actions
      </h2>

      <p className="text-sm text-zinc-500 mt-1 mb-5">
        Manage your MusicFY content
      </p>

      <div className="space-y-3">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="
                w-full
                flex
                items-center
                gap-3
                p-3
                rounded-lg
                bg-zinc-900
                hover:bg-zinc-800
                transition
                text-left
              "
            >
              <div
                className={`
                  w-9 h-9
                  rounded-lg
                  ${action.bg}
                  flex
                  items-center
                  justify-center
                `}
              >
                <Icon
                  size={18}
                  className={action.color}
                />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  {action.title}
                </p>

                <p className="text-xs text-zinc-600">
                  {action.description}
                </p>
              </div>

            </button>
          );
        })}

      </div>
    </div>
  );
};

export default QuickActions;