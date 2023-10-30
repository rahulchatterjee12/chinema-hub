import React from 'react';
import { Badge } from '@mui/material';
import { img_300, unavailable } from '../../config/config'
import './MovieCard.css'
import { Link } from "react-router-dom";

const MovieCard = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {

    return (
        <Link to={`/details/${media_type}/${id}`} className='media'>
            <Badge
                badgeContent={Number(vote_average.toFixed(1))}
                color={vote_average > 6 ? "primary" : "secondary"}
            />
            <img
                className="poster"
                src={poster ? `${img_300}${poster}` : unavailable}
                alt={title}
            />
            <b className="title">{title}</b>
            <span className="subTitle">
                {media_type === "tv" ? "TV Series" : "Movie"}
                <span className="subTitle">{date}</span>
            </span>
        </Link>
    )
}

export default MovieCard;