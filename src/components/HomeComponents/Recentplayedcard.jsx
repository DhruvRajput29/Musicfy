import MusicCard from "./MusicCard";


const RecentlyPlayed = ({ songs = [], setCurrentSong }) => {

  return (
    <div className="flex gap-6 overflow-x-auto">

      {
        songs.map((music)=>(
          <MusicCard
            key={music.id}
            music={music}
            setCurrentSong={setCurrentSong}
          />
        ))
      }

    </div>
  );
};


export default RecentlyPlayed;