import React, { useEffect, useState } from 'react';
import axios from "axios";
import MovieCard from '../../components/MovieCard/MovieCard';

const Trending = () => {
    const [containt, setContaint] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
        setContaint(data);
    }
    useEffect(() => {
        fetchTrending()
    }, [])

    return (
        <>
            <span className='PageTitle'>Ternding</span>
            <div >
                {containt &&
                    containt.results.map((item) => (<>
                        <MovieCard
                            key={item.id}
                            id={item.id}
                            poster={item.poster_path}
                            title={item.title || item.name}
                            date={item.first_air_date || item.release_date}
                            media_type={item.media_type}
                            vote_average={item.vote_average}
                        />
                    </>))
                }
            </div>
        </>
    )
}

export default Trending;