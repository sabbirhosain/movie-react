// import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
// import tostfy
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Movie from "./Pages/Movie"
import MovieDetails from "./Pages/MovieDetails"
import NotFound from "./Pages/NotFound"
import MovieCart from "./Pages/MovieCart.jsx"

function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/movie-cart" element={<MovieCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
