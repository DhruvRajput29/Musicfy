import { Search } from "lucide-react";

const SongSearch = ({ search, setSearch }) => {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        placeholder="Search songs or artists..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          bg-zinc-900
          border border-zinc-800
          rounded-lg
          pl-10
          pr-4
          py-3
          text-white
          placeholder:text-zinc-500
          outline-none
          focus:border-green-500
          transition
        "
      />
    </div>
  );
};

export default SongSearch;