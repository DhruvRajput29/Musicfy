import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import { signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth, provider } from "../../firebase";
import GoogleIcon from "/src/assets/icons/googleicon";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login Logic Here

    navigate("/");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handlePhoneLogin = async () => {
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "normal",
          }
        );
      }

      const appVerifier = window.recaptchaVerifier;

      const phoneNumber = "+919876543210";

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );

      window.confirmationResult = confirmationResult;

      alert("OTP Sent!");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-8 overflow-x-hidden">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-5"
      >
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-zinc-400 mt-2 text-sm">
            Sign in to continue to your account
          </p>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm text-zinc-300">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 text-sm text-zinc-300">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <NavLink
            to="/forgot-password"
            className="text-sm text-green-500 hover:underline"
          >
            Forgot Password?
          </NavLink>
        </div>

        {/* Login */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center">
          <hr className="flex-1 border-zinc-700" />

          <span className="px-3 text-zinc-400 text-sm">
            OR
          </span>

          <hr className="flex-1 border-zinc-700" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="relative flex items-center justify-center w-full border border-zinc-700 rounded-lg py-3 text-white hover:bg-zinc-800 transition"
        >
          <div className="absolute left-4">
            <GoogleIcon />
          </div>

          Continue with Google
        </button>

        {/* Phone Login */}
        <button
          type="button"
          onClick={handlePhoneLogin}
          className="relative flex items-center justify-center w-full border border-zinc-700 rounded-lg py-3 text-white hover:bg-zinc-800 transition"
        >
          <Phone
            size={22}
            className="absolute left-4 text-green-500"
          />

          Continue with Phone Number
        </button>

        {/* Register */}
        <p className="text-center text-zinc-400 text-sm">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-green-500 font-semibold hover:text-green-400"
          >
            Sign Up
          </NavLink>
        </p>

        {/* reCAPTCHA */}
        <div
          id="recaptcha-container"
          className="flex justify-center"
        ></div>
      </form>
    </div>
  );
};

export default Login;