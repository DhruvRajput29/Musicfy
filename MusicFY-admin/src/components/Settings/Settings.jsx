import { useState } from "react";
import {
  User,
  Shield,
  SlidersHorizontal,
  Home,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import ProfileSettings from "./ProfileSettings";
import SecuritySettings from "./SecurietySettings";
import PreferencesSettings from "./PreferenceSettings";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const navigate = useNavigate();

  const tabs = [
    {
      id: "profile",
      title: "Profile",
      icon: User,
    },
    {
      id: "security",
      title: "Security",
      icon: Shield,
    },
    {
      id: "preferences",
      title: "Preferences",
      icon: SlidersHorizontal,
    },
    {
      id: "home",
      title: "Home",
      icon: Home,
    },
  ];

  const handleTabClick = (tab) => {
    if (tab.id === "home") {
      navigate("/");
      return;
    }

    setActiveTab(tab.id);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Settings
        </h1>

        <p className="text-sm text-zinc-400 mt-1">
          Manage your MusicFY admin settings
        </p>
      </div>

      {/* Settings Layout */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Tabs */}
        <div
          className="
            w-full
            lg:w-64
            shrink-0
            bg-zinc-900
            border
            border-zinc-800
            rounded-xl
            p-2
            h-fit
          "
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`
                  w-full
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-lg
                  text-sm
                  font-medium
                  transition
                  mb-1
                  ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  }
                `}
              >
                <Icon size={19} />

                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">

          {activeTab === "profile" && (
            <ProfileSettings />
          )}

          {activeTab === "security" && (
            <SecuritySettings />
          )}

          {activeTab === "preferences" && (
            <PreferencesSettings />
          )}

        </div>

      </div>

    </div>
  );
};

export default Settings;