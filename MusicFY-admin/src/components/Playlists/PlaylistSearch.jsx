import { Search, X } from "lucide-react";

const PlaylistSearch = ({ search, setSearch }) => {
  const handleClear = () => {
    setSearch("");
  };

  return (
    <div className="relative w-full max-w-md">

      {/* Search Icon */}
      <Search
        size={20}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-zinc-500
        "
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search playlists..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          bg-zinc-900
          border
          border-zinc-800
          rounded-lg
          pl-10
          pr-10
          py-3
          text-white
          placeholder:text-zinc-500
          outline-none
          transition
          focus:border-green-500
        "
      />

      {/* Clear Button */}
      {search && (
        <button
          type="button"
          onClick={handleClear}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-zinc-500
            hover:text-white
            transition
          "
        >
          <X size={18} />
        </button>
      )}

    </div>
  );
};

export default PlaylistSearch;