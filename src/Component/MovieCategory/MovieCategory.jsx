import React from 'react'

const MovieCategory = ({ categoryInfo }) => {
  const { _id, movies_category, imageUrl } = categoryInfo
  return (
    <>
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movies_category}</h5>
            <div className="text-end"><a href="#" className="btn btn-primary">Show Movies</a></div>
          </div>
        </div>
      </div >
    </>
  )
}

export default MovieCategory