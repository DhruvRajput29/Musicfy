import { useEffect, useState } from "react";
import RecentlyPlayed from "./Recentplayedcard";
import music from "../../data/Musicdata"

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    setSongs(music);
  }, []);

  return (
    <div className="flex-1 flex flex-col m-4">
      <main
        className="
          flex flex-col
          h-fit
          lg:ml-[17%]
          md:ml-[2%]
          bg-[#121212]
          rounded-tl-3xl
          lg:p-6
          overflow-y-auto
        "
      >
        <h1 className="text-white text-xl lg:text-2xl font-bold lg:mb-6">
          Good Evening, Dhruv 👋
        </h1>

        <RecentlyPlayed
          songs={songs}
          setCurrentSong={setCurrentSong}
        />
      </main>
    </div>
  );
};

export default Home;