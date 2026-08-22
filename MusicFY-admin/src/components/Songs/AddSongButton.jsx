import { Plus } from "lucide-react";

const AddSongButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center gap-2
        bg-green-600
        hover:bg-green-500
        text-white
        px-4
        py-2.5
        rounded-lg
        font-medium
        transition
      "
    >
      <Plus size={20} />
      Add Song
    </button>
  );
};

export default AddSongButton;