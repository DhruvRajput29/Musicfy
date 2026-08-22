import { ListMusic, User } from "lucide-react";

const PlaylistCard = ({ playlist }) => {
  return (
    <div
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-xl
        p-4
      "
    >

      {/* Top */}
      <div className="flex items-center gap-3 mb-4">

        <div
          className="
            w-11
            h-11
            rounded-lg
            bg-green-500/10
            flex
            items-center
            justify-center
          "
        >
          <ListMusic
            size={24}
            className="text-green-500"
          />
        </div>

        <div>

          <h3 className="text-sm font-semibold text-white">
            {playlist.name}
          </h3>

          <p className="text-xs text-zinc-500">
            ID: #{playlist.id}
          </p>

        </div>

      </div>

      {/* Owner */}
      <div className="flex items-center gap-2 mb-3">

        <User
          size={16}
          className="text-zinc-500"
        />

        <span className="text-sm text-zinc-300">
          {playlist.owner}
        </span>

      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between">

        <span className="text-xs text-zinc-500">
          {playlist.songs} songs
        </span>

        <span
          className={`
            px-2.5
            py-1
            rounded-full
            text-xs
            font-medium
            ${
              playlist.status === "Active"
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }
          `}
        >
          {playlist.status}
        </span>

      </div>

    </div>
  );
};

export default PlaylistCard;