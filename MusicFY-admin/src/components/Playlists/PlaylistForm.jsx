import { useState } from "react";
import { X } from "lucide-react";

const PlaylistForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(formData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4">

      <div
        className="
          w-full
          max-w-lg
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
              Add New Playlist
            </h2>

            <p className="text-sm text-zinc-500 mt-1">
              Create a new playlist in MusicFY
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

          {/* Playlist Name */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Playlist Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter playlist name"
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

          {/* Description */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter playlist description"
              rows="4"
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
                resize-none
                focus:border-green-500
              "
            />
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
              Add Playlist
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default PlaylistForm;