import { Edit, Trash2, Music2 } from "lucide-react";

const SongRow = ({
  song,
  onDelete,
  onEdit,
  onToggleStatus,
}) => {
  const isActive = song.status === "active";

  return (
    <tr className="hover:bg-zinc-800/50 transition">

      {/* Song */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
            <Music2
              size={20}
              className="text-green-500"
            />
          </div>

          <div className="min-w-0">
            <p className="text-white font-medium truncate">
              {song.title}
            </p>

            <p className="text-xs text-zinc-500">
              ID: {song.id}
            </p>
          </div>

        </div>
      </td>

      {/* Artist */}
      <td className="px-5 py-4 text-zinc-300">
        {song.artist || "Unknown"}
      </td>

      {/* Album */}
      <td className="px-5 py-4 text-zinc-400">
        {song.album || "No Album"}
      </td>

      {/* Genre */}
      <td className="px-5 py-4">
        <span className="px-2.5 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300">
          {song.genre || "Unknown"}
        </span>
      </td>

      {/* Status */}
     {/* Status */}
<td className="px-5 py-4">
  <div className="flex items-center gap-2">

    <button
      type="button"
      onClick={() => onToggleStatus(song)}
      className={`
        relative
        w-10
        h-5
        rounded-full
        transition-colors
        duration-200
        shrink-0
        ${
          isActive
            ? "bg-green-500"
            : "bg-zinc-600"
        }
      `}
      title={isActive ? "Pause song" : "Activate song"}
    >
      <span
        className={`
          absolute
          top-0.5
          w-4
          h-4
          rounded-full
          bg-white
          shadow-sm
          transition-all
          duration-200
          ${
            isActive
              ? "left-5"
              : "left-0.5"
          }
        `}
      />
    </button>

    <span
      className={`text-xs font-medium whitespace-nowrap ${
        isActive
          ? "text-green-500"
          : "text-zinc-500"
      }`}
    >
      {isActive ? "Active" : "Paused"}
    </span>

  </div>
</td>

      {/* Actions */}
      <td className="px-5 py-4">
        <div className="flex items-center justify-end gap-2">

          <button
            type="button"
            onClick={() => onEdit(song)}
            className="
              p-2
              rounded-lg
              text-blue-400
              hover:bg-blue-500/10
              transition
            "
            title="Edit"
          >
            <Edit size={18} />
          </button>

          <button
            type="button"
            onClick={() => onDelete(song.id)}
            className="
              p-2
              rounded-lg
              text-red-400
              hover:bg-red-500/10
              transition
            "
            title="Delete"
          >
            <Trash2 size={18} />
          </button>

        </div>
      </td>

    </tr>
  );
};

export default SongRow;