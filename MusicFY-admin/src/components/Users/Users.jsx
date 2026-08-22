import { useState } from "react";
import UserTable from "./UserTable";
import UserCard from "./UserCard";

const Users = () => {
  const [search, setSearch] = useState("");

  // Temporary data
  // Later this will come from PHP + MySQL API
  const [users] = useState([
    {
      id: 1,
      display_name: "Dhruv Rajput",
      email: "dhruv@gmail.com",
      status: "Active",
      joined: "15 Aug 2026",
    },
    {
      id: 2,
      display_name: "John Doe",
      email: "john@gmail.com",
      status: "Active",
      joined: "14 Aug 2026",
    },
    {
      id: 3,
      display_name: "Alex Smith",
      email: "alex@gmail.com",
      status: "Inactive",
      joined: "12 Aug 2026",
    },
  ]);

  const filteredUsers = users.filter(
    (user) =>
      user.display_name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Users
        </h1>

        <p className="text-sm text-zinc-400 mt-1">
          Manage MusicFY users
        </p>
      </div>

      {/* Search */}
      <div className="mb-6 max-w-md">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            bg-zinc-900
            border
            border-zinc-800
            rounded-lg
            px-4
            py-3
            text-white
            placeholder:text-zinc-500
            outline-none
            focus:border-green-500
            transition
          "
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <UserTable users={filteredUsers} />
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-3">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </div>

      {/* Empty */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-16">
          <p className="text-zinc-500">
            No users found.
          </p>
        </div>
      )}

    </div>
  );
};

export default Users;