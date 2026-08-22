import { Routes, Route } from "react-router-dom";

import AdminLayout from "./Layout/AdminLayout";
import HideLayout from "./Layout/HideLayout";

import DashboardPage from "./pages/DashboardPage";
import SongsPage from "./pages/SongsPage";
import ArtistPage from "./pages/ArtistPage";
import GenresPage from "./pages/GenresPage";
import AlbumsPage from "./pages/AlbumPage";
import UsersPage from "./pages/UsersPage";
import PlaylistsPage from "./pages/PlaylistPage";
import Settings from "./pages/SettingsPage";

function App() {
  return (
    <Routes>
      {/* Admin Layout */}
      <Route element={<AdminLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/artists" element={<ArtistPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/playlists" element={<PlaylistsPage />} />
      </Route>

      {/* Pages without Navbar + Sidebar */}
      <Route element={<HideLayout />}>
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;