import { useState } from "react";
import { Eye, EyeOff, Lock, Save } from "lucide-react";

const SecuritySettings = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    if (formData.newPassword.length < 6) {
      alert("New password must be at least 6 characters.");
      return;
    }

    console.log("Password Data:", formData);

    // Later:
    // Send currentPassword and newPassword
    // to PHP API for verification and update.

    alert("Password validation successful.");

    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const PasswordInput = ({
    label,
    name,
    value,
    showPassword,
    setShowPassword,
    placeholder,
  }) => {
    return (
      <div>
        <label className="block text-sm text-zinc-300 mb-2">
          {label}
        </label>

        <div className="relative">

          {/* Lock Icon */}
          <Lock
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-zinc-500
            "
          />

          {/* Input */}
          <input
            type={showPassword ? "text" : "password"}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required
            className="
              w-full
              bg-zinc-800
              border
              border-zinc-700
              rounded-lg
              pl-10
              pr-11
              py-3
              text-white
              placeholder:text-zinc-600
              outline-none
              focus:border-green-500
              transition
            "
          />

          {/* Show / Hide */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-zinc-500
              hover:text-white
              transition
            "
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>
      </div>
    );
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl">

      {/* Header */}
      <div className="p-5 sm:p-6 border-b border-zinc-800">

        <h2 className="text-lg sm:text-xl font-semibold text-white">
          Security
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Change your administrator password
        </p>

      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="p-5 sm:p-6 space-y-6"
      >

        {/* Current Password */}
        <PasswordInput
          label="Current Password"
          name="currentPassword"
          value={formData.currentPassword}
          showPassword={showCurrent}
          setShowPassword={setShowCurrent}
          placeholder="Enter current password"
        />

        {/* New Password */}
        <PasswordInput
          label="New Password"
          name="newPassword"
          value={formData.newPassword}
          showPassword={showNew}
          setShowPassword={setShowNew}
          placeholder="Enter new password"
        />

        {/* Confirm Password */}
        <PasswordInput
          label="Confirm New Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          showPassword={showConfirm}
          setShowPassword={setShowConfirm}
          placeholder="Confirm new password"
        />

        {/* Password Requirements */}
        <div className="bg-zinc-800/60 border border-zinc-800 rounded-lg p-4">

          <p className="text-sm font-medium text-zinc-300 mb-2">
            Password requirements
          </p>

          <ul className="text-xs text-zinc-500 space-y-1">
            <li>• At least 6 characters</li>
            <li>• Use a combination of letters and numbers</li>
            <li>• Avoid using easily guessed passwords</li>
          </ul>

        </div>

        {/* Save Button */}
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
            Change Password
          </button>

        </div>

      </form>

    </div>
  );
};

export default SecuritySettings;