import { Mail, UserCircle } from "lucide-react";

const UserCard = ({ user }) => {
  return (
    <div
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-xl
        p-4
      "
    >
      {/* Top */}
      <div className="flex items-center gap-3 mb-4">

        <div
          className="
            w-11
            h-11
            rounded-full
            bg-green-500
            flex
            items-center
            justify-center
          "
        >
          <UserCircle
            size={26}
            className="text-black"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            {user.display_name}
          </h3>

          <p className="text-xs text-zinc-500">
            ID: #{user.id}
          </p>
        </div>

      </div>

      {/* Email */}
      <div className="flex items-center gap-2 mb-3">

        <Mail
          size={16}
          className="text-zinc-500"
        />

        <span className="text-sm text-zinc-300 break-all">
          {user.email}
        </span>

      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between">

        <span className="text-xs text-zinc-500">
          Joined {user.joined}
        </span>

        <span
          className={`
            px-2.5
            py-1
            rounded-full
            text-xs
            font-medium
            ${
              user.status === "Active"
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }
          `}
        >
          {user.status}
        </span>

      </div>

    </div>
  );
};

export default UserCard;