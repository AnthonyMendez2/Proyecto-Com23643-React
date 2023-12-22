import { useState } from 'react'
import './App.css'
import MovieGallery from './compo/pelis'
import ModalMovieGallery from './compo/modal'
import UserProfile from './compo/perfil'

function App() {

  return (
    <>
    <UserProfile/>
    <MovieGallery/>
    <ModalMovieGallery/>
      
    </>
  )
}

export default App
