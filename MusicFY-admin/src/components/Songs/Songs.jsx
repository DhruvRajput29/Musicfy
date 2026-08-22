import { useState } from "react";

import SongTable from "./SongTable";
import SongCard from "./SongCard";
import SongForm from "./SongForm";
import SongSearch from "./SongSearch";
import AddSongButton from "./AddSongButton";

const Songs = () => {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  // Temporary data
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      genre: "Pop",
      status: "Active",
    },
    {
      id: 2,
      title: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide",
      genre: "Pop",
      status: "Active",
    },
  ]);

  // Search
  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase())
  );

  // Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this song?"
    );

    if (!confirmDelete) return;

    setSongs((prevSongs) =>
      prevSongs.filter((song) => song.id !== id)
    );
  };

  // Edit
  const handleEdit = (song) => {
    console.log("Edit song:", song);

    // Later:
    // Open SongForm with existing song data
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Songs
          </h1>

          <p className="text-sm text-zinc-400 mt-1">
            Manage all songs in MusicFY
          </p>
        </div>

        {/* Add Song */}
        <AddSongButton
          onClick={() => setShowForm(true)}
        />

      </div>

      {/* Search */}
      <div className="mb-6">
        <SongSearch
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <SongTable
          songs={filteredSongs}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {filteredSongs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredSongs.length === 0 && (
        <div className="text-center py-16">

          <p className="text-zinc-500">
            No songs found.
          </p>

          {search && (
            <p className="text-sm text-zinc-600 mt-1">
              Try searching for another song or artist.
            </p>
          )}

        </div>
      )}

      {/* Add Song Form */}
      {showForm && (
        <SongForm
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
};

export default Songs;