import { Edit, Trash2, Music2 } from "lucide-react";

const SongCard = ({ song, onDelete }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">

      {/* Top */}
      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
          <Music2
            size={22}
            className="text-green-500"
          />
        </div>

        <div className="min-w-0 flex-1">

          <h3 className="text-white font-semibold truncate">
            {song.title}
          </h3>

          <p className="text-sm text-zinc-400 truncate">
            {song.artist}
          </p>

        </div>

        <span
          className={`
            text-xs
            px-2
            py-1
            rounded-full
            shrink-0
            ${
              song.status === "Active"
                ? "bg-green-500/10 text-green-500"
                : "bg-red-500/10 text-red-500"
            }
          `}
        >
          {song.status}
        </span>

      </div>

      {/* Information */}
      <div className="grid grid-cols-2 gap-3 mt-4">

        <div>
          <p className="text-xs text-zinc-500">
            Album
          </p>

          <p className="text-sm text-zinc-300 mt-1 truncate">
            {song.album}
          </p>
        </div>

        <div>
          <p className="text-xs text-zinc-500">
            Genre
          </p>

          <p className="text-sm text-zinc-300 mt-1">
            {song.genre}
          </p>
        </div>

      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-zinc-800">

        <button
          className="
            flex items-center gap-2
            px-3
            py-2
            rounded-lg
            text-sm
            text-blue-400
            hover:bg-blue-500/10
            transition
          "
        >
          <Edit size={16} />
          Edit
        </button>

        <button
          onClick={() => onDelete(song.id)}
          className="
            flex items-center gap-2
            px-3
            py-2
            rounded-lg
            text-sm
            text-red-400
            hover:bg-red-500/10
            transition
          "
        >
          <Trash2 size={16} />
          Delete
        </button>

      </div>

    </div>
  );
};

export default SongCard;