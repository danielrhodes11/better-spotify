import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  console.log(song)

  const handlePauseClick = () => {

  };

  const handlePLayClick = () => {

  };

  return (
    < div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer group' >
      <div className='relative w-full h-56'>
        <div
          className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${activeSong === song.attributes.name ? 'flex bg-black bg-opacity-70' : 'hidden'
            } ${'group-hover:flex group-hover:bg-black group-hover:bg-opacity-70'}`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePLayClick}
          />
        </div>
        <img alt="song_img" src={song.attributes?.artwork?.url} />
      </div>
      <div className="mt-4 flex flex-col">

        <p className="font-semibold text-lg text-white truncate ">
          <Link to={`/songs/${song?.key}`}>
            {song.attributes.name}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">

          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.attributes.artistName}
          </Link>
        </p>
      </div>
    </div >
  );
};

export default SongCard;
