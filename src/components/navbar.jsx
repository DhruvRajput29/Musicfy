import { NavLink } from "react-router-dom";
import { Search, LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <div
      className="
        h-16
        bg-[#121212]
        border-b
        border-gray-800
        flex
        items-center
        justify-between
        px-6
        z-40
        w-full
    lg:w-[calc(100%-224px)]
    lg:ml-56
    xl:w-[83%]
    xl:ml-[17%]
      "
    >
      {/* Profile */}
      <NavLink
  to="/profile"
  className="invisible lg:visible flex items-center gap-3"
>
  <img
    src="https://ui-avatars.com/api/?name=Dhruv+Rajput&background=random"
    alt="profile"
    className="w-10 h-10 rounded-full"
  />

  <div>
    <h3 className="text-sm font-semibold text-white">
      Dhruv Rajput
    </h3>
    <p className="text-xs text-green-500">
      Premium
    </p>
  </div>
</NavLink>

      {/* Search */}
      <div className="hidden md:flex items-center w-112.5 h-10 bg-zinc-900 rounded-full px-4">
        <Search size={20} className="text-zinc-400" />

        <input
          type="text"
          placeholder="What do you want to play?"
          className="flex-1 bg-transparent outline-none text-white px-3 placeholder:text-zinc-400"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-8 lg:gap-3">
        <NavLink
          to="/register"
          className="text-zinc-400 hover:text-white"
        >
          Sign Up
        </NavLink>

        <NavLink
          to="/login"
          className="flex items-center gap-2 bg-linear-to-r from-green-400 to-blue-600 px-4 py-2 rounded-lg text-white"
        >
          <LogIn size={18} />
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;