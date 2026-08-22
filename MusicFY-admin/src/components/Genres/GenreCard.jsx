import { Edit, Trash2 } from "lucide-react";

const GenreCard = ({ genre, onDelete, onEdit }) => {
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

        <div
          className="
            w-12
            h-12
            rounded-lg
            bg-green-500/10
            text-green-500
            flex
            items-center
            justify-center
            font-semibold
            shrink-0
          "
        >
          {genre.name.charAt(0)}
        </div>

        <div className="flex-1 min-w-0">

          <h3 className="text-sm font-semibold text-white">
            {genre.name}
          </h3>

          <p className="text-xs text-zinc-500 mt-1 truncate">
            {genre.description}
          </p>

        </div>

        <span
          className={`
            text-xs
            px-2
            py-1
            rounded-full
            ${
              genre.status === "Active"
                ? "bg-green-500/10 text-green-500"
                : "bg-red-500/10 text-red-500"
            }
          `}
        >
          {genre.status}
        </span>

      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-zinc-800">

        <button
          onClick={() => onEdit(genre)}
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
          onClick={() => onDelete(genre.id)}
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

export default GenreCard;