import { Edit, Trash2 } from "lucide-react";

const GenreTable = ({ genres, onDelete, onEdit }) => {
  return (
    <div className="w-full overflow-x-auto bg-zinc-900 border border-zinc-800 rounded-xl">

      <table className="w-full min-w-175">

        <thead className="border-b border-zinc-800">
          <tr className="text-left">

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Genre
            </th>

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Description
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

          {genres.map((genre) => (
            <tr
              key={genre.id}
              className="
                border-b
                border-zinc-800
                last:border-none
                hover:bg-zinc-800/50
                transition
              "
            >

              {/* Genre */}
              <td className="px-5 py-4">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-lg
                      bg-green-500/10
                      text-green-500
                      flex
                      items-center
                      justify-center
                      font-semibold
                    "
                  >
                    {genre.name.charAt(0)}
                  </div>

                  <span className="text-sm font-medium text-white">
                    {genre.name}
                  </span>

                </div>

              </td>

              {/* Description */}
              <td className="px-5 py-4 text-sm text-zinc-400">
                {genre.description}
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
                      genre.status === "Active"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-red-500/10 text-red-500"
                    }
                  `}
                >
                  {genre.status}
                </span>

              </td>

              {/* Actions */}
              <td className="px-5 py-4">

                <div className="flex justify-end gap-2">

                  <button
                    onClick={() => onEdit(genre)}
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
                    onClick={() => onDelete(genre.id)}
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

export default GenreTable;