import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Music,
  UserRound,
  Disc3,
  Tags,
  Users,
  ListMusic,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      title: "Songs",
      icon: Music,
      path: "/songs",
    },
    {
      title: "Artists",
      icon: UserRound,
      path: "/artists",
    },
    {
      title: "Albums",
      icon: Disc3,
      path: "/albums",
    },
    {
      title: "Genres",
      icon: Tags,
      path: "/genres",
    },
    {
      title: "Users",
      icon: Users,
      path: "/users",
    },
    {
      title: "Playlists",
      icon: ListMusic,
      path: "/playlists",
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-[#121212] border-b border-zinc-800 px-4 py-3 lg:hidden">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center">
            <Music size={20} className="text-black" />
          </div>

          <h1 className="text-lg font-bold text-white">
            Music<span className="text-green-500">FY</span>
            <span className="text-xs text-zinc-500 ml-1">
              ADMIN
            </span>
          </h1>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-white hover:bg-zinc-800 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-64
          bg-[#121212]
          border-r border-zinc-800
          flex
          flex-col
          transition-transform
          duration-300

          lg:translate-x-0

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center">
              <Music size={24} className="text-black" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                Music<span className="text-green-500">FY</span>
              </h1>

              <p className="text-xs text-zinc-500">
                Admin Panel
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto hide-scrollbar px-3 py-5">
          <p className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Management
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.title}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-lg
                    transition-all
                    duration-200
                    group

                    ${
                      isActive
                        ? "bg-green-500 text-black shadow-lg shadow-green-500/20"
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    }
                    `
                  }
                >
                  <Icon size={20} />

                  <span className="text-sm font-medium">
                    {item.title}
                  </span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 p-3">
          {/* Settings */}
          <NavLink
            to="/settings"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              transition
              ${
                isActive
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }
              `
            }
          >
            <Settings size={20} />
            <span className="text-sm font-medium">
              Settings
            </span>
          </NavLink>

          {/* Logout */}
          <button
            onClick={() => {
              // logout logic later
              console.log("Logout");
            }}
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              mt-1
              rounded-lg
              text-zinc-400
              hover:bg-red-500/10
              hover:text-red-400
              transition
            "
          >
            <LogOut size={20} />

            <span className="text-sm font-medium">
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;