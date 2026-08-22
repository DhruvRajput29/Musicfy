import { Mail, UserCircle } from "lucide-react";

const UserTable = ({ users }) => {
  return (
    <div
      className="
        w-full
        overflow-x-auto
        bg-zinc-900
        border
        border-zinc-800
        rounded-xl
      "
    >
      <table className="w-full min-w-175">

        <thead className="border-b border-zinc-800">
          <tr className="text-left">

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              User
            </th>

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Email
            </th>

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Status
            </th>

            <th className="px-5 py-4 text-sm font-medium text-zinc-400">
              Joined
            </th>

          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="
                border-b
                border-zinc-800
                last:border-none
                hover:bg-zinc-800/50
                transition
              "
            >

              {/* User */}
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-green-500
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <UserCircle
                      size={24}
                      className="text-black"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {user.display_name}
                    </p>

                    <p className="text-xs text-zinc-500">
                      ID: #{user.id}
                    </p>
                  </div>

                </div>
              </td>

              {/* Email */}
              <td className="px-5 py-4">
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <Mail size={16} className="text-zinc-500" />
                  {user.email}
                </div>
              </td>

              {/* Status */}
              <td className="px-5 py-4">
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
              </td>

              {/* Joined */}
              <td className="px-5 py-4 text-sm text-zinc-400">
                {user.joined}
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default UserTable;