import { useState } from "react";
import { House, Library } from "lucide-react";
import { NavLink } from "react-router-dom";
import values from "../assets/values";
import {
  Heart,
  History,
  Music2,
  Flame,
  Dumbbell,
  PartyPopper,
  Car,
  Music,
  Plus,
} from "lucide-react";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // sidebar buttons
  const SideBarOptions = [
    {
      Title: "Home",
      Icon: House,
      Path: "/",
    },
    {
      Title: "Library",
      Icon: Library,
      Path: "/library",
    },
  ];

  //  playlist buttons
  const PlaylistButtons = [

    {
      title: "Liked Songs",
      icon: Heart,
      path: "/liked",
    },

    {
      title: "Recently Played",
      icon: History,
      path: "/recent",
    },

    {
      title: "Your Top Songs",
      icon: Music2,
      path: "/topsongs",
    },

    {
      title: "Chill Vibes",
      icon: Flame,
      path: "/chill",
    },

    {
      title: "Workout Mix",
      icon: Dumbbell,
      path: "/workout",
    },

    {
      title: "Party Hits",
      icon: PartyPopper,
      path: "/party",
    },

    {
      title: "Roadtrip Songs",
      icon: Car,
      path: "/roadtrip",
    },

    {
      title: "Sad Songs",
      icon: Music,
      path: "/sad",
    },

  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1 left-4 z-60 lg:hidden bg-[#1f1f1f] p-2 rounded-full text-white shadow-lg"
      >
        <img src={values.logo} alt="logo" className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0
          h-screen
          bg-[#121212]
          border-r border-gray-800
          z-50
          flex flex-col
          transition-transform duration-300

          w-64
          sm:w-64
          lg:w-56
          xl:w-[17%]

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 p-2  border-b border-gray-800">
          <img
            src={values.logo}
            alt={values.bname}
            className="invisible lg:visible w-12 h-12 lg:w-12 lg:h-12 lg:flex lg:justify-center rounded-full bg-white "
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              {values.bname}
              <span className="text-green-500">FY</span>
            </h1>

            <p className="text-xs text-gray-400">
              Feel the Music
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto hide-scrollbar py-4 ">
          {SideBarOptions.map((item) => {
            const Icon = item.Icon;

            return (
              <NavLink
                key={item.Title}
                to={item.Path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4
                  w-[90%]
                  mx-auto
                  mb-4
                  px-5
                  py-3
                  rounded-xl
                  transition-all
                  duration-300
                  ${isActive
                    ? "bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-blue-500/30 text-white"
                    : "text-gray-300 hover:bg-[#1f1f1f] hover:text-white"
                  }`
                }
              >
                <Icon size={22} />
                <span className="font-medium text-sm">{item.Title}</span>
              </NavLink>
            );
          })}
        {/* playlist navigations  */}
        <div>
          <h3 className="text-gray-400 flex justify-start items-center ml-2 mb-2">PlayList</h3>
          {PlaylistButtons.map((item) => {
            const Icon = item.icon;
            
            return (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
  `flex items-center gap-4
  w-[90%]
  mx-auto
  mb-2
  px-4
  py-3
  rounded-lg
  border
  transition-all duration-200
                  ${
                  isActive
                  ? "bg-zinc-800 border-zinc-600 text-white shadow-md"
                  : "bg-[#121212] border-transparent text-gray-300 hover:bg-zinc-800 hover:border-zinc-700 hover:text-white"
                  }`
                }
              >
                <Icon size={22} />
                <span className="font-medium text-sm">{item.title}</span>
              </NavLink>
            );
          })}
        </div>
        </div>
                {/* Profile */}
      <div className="border-t border-gray-800 p-4 shrink-0">
  <NavLink
    to="/profile"
    className="flex items-center gap-3"
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
</div>
      </div>
      
    </>
  );
};

export default SideBar;