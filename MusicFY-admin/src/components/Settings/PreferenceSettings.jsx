import { useState } from "react";
import {
  Bell,
  Globe,
  Moon,
  Save,
  Trash2,
} from "lucide-react";

const PreferencesSettings = () => {
  const [preferences, setPreferences] = useState({
    notifications: true,
    emailNotifications: false,
    darkMode: true,
    language: "English",
    deleteConfirmation: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setPreferences((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Preferences:", preferences);

    // Later:
    // Send preferences to PHP + MySQL API

    alert("Preferences saved successfully.");
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl">

      {/* Header */}
      <div className="p-5 sm:p-6 border-b border-zinc-800">

        <h2 className="text-lg sm:text-xl font-semibold text-white">
          Preferences
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Customize your MusicFY admin experience
        </p>

      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="p-5 sm:p-6 space-y-6"
      >

        {/* Notifications */}
        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
              <Bell
                size={20}
                className="text-green-500"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                Notifications
              </p>

              <p className="text-xs text-zinc-500 mt-1">
                Receive notifications inside the admin panel
              </p>
            </div>

          </div>

          <input
            type="checkbox"
            name="notifications"
            checked={preferences.notifications}
            onChange={handleChange}
            className="
              w-5
              h-5
              accent-green-500
              cursor-pointer
            "
          />

        </div>

        {/* Email Notifications */}
        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
              <Bell
                size={20}
                className="text-blue-500"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                Email Notifications
              </p>

              <p className="text-xs text-zinc-500 mt-1">
                Receive important updates through email
              </p>
            </div>

          </div>

          <input
            type="checkbox"
            name="emailNotifications"
            checked={preferences.emailNotifications}
            onChange={handleChange}
            className="
              w-5
              h-5
              accent-green-500
              cursor-pointer
            "
          />

        </div>

        {/* Dark Mode */}
        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
              <Moon
                size={20}
                className="text-purple-500"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                Dark Mode
              </p>

              <p className="text-xs text-zinc-500 mt-1">
                Use the dark interface for the admin panel
              </p>
            </div>

          </div>

          <input
            type="checkbox"
            name="darkMode"
            checked={preferences.darkMode}
            onChange={handleChange}
            className="
              w-5
              h-5
              accent-green-500
              cursor-pointer
            "
          />

        </div>

        {/* Language */}
        <div>

          <div className="flex items-center gap-3 mb-3">

            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
              <Globe
                size={20}
                className="text-yellow-500"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                Language
              </p>

              <p className="text-xs text-zinc-500 mt-1">
                Select the admin panel language
              </p>
            </div>

          </div>

          <select
            name="language"
            value={preferences.language}
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
            <option value="English">
              English
            </option>

            <option value="Hindi">
              Hindi
            </option>

            <option value="Gujarati">
              Gujarati
            </option>
          </select>

        </div>

        {/* Delete Confirmation */}
        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
              <Trash2
                size={20}
                className="text-red-500"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                Delete Confirmation
              </p>

              <p className="text-xs text-zinc-500 mt-1">
                Ask for confirmation before deleting data
              </p>
            </div>

          </div>

          <input
            type="checkbox"
            name="deleteConfirmation"
            checked={preferences.deleteConfirmation}
            onChange={handleChange}
            className="
              w-5
              h-5
              accent-green-500
              cursor-pointer
            "
          />

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
            Save Preferences
          </button>

        </div>

      </form>

    </div>
  );
};

export default PreferencesSettings;