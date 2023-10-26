import { Badge } from '@mui/material';
import React from 'react';
import ContentModal from '../ContentModal/ContentModal';


const MovieCard = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
    return (
        <>
            <Badge
                badgeContent={vote_average}
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
        </>
    )
}

export default MovieCard;