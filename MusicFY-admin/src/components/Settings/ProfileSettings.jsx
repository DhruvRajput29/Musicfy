import { useState } from "react";
import { User, Mail, Camera, Save } from "lucide-react";

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    name: "Admin",
    email: "admin@musicfy.com",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setPreview(imageURL);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Profile Data:", formData);

    // Later:
    // Send data to PHP API
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl">

      {/* Header */}
      <div className="p-5 sm:p-6 border-b border-zinc-800">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          Profile Settings
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Manage your administrator profile
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="p-5 sm:p-6 space-y-6"
      >

        {/* Profile Image */}
        <div>
          <label className="block text-sm text-zinc-300 mb-3">
            Profile Picture
          </label>

          <div className="flex items-center gap-5">

            {/* Avatar */}
            <div
              className="
                relative
                w-20
                h-20
                rounded-full
                overflow-hidden
                bg-green-600
                flex
                items-center
                justify-center
              "
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User
                  size={40}
                  className="text-black"
                />
              )}

              {/* Camera */}
              <label
                className="
                  absolute
                  bottom-0
                  right-0
                  w-7
                  h-7
                  rounded-full
                  bg-zinc-800
                  border
                  border-zinc-700
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  hover:bg-zinc-700
                "
              >
                <Camera size={14} className="text-white" />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>

            <div>
              <p className="text-sm text-white font-medium">
                Administrator
              </p>

              <p className="text-xs text-zinc-500 mt-1">
                JPG, PNG or WEBP. Max 2MB.
              </p>
            </div>

          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm text-zinc-300 mb-2">
            Name
          </label>

          <div className="relative">

            <User
              size={18}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
                w-full
                bg-zinc-800
                border
                border-zinc-700
                rounded-lg
                pl-10
                pr-4
                py-3
                text-white
                outline-none
                focus:border-green-500
              "
            />

          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-zinc-300 mb-2">
            Email
          </label>

          <div className="relative">

            <Mail
              size={18}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full
                bg-zinc-800
                border
                border-zinc-700
                rounded-lg
                pl-10
                pr-4
                py-3
                text-white
                outline-none
                focus:border-green-500
              "
            />

          </div>
        </div>

        {/* Save */}
        <div className="flex justify-end pt-2">

          <button
            type="submit"
            className="
              flex
              items-center
              gap-2
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
            <Save size={18} />
            Save Changes
          </button>

        </div>

      </form>

    </div>
  );
};

export default ProfileSettings;