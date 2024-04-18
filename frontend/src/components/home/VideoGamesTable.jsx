import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';

const VideoGamesTable= ({ videogames }) => {
  return (
    <table className='w-full border-seperate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>Title</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Developer</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Release Year</th>
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {videogames.map((videogame, index) => (
                            <tr key={videogame._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {videogame.title}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {videogame.developer}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {videogame.releaseYear}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/videogames/details/${videogame._id}`}>
                                            <BsInfoCircle className='text-2x1 text-green-800'/>
                                        </Link>
                                        <Link to={`/videogames/edit/${videogame._id}`}>
                                            <AiOutlineEdit className='text-2x1 text-yellow-600' />
                                        </Link>
                                        <Link to={`/videogames/delete/${videogame._id}`}>
                                            <AiOutlineEdit className='text-2x1 text-red-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
  )
}

export default VideoGamesTable