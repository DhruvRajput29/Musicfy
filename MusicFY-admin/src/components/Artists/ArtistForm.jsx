import { useState } from "react";
import { X, Upload } from "lucide-react";

const ArtistForm = ({ onClose }) => {
  const [artistName, setArtistName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      artistName,
      bio,
      image,
    });

    // Later we will send this data to PHP API

    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 px-4">

      <div className="w-full max-w-lg bg-[#191C20] border border-[#343942] rounded-2xl p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-xl font-bold text-white">
              Add Artist
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Add a new artist to MusicFY
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#343942] text-gray-400 hover:text-white transition"
          >
            <X size={20} />
          </button>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Artist Name */}
          <div>

            <label className="block text-sm text-gray-300 mb-2">
              Artist Name
            </label>

            <input
              type="text"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              placeholder="Enter artist name"
              required
              className="
                w-full
                bg-[#22262C]
                border border-[#343942]
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
                focus:border-green-500
              "
            />

          </div>

          {/* Bio */}
          <div>

            <label className="block text-sm text-gray-300 mb-2">
              Biography
            </label>

            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter artist biography"
              rows="4"
              className="
                w-full
                bg-[#22262C]
                border border-[#343942]
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
                resize-none
                focus:border-green-500
              "
            />

          </div>

          {/* Image */}
          <div>

            <label className="block text-sm text-gray-300 mb-2">
              Artist Image
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
                border-[#343942]
                rounded-xl
                cursor-pointer
                hover:border-green-500
                transition
              "
            >

              <Upload
                size={28}
                className="text-gray-500 mb-2"
              />

              <span className="text-sm text-gray-400">
                {image ? image.name : "Upload artist image"}
              </span>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />

            </label>

          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="
                flex-1
                py-3
                rounded-xl
                border
                border-[#343942]
                text-gray-300
                hover:bg-[#22262C]
                transition
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                flex-1
                py-3
                rounded-xl
                bg-green-500
                hover:bg-green-400
                text-black
                font-semibold
                transition
              "
            >
              Add Artist
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default ArtistForm;