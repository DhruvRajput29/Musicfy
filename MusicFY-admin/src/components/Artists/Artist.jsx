import { useState } from "react";
import { Plus, Search, Users } from "lucide-react";

import ArtistTable from "./ArtistTable";
import ArtistCard from "./ArtistCard";
import ArtistForm from "./ArtistForm";

const Artists = () => {

  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  // Temporary data
  const [artists] = useState([
    {
      id: 1,
      name: "The Weeknd",
      songs: 25,
      bio: "Canadian singer, songwriter and record producer.",
      image: "https://ui-avatars.com/api/?name=The+Weeknd",
    },
    {
      id: 2,
      name: "Ed Sheeran",
      songs: 32,
      bio: "English singer-songwriter and musician.",
      image: "https://ui-avatars.com/api/?name=Ed+Sheeran",
    },
    {
      id: 3,
      name: "Arijit Singh",
      songs: 40,
      bio: "Indian playback singer and music composer.",
      image: "https://ui-avatars.com/api/?name=Arijit+Singh",
    },
  ]);

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#101214] text-white p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

        <div>

          <div className="flex items-center gap-3">

            <Users
              size={28}
              className="text-green-500"
            />

            <h1 className="text-2xl sm:text-3xl font-bold">
              Artists
            </h1>

          </div>

          <p className="text-gray-400 text-sm mt-2">
            Manage artists available on MusicFY
          </p>

        </div>

        <button
          onClick={() => setShowForm(true)}
          className="
            flex
            items-center
            justify-center
            gap-2
            bg-green-500
            hover:bg-green-400
            text-black
            font-semibold
            px-5
            py-3
            rounded-xl
            transition
            active:scale-95
          "
        >
          <Plus size={20} />
          Add Artist
        </button>

      </div>

      {/* Search */}
      <div className="mb-6">

        <div className="relative max-w-md">

          <Search
            size={20}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-500
            "
          />

          <input
            type="text"
            placeholder="Search artists..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              bg-[#191C20]
              border border-[#343942]
              rounded-xl
              py-3
              pl-12
              pr-4
              text-white
              outline-none
              focus:border-green-500
            "
          />

        </div>

      </div>

      {/* Desktop */}
      <div className="hidden md:block">

        <ArtistTable
          artists={filteredArtists}
        />

      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4">

        {filteredArtists.map((artist) => (

          <ArtistCard
            key={artist.id}
            artist={artist}
          />

        ))}

      </div>

      {/* Empty */}
      {filteredArtists.length === 0 && (

        <div className="text-center py-16 text-gray-500">
          No artists found.
        </div>

      )}

      {/* Add Artist Modal */}
      {showForm && (
        <ArtistForm
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
};

export default Artists;