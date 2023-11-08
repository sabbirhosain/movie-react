import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../lib/Sanity";
import { toast } from "react-toastify";
// context
export const MovieContext = createContext();

const MovieDataProvider = ({ children }) => {
  // useState Hook
  const [movies, setMovies] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState()
  const [ticketBooked, setTicketBooked] = useState([])
  // Data fetch for movies
  const getMovies = async () => {
    setLoading(true)
    const fetchMovie = await client.fetch('*[_type=="movies"]{_id, movies_name, movies_categories[]->{movies_category}, movies_description, "imageUrl": movies_image.asset->url}')
    setLoading(false)
    return setMovies(fetchMovie)
  }

  // Data fetch for categories
  const getCategories = async () => {
    const fetchCategories = await client.fetch('*[_type=="movie_category"]{_id, movies_category, "imageUrl": movies_image.asset->url}')
    return setCategories(fetchCategories)
  }

  // Movies Search
  const getMoviesSearch = (e) => {
    const getMoviesSearch = e.target.value
    getMoviesResult(getMoviesSearch);
  }

  // Movie Search Result
  const getMoviesResult = async (userData) => {
    const querry = `*[_type=="movies" && (movies_name match "${userData}*")]{_id, movies_name, "imageUrl": movies_image.asset->url, movies_trailer, movies_categories[]->{movies_category}, movies_description }`
    const fetchMovieResult = await client.fetch(querry)
    return setMovies(fetchMovieResult)
  }

  // Data Selected
  const getSelectedData = (e) => {
    const getMoviesFilter = e.target.value
    getFilterResult(getMoviesFilter);
  }

  // Data Filters
  const getFilterResult = async (movieFilter) => {

    const querry = `*[_type == 'movies' && [0].movies_categories._reference in *[_type == 'movie_category' && movies_category == '${movieFilter}' ]._id]{_id, movies_name, "imageUrl": movies_image.asset->url, movies_trailer, movies_categories[]->{movies_category}, movies_description }`

    const fetchMovieFilter = await client.fetch(querry)
    return setMovies(fetchMovieFilter)
  }

  // Ticket Booked
  const ticketBookedHandeler = (data) => {
    setTicketBooked([...ticketBooked, data])
    toast.success("Ticket Booking Successfull",{position: "top-right",
    autoClose: 100,});
  }

  // useEffect Hook
  useEffect(() => {
    getMovies()
    getCategories()
  }, [])

  return <MovieContext.Provider value={{ movies, categories, loading, getMoviesSearch, getSelectedData, ticketBookedHandeler, ticketBooked }}>
    {children}
  </MovieContext.Provider>
}
export default MovieDataProvider

// coustom hooks
export const useMovieContext = () => {
  return useContext(MovieContext)
}