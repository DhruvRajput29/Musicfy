import { ListMusic, User } from "lucide-react";

const PlaylistTable = ({ playlists }) => {
  return (
    <div
      className="
        w-full
        overflow-x-auto
        bg-zinc-900
        border
        border-zinc-800
        rounded-xl
      "
    >
      <table className="w-full min-w-175">

        <thead className="border-b border-zinc-800">
          <tr className="text-left">

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Playlist
            </th>

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Owner
            </th>

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Songs
            </th>

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Status
            </th>

          </tr>
        </thead>

        <tbody>

          {playlists.map((playlist) => (
            <tr
              key={playlist.id}
              className="
                border-b
                border-zinc-800
                last:border-none
                hover:bg-zinc-800/50
                transition
              "
            >

              {/* Playlist */}
              <td className="px-5 py-4">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-lg
                      bg-green-500/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <ListMusic
                      size={21}
                      className="text-green-500"
                    />
                  </div>

                  <div>

                    <p className="text-sm font-medium text-white">
                      {playlist.name}
                    </p>

                    <p className="text-xs text-zinc-500">
                      ID: #{playlist.id}
                    </p>

                  </div>

                </div>

              </td>

              {/* Owner */}
              <td className="px-5 py-4">

                <div className="flex items-center gap-2">

                  <User
                    size={16}
                    className="text-zinc-500"
                  />

                  <span className="text-sm text-zinc-300">
                    {playlist.owner}
                  </span>

                </div>

              </td>

              {/* Songs */}
              <td className="px-5 py-4">

                <span className="text-sm text-zinc-300">
                  {playlist.songs}
                </span>

              </td>

              {/* Status */}
              <td className="px-5 py-4">

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

              </td>

            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
};

export default PlaylistTable;