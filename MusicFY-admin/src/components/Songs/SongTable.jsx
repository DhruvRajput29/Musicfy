import { useEffect, useState } from "react";
import SongRow from "./SongRow";
import axios from "axios";
import url from "../../links/url";

const SongTable = ({ onDelete, onEdit }) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(url.songformurl);

        if (response.data.success) {
          setSongs(response.data.songs || []);
        } else {
          console.error(
            "Failed to fetch songs:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("Failed to fetch songs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  // Toggle song status
  const handleToggleStatus = async (song) => {
    const newStatus =
      song.status === "active" ? "paused" : "active";

    try {
      const response = await axios.post(
        url.updateSongStatusUrl,
        {
          id: song.id,
          status: newStatus,
        }
      );

      if (response.data.success) {
        setSongs((prevSongs) =>
          prevSongs.map((item) =>
            item.id === song.id
              ? { ...item, status: newStatus }
              : item
          )
        );
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Failed to update song status:", error);
      alert("Failed to update song status");
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-zinc-800 border-b border-zinc-700">
            <tr>
              <th className="px-5 py-4 text-sm font-semibold text-zinc-300">
                Song
              </th>

              <th className="px-5 py-4 text-sm font-semibold text-zinc-300">
                Artist
              </th>

              <th className="px-5 py-4 text-sm font-semibold text-zinc-300">
                Album
              </th>

              <th className="px-5 py-4 text-sm font-semibold text-zinc-300">
                Genre
              </th>

              <th className="px-5 py-4 text-sm font-semibold text-zinc-300">
                Status
              </th>

              <th className="px-5 py-4 text-sm font-semibold text-zinc-300 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-800">
            {loading ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-5 py-10 text-center text-zinc-500"
                >
                  Loading songs...
                </td>
              </tr>
            ) : songs.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-5 py-10 text-center text-zinc-500"
                >
                  No songs found
                </td>
              </tr>
            ) : (
              songs.map((song) => (
                <SongRow
                  key={song.id}
                  song={song}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  onToggleStatus={handleToggleStatus}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SongTable;