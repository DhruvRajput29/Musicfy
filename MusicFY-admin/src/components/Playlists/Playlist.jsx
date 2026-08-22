import { useState } from "react";
import { Plus } from "lucide-react";

import PlaylistTable from "./PlaylistTable";
import PlaylistCard from "./PlaylistCard";
import PlaylistForm from "./PlaylistForm";
import PlaylistSearch from "./PlaylistSearch";

const Playlists = () => {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Temporary data
  // Later this will come from PHP + MySQL
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      name: "Liked Songs",
      owner: "Dhruv Rajput",
      songs: 25,
      status: "Active",
    },
    {
      id: 2,
      name: "Chill Vibes",
      owner: "Dhruv Rajput",
      songs: 18,
      status: "Active",
    },
    {
      id: 3,
      name: "Workout Mix",
      owner: "John Doe",
      songs: 32,
      status: "Active",
    },
    {
      id: 4,
      name: "Roadtrip Songs",
      owner: "Alex Smith",
      songs: 14,
      status: "Inactive",
    },
  ]);

  // Search
  const filteredPlaylists = playlists.filter(
    (playlist) =>
      playlist.name.toLowerCase().includes(search.toLowerCase()) ||
      playlist.owner.toLowerCase().includes(search.toLowerCase())
  );

  // Add Playlist
  const handleAddPlaylist = (playlistData) => {
    const newPlaylist = {
      id: Date.now(),
      name: playlistData.name,
      owner: "Admin",
      songs: 0,
      status: playlistData.status,
    };

    setPlaylists((prevPlaylists) => [
      ...prevPlaylists,
      newPlaylist,
    ]);
  };

  // Delete Playlist
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this playlist?"
    );

    if (!confirmDelete) return;

    setPlaylists((prevPlaylists) =>
      prevPlaylists.filter(
        (playlist) => playlist.id !== id
      )
    );
  };

  // Edit Playlist
  const handleEdit = (playlist) => {
    console.log("Edit playlist:", playlist);

    // Later we will open PlaylistForm
    // with existing playlist data.
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Playlists
          </h1>

          <p className="text-sm text-zinc-400 mt-1">
            Manage user playlists in MusicFY
          </p>
        </div>

        {/* Add Playlist */}
        <button
          onClick={() => setShowForm(true)}
          className="
            flex
            items-center
            justify-center
            gap-2
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
          Add Playlist
        </button>

      </div>

      {/* Search */}
      <div className="mb-6">
        <PlaylistSearch
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">

        <PlaylistTable
          playlists={filteredPlaylists}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />

      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">

        {filteredPlaylists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            playlist={playlist}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}

      </div>

      {/* Empty State */}
      {filteredPlaylists.length === 0 && (
        <div className="text-center py-16">

          <p className="text-zinc-500">
            No playlists found.
          </p>

          {search && (
            <p className="text-sm text-zinc-600 mt-1">
              Try searching for another playlist or owner.
            </p>
          )}

        </div>
      )}

      {/* Playlist Form */}
      {showForm && (
        <PlaylistForm
          onClose={() => setShowForm(false)}
          onSubmit={handleAddPlaylist}
        />
      )}

    </div>
  );
};

export default Playlists;