import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const countryCode = 'US'
    const { data, isFetching, error } = useGetTopChartsQuery(countryCode);
    const genreTitle = 'Pop';


    if (isFetching) return <Loader title="Loading songs..." />;
    if (error) return <Error message={error.message} />;

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-center mb-4">
                    Discover {genreTitle}
                </h2>
                <select
                    onChange={() => { }}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none text-center">
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value}>{genre.title}</option>
                    ))}
                </select>
            </div>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default Discover;
