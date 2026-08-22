import { Pencil, Trash2 } from "lucide-react";

const ArtistCard = ({ artist }) => {
  return (
    <div className="bg-[#191C20] border border-[#343942] rounded-2xl p-4">

      <div className="flex items-center gap-4">

        <img
          src={artist.image}
          alt={artist.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div className="min-w-0">

          <h3 className="text-white font-semibold truncate">
            {artist.name}
          </h3>

          <p className="text-sm text-gray-400">
            {artist.songs} songs
          </p>

        </div>

      </div>

      <p className="text-sm text-gray-400 mt-4 line-clamp-2">
        {artist.bio}
      </p>

      <div className="flex gap-2 mt-4">

        <button
          className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            py-2
            rounded-lg
            bg-blue-500/10
            text-blue-400
            hover:bg-blue-500/20
          "
        >
          <Pencil size={17} />
          Edit
        </button>

        <button
          className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            py-2
            rounded-lg
            bg-red-500/10
            text-red-400
            hover:bg-red-500/20
          "
        >
          <Trash2 size={17} />
          Delete
        </button>

      </div>

    </div>
  );
};

export default ArtistCard;