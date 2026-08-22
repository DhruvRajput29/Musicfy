import { Edit, Trash2 } from "lucide-react";

const AlbumTable = ({ albums, onDelete, onEdit }) => {
  return (
    <div className="w-full overflow-x-auto bg-zinc-900 border border-zinc-800 rounded-xl">

      <table className="w-full min-w-200">

        <thead className="border-b border-zinc-800">
          <tr className="text-left">

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Album
            </th>

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Artist
            </th>

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Year
            </th>

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Genre
            </th>

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Status
            </th>

            <th className="px-5 py-4 text-sm font-medium text-zinc-400 text-right">
              Actions
            </th>

          </tr>
        </thead>

        <tbody>

          {albums.map((album) => (
            <tr
              key={album.id}
              className="
                border-b
                border-zinc-800
                last:border-none
                hover:bg-zinc-800/50
                transition
              "
            >

              {/* Album */}
              <td className="px-5 py-4">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-lg
                      bg-zinc-800
                      flex
                      items-center
                      justify-center
                      text-zinc-500
                    "
                  >
                    {album.title.charAt(0)}
                  </div>

                  <span className="text-sm font-medium text-white">
                    {album.title}
                  </span>

                </div>

              </td>

              {/* Artist */}
              <td className="px-5 py-4 text-sm text-zinc-300">
                {album.artist}
              </td>

              {/* Year */}
              <td className="px-5 py-4 text-sm text-zinc-300">
                {album.releaseYear}
              </td>

              {/* Genre */}
              <td className="px-5 py-4 text-sm text-zinc-300">
                {album.genre}
              </td>

              {/* Status */}
              <td className="px-5 py-4">

                <span
                  className={`
                    inline-flex
                    px-2.5
                    py-1
                    rounded-full
                    text-xs
                    font-medium
                    ${
                      album.status === "Active"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-red-500/10 text-red-500"
                    }
                  `}
                >
                  {album.status}
                </span>

              </td>

              {/* Actions */}
              <td className="px-5 py-4">

                <div className="flex justify-end gap-2">

                  <button
                    onClick={() => onEdit(album)}
                    className="
                      p-2
                      rounded-lg
                      text-zinc-400
                      hover:bg-blue-500/10
                      hover:text-blue-500
                      transition
                    "
                  >
                    <Edit size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(album.id)}
                    className="
                      p-2
                      rounded-lg
                      text-zinc-400
                      hover:bg-red-500/10
                      hover:text-red-500
                      transition
                    "
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default AlbumTable;