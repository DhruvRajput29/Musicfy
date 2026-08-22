import { useState } from "react";
import { X, Upload } from "lucide-react";

const AlbumForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    artist_id: "",
    genre_id: "",
    releaseYear: "",
    status: "Active",
  });

  const [coverImage, setCoverImage] = useState(null);

  // Temporary data
  // Later these will come from PHP + MySQL
  const artists = [
    {
      id: 1,
      name: "The Weeknd",
    },
    {
      id: 2,
      name: "Ed Sheeran",
    },
    {
      id: 3,
      name: "Arijit Singh",
    },
  ];

  const genres = [
    {
      id: 1,
      name: "Pop",
    },
    {
      id: 2,
      name: "Rock",
    },
    {
      id: 3,
      name: "Hip Hop",
    },
    {
      id: 4,
      name: "Classical",
    },
    {
      id: 5,
      name: "Electronic",
    },
    {
      id: 6,
      name: "Romantic",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setCoverImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Album Data:", formData);
    console.log("Cover Image:", coverImage);

    // Later:
    // Send FormData to PHP API

    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4">

      <div
        className="
          w-full
          max-w-lg
          max-h-[90vh]
          overflow-y-auto
          bg-zinc-900
          border
          border-zinc-800
          rounded-2xl
          shadow-2xl
        "
      >

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">

          <div>
            <h2 className="text-xl font-bold text-white">
              Add New Album
            </h2>

            <p className="text-sm text-zinc-500 mt-1">
              Add an album to your music library
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              p-2
              rounded-lg
              text-zinc-400
              hover:bg-zinc-800
              hover:text-white
              transition
            "
          >
            <X size={20} />
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-5 space-y-5"
        >

          {/* Album Title */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Album Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter album title"
              required
              className="
                w-full
                bg-zinc-800
                border
                border-zinc-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-green-500
              "
            />
          </div>

          {/* Artist */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Artist
            </label>

            <select
              name="artist_id"
              value={formData.artist_id}
              onChange={handleChange}
              required
              className="
                w-full
                bg-zinc-800
                border
                border-zinc-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-green-500
              "
            >
              <option value="">
                Select Artist
              </option>

              {artists.map((artist) => (
                <option
                  key={artist.id}
                  value={artist.id}
                >
                  {artist.name}
                </option>
              ))}
            </select>
          </div>

          {/* Genre */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Genre
            </label>

            <select
              name="genre_id"
              value={formData.genre_id}
              onChange={handleChange}
              required
              className="
                w-full
                bg-zinc-800
                border
                border-zinc-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-green-500
              "
            >
              <option value="">
                Select Genre
              </option>

              {genres.map((genre) => (
                <option
                  key={genre.id}
                  value={genre.id}
                >
                  {genre.name}
                </option>
              ))}
            </select>
          </div>

          {/* Release Year */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Release Year
            </label>

            <input
              type="number"
              name="releaseYear"
              value={formData.releaseYear}
              onChange={handleChange}
              placeholder="2026"
              min="1900"
              max="2100"
              required
              className="
                w-full
                bg-zinc-800
                border
                border-zinc-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-green-500
              "
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Cover Image
            </label>

            <label
              className="
                flex
                flex-col
                items-center
                justify-center
                w-full
                h-36
                border-2
                border-dashed
                border-zinc-700
                rounded-lg
                cursor-pointer
                hover:border-green-500
                transition
              "
            >

              <Upload
                size={26}
                className="text-zinc-500 mb-2"
              />

              <span className="text-sm text-zinc-400">
                {coverImage
                  ? coverImage.name
                  : "Upload album cover"}
              </span>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />

            </label>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="
                w-full
                bg-zinc-800
                border
                border-zinc-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-green-500
              "
            >
              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">

            <button
              type="button"
              onClick={onClose}
              className="
                px-4
                py-2.5
                rounded-lg
                bg-zinc-800
                hover:bg-zinc-700
                text-white
                transition
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                px-5
                py-2.5
                rounded-lg
                bg-green-600
                hover:bg-green-500
                text-white
                font-medium
                transition
              "
            >
              Add Album
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AlbumForm;