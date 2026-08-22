import { Edit, Trash2 } from "lucide-react";

const AlbumCard = ({ album, onDelete, onEdit }) => {
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

      <div className="flex items-center gap-3">

        {/* Album Icon */}
        <div
          className="
            w-12
            h-12
            rounded-lg
            bg-zinc-800
            flex
            items-center
            justify-center
            text-zinc-500
            shrink-0
          "
        >
          {album.title.charAt(0)}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">

          <h3 className="text-sm font-semibold text-white truncate">
            {album.title}
          </h3>

          <p className="text-xs text-zinc-500 truncate">
            {album.artist}
          </p>

        </div>

        {/* Status */}
        <span
          className={`
            text-xs
            px-2
            py-1
            rounded-full
            ${
              album.status === "Active"
                ? "bg-green-500/10 text-green-500"
                : "bg-red-500/10 text-red-500"
            }
          `}
        >
          {album.status}
        </span>

      </div>

      {/* Details */}
      <div className="flex items-center gap-4 mt-4 text-xs text-zinc-500">

        <span>
          {album.releaseYear}
        </span>

        <span>
          {album.genre}
        </span>

      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-zinc-800">

        <button
          onClick={() => onEdit(album)}
          className="
            flex
            items-center
            gap-2
            px-3
            py-2
            rounded-lg
            text-sm
            text-zinc-400
            hover:bg-blue-500/10
            hover:text-blue-500
            transition
          "
        >
          <Edit size={16} />
          Edit
        </button>

        <button
          onClick={() => onDelete(album.id)}
          className="
            flex
            items-center
            gap-2
            px-3
            py-2
            rounded-lg
            text-sm
            text-zinc-400
            hover:bg-red-500/10
            hover:text-red-500
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

export default AlbumCard;