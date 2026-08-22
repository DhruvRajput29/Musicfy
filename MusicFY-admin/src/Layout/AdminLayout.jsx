import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-black">

      <Sidebar />

      <Navbar />

      <main className="lg:ml-64 pt-16 min-h-screen">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;