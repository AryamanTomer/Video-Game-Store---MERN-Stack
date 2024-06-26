import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const CreateVideoGames = () => {
    const [title, setTitle] = useState('');
    const [developer, setDeveloper] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSaveVideoGame = () => {
        const data = {
            title,
            developer,
            releaseYear,
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/videogames', data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Video Game Created Successfully', {variant: 'success'});
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
               // alert('An error happened. Please check the console');
                enqueueSnackbar('Error', {variant: 'error'});
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3x1 my-4'>Create Video Game</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 roundedd-x1 w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-x1 mr-4 text-gray-500'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-x1 mr-4 text-gray-500'>Developer</label>
                    <input
                        type='text'
                        value={developer}
                        onChange={(e) => setDeveloper(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-x1 mr-4 text-gray-500'>Release Year</label>
                    <input
                        type='text'
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveVideoGame}>
                    Save
                </button>
            </div>

        </div>
    )
}

export default CreateVideoGames