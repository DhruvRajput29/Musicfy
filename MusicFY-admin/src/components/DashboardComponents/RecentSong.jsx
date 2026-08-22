import { Music, Plus } from "lucide-react";

const RecentSongs = () => {

  const songs = [];

  return (
    <div
      className="
        bg-[#121212]
        border border-zinc-800
        rounded-xl
        overflow-hidden
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          p-5
          border-b border-zinc-800
        "
      >
        <div>
          <h2 className="text-lg font-semibold text-white">
            Recently Added Songs
          </h2>

          <p className="text-sm text-zinc-500 mt-1">
            Latest songs added to MusicFY
          </p>
        </div>

        <button className="text-sm text-green-500 hover:text-green-400">
          View All
        </button>
      </div>

      {songs.length === 0 && (
        <div
          className="
            py-16
            flex
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          <div
            className="
              w-14 h-14
              rounded-full
              bg-zinc-900
              flex
              items-center
              justify-center
              mb-4
            "
          >
            <Music
              size={25}
              className="text-zinc-600"
            />
          </div>

          <h3 className="text-white font-medium">
            No songs yet
          </h3>

          <p className="text-sm text-zinc-600 mt-1">
            Add your first song to see it here.
          </p>

          <button
            className="
              mt-5
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-lg
              bg-green-500
              hover:bg-green-400
              text-black
              text-sm
              font-semibold
            "
          >
            <Plus size={17} />
            Add Song
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentSongs;