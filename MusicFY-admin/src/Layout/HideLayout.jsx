import { Outlet } from "react-router-dom";

const HideLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Outlet />
    </div>
  );
};

export default HideLayout;