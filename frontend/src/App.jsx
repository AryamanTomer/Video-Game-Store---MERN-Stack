import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateVideoGames from './pages/CreateVideoGames'
import DeleteVideoGames from './pages/DeleteVideoGames'
import EditVideoGames from './pages/EditVideoGames'
import ShowVideoGames from './pages/ShowVideoGames'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/videogames/create' element={<CreateVideoGames />} />
      <Route path='/videogames/details/:id' element={<ShowVideoGames/>} />
      <Route path='/videogames/edit/:id' element={<EditVideoGames />} />
      <Route path='/videogames/delete/:id' element={<DeleteVideoGames />} />
    </Routes>
  );
};

export default App