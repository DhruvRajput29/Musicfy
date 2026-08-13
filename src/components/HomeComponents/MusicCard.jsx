import { Play } from "lucide-react";

const MusicCard = ({ music, setCurrentSong }) => {
  return (
    <div className="group w-56 p-4 rounded-xl bg-[#181818] hover:bg-[#282828] transition-all duration-300 cursor-pointer">

      <div className="relative">

        <img
          src={music.cover_image}
          alt={music.title}
          className="w-full h-50 object-cover rounded-lg"
        />


        <button
          onClick={() => setCurrentSong(music)}
          className="
            absolute
            bottom-3
            right-3
            bg-[#1DB954]
            p-3
            border-2 
            border-[#dfdfdf]
            rounded-full
            shadow-lg
            opacity-0
            translate-y-3
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-300
          "
        >

          <Play
            size={20}
            fill="black"
          />

        </button>

      </div>


      <h3 className="mt-4 text-white font-semibold text-lg truncate">
        {music.title}
      </h3>


      <p className="mt-1 text-gray-400 text-sm truncate">
        {music.artist}
      </p>


      <p className="text-xs text-gray-500 truncate">
        {music.album}
      </p>

    </div>
  );
};

export default MusicCard;