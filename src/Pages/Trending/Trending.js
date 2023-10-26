import React, { useEffect, useState } from 'react';
import axios from "axios";
import MovieCard from '../../components/MovieCard/MovieCard';

const Trending = () => {
    const [containt, setContaint] = useState([]);

    const fetchTrending = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
            setContaint(response.data);
        } catch (error) {
            console.error('Error fetching trending data:', error);
        }
    }

    useEffect(() => {
        fetchTrending();
    }, []);

    const renderContent = containt && containt?.results?.map(item => (
        <MovieCard
            key={item.id}
            id={item.id}
            poster={item.poster_path}
            title={item.title || item.name}
            date={item.first_air_date || item.release_date}
            media_type={item.media_type}
            vote_average={item.vote_average}
        />
    ));

    return (
        <>
            <span className='PageTitle'>Ternding</span>
            {renderContent}
        </>
    )
}

export default Trending;