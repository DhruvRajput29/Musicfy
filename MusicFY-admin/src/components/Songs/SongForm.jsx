import { useState } from "react";
import { X, Upload } from "lucide-react";
import axios from "axios";
import songformurl from "../../links/url";

const SongForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    artist_id: "",
    image: null,
    audio_file: null,
  });

  const [loading, setLoading] = useState(false);

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file inputs
  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files[0] || null,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title.trim()) {
      alert("Please enter the song title");
      return;
    }

    if (!formData.artist_id) {
      alert("Please enter the artist ID");
      return;
    }

    if (!formData.image) {
      alert("Please upload a cover image");
      return;
    }

    if (!formData.audio_file) {
      alert("Please upload an audio file");
      return;
    }

    const songFormData = new FormData();

    songFormData.append("title", formData.title);
    songFormData.append("artist_id", formData.artist_id);
    songFormData.append("image", formData.image);
    songFormData.append("audio_file", formData.audio_file);

    try {
      setLoading(true);

      const response = await axios.post(
        songformurl.songformurl,
        songFormData
      );

      console.log(response.data);

      if (response.data.success) {
        alert(response.data.message);

        // Reset form
        setFormData({
          title: "",
          artist_id: "",
          image: null,
          audio_file: null,
        });

        onClose();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error adding song:", error);

      if (error.response) {
        console.log("Server response:", error.response.data);
        alert(
          error.response.data.message ||
            "Failed to add song"
        );
      } else {
        alert("Unable to connect to server");
      }
    } finally {
      setLoading(false);
    }
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
              Add New Song
            </h2>

            <p className="text-sm text-zinc-500 mt-1">
              Add a song to your music library
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
          {/* Song Title */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Song Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter song title"
              className="
                w-full
                bg-zinc-800
                border border-zinc-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-green-500
              "
            />
          </div>

          {/* Artist ID */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Artist ID
            </label>

            <input
              type="number"
              name="artist_id"
              value={formData.artist_id}
              onChange={handleChange}
              placeholder="Enter artist ID"
              className="
                w-full
                bg-zinc-800
                border border-zinc-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-green-500
              "
            />

            <p className="text-xs text-zinc-500 mt-1">
              Enter the ID of an existing artist.
            </p>
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
                h-32
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
                size={25}
                className="text-zinc-500 mb-2"
              />

              <span className="text-sm text-zinc-400 text-center px-4">
                {formData.image
                  ? formData.image.name
                  : "Upload cover image"}
              </span>

              <input
                type="file"
                name="image"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Audio File */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Audio File
            </label>

            <label
              className="
                flex
                flex-col
                items-center
                justify-center
                w-full
                h-32
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
                size={25}
                className="text-zinc-500 mb-2"
              />

              <span className="text-sm text-zinc-400 text-center px-4">
                {formData.audio_file
                  ? formData.audio_file.name
                  : "Upload audio file"}
              </span>

              <input
                type="file"
                name="audio_file"
                accept="audio/mpeg,audio/mp3,audio/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="
                px-4
                py-2.5
                rounded-lg
                bg-zinc-800
                hover:bg-zinc-700
                text-white
                transition
                disabled:opacity-50
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="
                px-5
                py-2.5
                rounded-lg
                bg-green-600
                hover:bg-green-500
                text-white
                font-medium
                transition
                disabled:opacity-50
              "
            >
              {loading ? "Adding..." : "Add Song"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SongForm;