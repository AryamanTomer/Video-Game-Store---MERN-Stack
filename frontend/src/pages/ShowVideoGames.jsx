import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowVideoGames = () => {
    const [videogame, setVideoGame] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/videogames/${id}`)
            .then((response) => {
                setVideoGame(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [])

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3x1 my-4'>Show Video Game</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'>Id</span>
                        <span>{videogame._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'>Title</span>
                        <span>{videogame.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'>Developer</span>
                        <span>{videogame.developer}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'>Release Year</span>
                        <span>{videogame.releaseYear}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'>Create Time</span>
                        <span>{new Date(videogame.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-x1 mr-4 text-gray-500'>Last Update Time</span>
                        <span>{new Date(videogame.updatedAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowVideoGames