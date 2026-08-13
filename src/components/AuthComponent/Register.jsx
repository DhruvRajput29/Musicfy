import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";

import GoogleIcon from "/src/assets/icons/googleicon";
import EmailIcon from "/src/assets/icons/emailicon";

const Register = () => {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log({
      email,
      displayName,
      password,
    });

    alert("Frontend validation successful!");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-sm
          sm:max-w-md
          lg:max-w-lg
          bg-zinc-900
          rounded-2xl
          shadow-2xl
          p-5
          sm:p-6
          lg:p-8
          space-y-5
        "
      >
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Sign up to start listening
          </p>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-zinc-300"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full
              rounded-lg
              bg-zinc-800
              px-4
              py-3
              text-sm
              sm:text-base
              text-white
              outline-none
              focus:ring-2
              focus:ring-green-500
            "
          />
        </div>

        {/* Display Name */}
        <div>
          <label
            htmlFor="displayName"
            className="block mb-2 text-sm font-medium text-zinc-300"
          >
            Display Name
          </label>

          <input
            id="displayName"
            type="text"
            placeholder="Choose a display name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            className="
              w-full
              rounded-lg
              bg-zinc-800
              px-4
              py-3
              text-sm
              sm:text-base
              text-white
              outline-none
              focus:ring-2
              focus:ring-green-500
            "
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-zinc-300"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              w-full
              rounded-lg
              bg-zinc-800
              px-4
              py-3
              text-sm
              sm:text-base
              text-white
              outline-none
              focus:ring-2
              focus:ring-green-500
            "
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-zinc-300"
          >
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="
              w-full
              rounded-lg
              bg-zinc-800
              px-4
              py-3
              text-sm
              sm:text-base
              text-white
              outline-none
              focus:ring-2
              focus:ring-green-500
            "
          />
        </div>

        {/* Create Account */}
        <button
          type="submit"
          className="
            w-full
            rounded-lg
            bg-green-600
            py-3
            text-sm
            sm:text-base
            font-semibold
            text-white
            transition
            hover:bg-green-500
            active:scale-95
          "
        >
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center">
          <hr className="flex-1 border-zinc-700" />
          <span className="px-3 text-zinc-400 text-sm">OR</span>
          <hr className="flex-1 border-zinc-700" />
        </div>

        {/* Google */}
        <button
          type="button"
          className="
            relative
            w-full
            rounded-lg
            border
            border-zinc-700
            py-3
            text-sm
            sm:text-base
            hover:bg-zinc-800
            transition
          "
        >
          <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
            <GoogleIcon />
          </div>

          <span className="font-medium text-white">
            Continue with Google
          </span>
        </button>

        {/* Phone */}
        <button
          type="button"
          className="
            relative
            w-full
            rounded-lg
            border
            border-zinc-700
            py-3
            text-sm
            sm:text-base
            hover:bg-zinc-800
            transition
          "
        >
          <Phone
            size={20}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-green-500"
          />

          <span className="font-medium text-white">
            Continue with Phone Number
          </span>
        </button>

        {/* Email */}
        <button
          type="button"
          className="
            relative
            w-full
            rounded-lg
            border
            border-zinc-700
            py-3
            text-sm
            sm:text-base
            hover:bg-zinc-800
            transition
          "
        >
          <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
            <EmailIcon className="text-white"  />
          </div>

          <span className="font-medium text-white">
            Continue with Email
          </span>
        </button>

        {/* Login */}
        <p className="text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="font-semibold text-green-500 hover:text-green-400"
          >
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;