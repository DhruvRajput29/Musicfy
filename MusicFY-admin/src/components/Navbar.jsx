import {
  Search,
  Bell,
  UserCircle,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  return (
    <header
      className="
        fixed
        top-0
        right-0
        z-30
        h-16
        bg-[#121212]
        border-b
        border-zinc-800

        left-0
        lg:left-64
      "
    >
      <div className="h-full flex items-center justify-between px-4 sm:px-6">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Mobile title */}
          <div className="lg:hidden">
            <h1 className="text-lg font-bold text-white">
              Music<span className="text-green-500">FY</span>
              <span className="text-xs text-zinc-500 ml-1">
                ADMIN
              </span>
            </h1>
          </div>

          {/* Desktop title */}
          <div className="hidden lg:block">
            <h2 className="text-lg font-semibold text-white">
              Admin Panel
            </h2>

            <p className="text-xs text-zinc-500">
              Manage your MusicFY platform
            </p>
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Search */}
          <div className="hidden md:flex items-center">

            <div
              className="
                flex
                items-center
                gap-2
                w-56
                lg:w-64
                bg-zinc-900
                border
                border-zinc-800
                rounded-lg
                px-3
                py-2
                focus-within:border-green-500
                transition
              "
            >
              <Search
                size={18}
                className="text-zinc-500"
              />

              <input
                type="text"
                placeholder="Search..."
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-sm
                  text-white
                  placeholder:text-zinc-500
                "
              />
            </div>

          </div>

          {/* Mobile Search */}
          <button
            className="
              md:hidden
              p-2
              rounded-lg
              text-zinc-400
              hover:bg-zinc-800
              hover:text-white
              transition
            "
          >
            <Search size={20} />
          </button>

          {/* Notifications */}
          <button
            className="
              relative
              p-2
              rounded-lg
              text-zinc-400
              hover:bg-zinc-800
              hover:text-white
              transition
            "
          >
            <Bell size={20} />

            {/* Notification badge */}
            <span
              className="
                absolute
                top-1
                right-1
                w-2
                h-2
                bg-green-500
                rounded-full
              "
            />
          </button>

          {/* Divider */}
          <div className="hidden sm:block h-8 w-px bg-zinc-800" />

          {/* Admin Profile */}
          <button
            className="
              flex
              items-center
              gap-2
              p-1.5
              sm:px-2
              sm:py-1.5
              rounded-lg
              hover:bg-zinc-800
              transition
            "
          >

            {/* Avatar */}
            <div
              className="
                w-9
                h-9
                rounded-full
                bg-green-500
                flex
                items-center
                justify-center
              "
            >
              <UserCircle
                size={25}
                className="text-black"
              />
            </div>

            {/* Name */}
            <div className="hidden sm:block text-left">

              <p className="text-sm font-medium text-white">
                Admin
              </p>

              <p className="text-xs text-zinc-500">
                Administrator
              </p>

            </div>

            <ChevronDown
              size={16}
              className="hidden sm:block text-zinc-500"
            />

          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;