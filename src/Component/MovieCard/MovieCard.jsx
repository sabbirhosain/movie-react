import React from 'react'
import { Link } from 'react-router-dom'
import { useMovieContext } from '../../ContextAPI/ContextAPI'


const MovieCard = ({ movieInfo }) => {
  const { _id, movies_name, movies_description, movies_categories, imageUrl } = movieInfo
  const { ticketBookedHandeler } = useMovieContext()
  return (
    <>
      <div className="card">
        <img src={imageUrl} className="card-img-top object-fit-cover" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{movies_name}</h5>
          <span className="badge text-bg-danger">{movies_categories[0].movies_category}</span>
          <div className="text-end d-flex align-items-center justify-content-end">
            <Link onClick={() => ticketBookedHandeler(movieInfo)} className="btn btn-success me-2">Cart</Link>
            <Link to={`/details/${_id}`} className="btn btn-primary">Details</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard