import { useState } from "react";
import { Plus } from "lucide-react";

import GenreTable from "./GenreTable";
import GenreCard from "./GenreCard";
import GenreForm from "./GenreForm";
import GenreSearch from "./GenreSearch";

const Genres = () => {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  // Temporary data
  // Later this will come from PHP + MySQL
  const [genres, setGenres] = useState([
    {
      id: 1,
      name: "Pop",
      description: "Popular music",
      songs: 25,
      status: "Active",
    },
    {
      id: 2,
      name: "Rock",
      description: "Rock music",
      songs: 18,
      status: "Active",
    },
    {
      id: 3,
      name: "Hip Hop",
      description: "Hip hop and rap music",
      songs: 12,
      status: "Active",
    },
  ]);

  // Search
  const filteredGenres = genres.filter(
    (genre) =>
      genre.name.toLowerCase().includes(search.toLowerCase()) ||
      genre.description.toLowerCase().includes(search.toLowerCase())
  );

  // Add Genre
  const handleAdd = (newGenre) => {
    setGenres((prevGenres) => [
      ...prevGenres,
      newGenre,
    ]);
  };

  // Delete Genre
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this genre?"
    );

    if (!confirmDelete) return;

    setGenres((prevGenres) =>
      prevGenres.filter((genre) => genre.id !== id)
    );
  };

  // Edit Genre
  const handleEdit = (genre) => {
    console.log("Edit genre:", genre);

    // Later we will open GenreForm
    // with existing genre data.
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
          mb-6
        "
      >

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Genres
          </h1>

          <p className="text-sm text-zinc-400 mt-1">
            Manage all music genres in MusicFY
          </p>
        </div>

        {/* Add Genre */}
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
          Add Genre
        </button>

      </div>

      {/* Search */}
      <div className="mb-6">
        <GenreSearch
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <GenreTable
          genres={filteredGenres}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">

        {filteredGenres.map((genre) => (
          <GenreCard
            key={genre.id}
            genre={genre}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}

      </div>

      {/* Empty State */}
      {filteredGenres.length === 0 && (
        <div className="text-center py-16">

          <p className="text-zinc-500">
            No genres found.
          </p>

          {search && (
            <p className="text-sm text-zinc-600 mt-1">
              Try searching for another genre.
            </p>
          )}

        </div>
      )}

      {/* Add Genre Form */}
      {showForm && (
        <GenreForm
          onClose={() => setShowForm(false)}
          onAdd={handleAdd}
        />
      )}

    </div>
  );
};

export default Genres;