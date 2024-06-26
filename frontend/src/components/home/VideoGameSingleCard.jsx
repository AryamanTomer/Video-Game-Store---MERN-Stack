import React from 'react'
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import VideoGameModal from './VideoGameModal';
const VideoGameSingleCard = ({ videogame }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-x1'>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                {videogame.releaseYear}
            </h2>
            <h4 className='my-2 text-gray-500'>{videogame._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2x1' />
                <h2 className='my-1'>{videogame.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-300 text-2x1' />
                <h2 className='my-1'>{videogame.developer}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <BiShow
                    className='text-3x1 text-blue-800 hover:text-black cursor-pointer'
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/videogames/details/${videogame._id}`}>
                    <BsInfoCircle className='text-2x1 text-green-800 hover:text-black' />
                </Link>
                <Link to={`/videogames/edit/${videogame._id}`}>
                    <AiOutlineEdit className='text-2x1 text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/videogames/delete/${videogame._id}`}>
                    <MdOutlineDelete className='text-2x1 text-red-600 hover:text-black' />
                </Link>
            </div>
            {
                showModal && (
                    <VideoGameModal videogame={videogame} onClose={() => setShowModal(false)} />
                )
            }
        </div>
    )
}

export default VideoGameSingleCard