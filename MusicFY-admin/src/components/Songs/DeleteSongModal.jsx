import { Trash2 } from "lucide-react";

const DeleteSongButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        p-2
        rounded-lg
        text-red-500
        hover:bg-red-500/10
        hover:text-red-400
        transition
      "
      title="Delete Song"
    >
      <Trash2 size={18} />
    </button>
  );
};

export default DeleteSongButton;