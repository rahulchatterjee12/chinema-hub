import React, { useEffect, useState } from 'react';
import axios from "axios";
import MovieCard from '../../components/MovieCard/MovieCard';
import './Trending.css'
import CustomPagination from '../../components/Pagination/CustomPagination';
const Trending = () => {
    const [containt, setContaint] = useState([]);
    const [page, setPage] = useState(1)
    const fetchTrending = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
            setContaint(response.data);
        } catch (error) {
            console.error('Error fetching trending data:', error);
        }
    }

    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    }, [page]);

    return (
        <>
            <span className='pageTitle'>Ternding</span>
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

export default Trending;