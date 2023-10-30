import React, { } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
    const { type, id } = useParams();
    // const [content, setContent] = useState();
    // const [video, setVideo] = useState();

    // const fetchData = async () => {
    //     const { data } = await axios.get(
    //         `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    //     );

    //     setContent(data);
    // };

    // const fetchVideo = async () => {
    //     const { data } = await axios.get(
    //         `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    //     );

    //     setVideo(data.results[0]?.key);
    // };

    // useEffect(() => {
    //     fetchData();
    //     fetchVideo();
    //     // eslint-disable-next-line
    // }, []);

    console.log(type, id);

    return (
        <div>
            hello
        </div>
    )
}

export default Details;