import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres';
import useGenres from '../../hooks/useGenre';

const Series = () => {
    const [containt, setContaint] = useState([]);
    const [page, setPage] = useState(1);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres);

    const fetchSeries = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
            setContaint(response.data);
        } catch (error) {
            console.error('Error fetching trending data:', error);
        }
    }

    useEffect(() => {
        fetchSeries();
        // eslint-disable-next-line
    }, [page, genreforURL]);

    return (
        <>
            <span className='pageTitle'>Tv series</span>
            <Genres
                setSelectedGenres={setSelectedGenres}
                selectedGenres={selectedGenres}
                setGenres={setGenres}
                genres={genres}
                setPage={setPage}
                type='movie'
            />
            <div className='trending'>
                {containt && containt?.results?.map(item => (
                    <MovieCard
                        key={item.id}
                        id={item.id}
                        poster={item.poster_path}
                        title={item.title || item.name}
                        date={item.first_air_date || item.release_date}
                        media_type={item.media_type}
                        vote_average={item.vote_average}
                    />
                ))}
            </div>
            <CustomPagination setPage={setPage} count={containt.total_pages} />
        </>
    )
}

export default Series