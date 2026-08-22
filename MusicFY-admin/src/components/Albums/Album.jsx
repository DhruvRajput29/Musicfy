import { useState } from "react";
import { Plus } from "lucide-react";

import AlbumTable from "./AlbumTable";
import AlbumCard from "./AlbumCard";
import AlbumForm from "./AlbumForm";
import AlbumSearch from "./AlbumSearch";

const Albums = () => {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const [albums, setAlbums] = useState([
    {
      id: 1,
      title: "After Hours",
      artist: "The Weeknd",
      releaseYear: 2020,
      genre: "Pop",
      status: "Active",
    },
    {
      id: 2,
      title: "Divide",
      artist: "Ed Sheeran",
      releaseYear: 2017,
      genre: "Pop",
      status: "Active",
    },
  ]);

  // Search
  const filteredAlbums = albums.filter(
    (album) =>
      album.title.toLowerCase().includes(search.toLowerCase()) ||
      album.artist.toLowerCase().includes(search.toLowerCase())
  );

  // Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this album?"
    );

    if (!confirmDelete) return;

    setAlbums((prevAlbums) =>
      prevAlbums.filter((album) => album.id !== id)
    );
  };

  // Edit
  const handleEdit = (album) => {
    console.log("Edit album:", album);

    // Later we will open AlbumForm
    // with existing album data.
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Albums
          </h1>

          <p className="text-sm text-zinc-400 mt-1">
            Manage all albums in MusicFY
          </p>
        </div>

        {/* Add Album */}
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
          Add Album
        </button>

      </div>

      {/* Search */}
      <div className="mb-6">
        <AlbumSearch
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <AlbumTable
          albums={filteredAlbums}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {filteredAlbums.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredAlbums.length === 0 && (
        <div className="text-center py-16">
          <p className="text-zinc-500">
            No albums found.
          </p>

          {search && (
            <p className="text-sm text-zinc-600 mt-1">
              Try searching for another album or artist.
            </p>
          )}
        </div>
      )}

      {/* Add Album Form */}
      {showForm && (
        <AlbumForm
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
};

export default Albums;