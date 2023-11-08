import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import Style from './Pages.module.css'
import { useParams } from 'react-router-dom' //individuals data fetch
import { client } from '../lib/Sanity'
import { PortableText } from '@portabletext/react' // npm install --save @portabletext/react  (for desc)
import ReactPlayer from 'react-player' // npm i react-player (for video)

const MovieDetails = () => {

  const [loading, setLoading] = useState()
  const { id } = useParams() // individuals data fetch
  const [movieDetails, setMovieDetails] = useState({})
  const { _id, movies_name, imageUrl, movies_trailer, movies_categories, movies_description } = movieDetails

  const query = `*[_type=="movies" && _id=="${id}"]{_id, movies_name, "imageUrl": movies_image.asset->url, movies_trailer, movies_categories[]->{movies_category}, movies_description }`


  // Data fetch for movies
  const getMoviesDetails = async () => {
    setLoading(true)
    const fetchMovieDetails = await client.fetch(query)
    setLoading(false)
    return setMovieDetails(fetchMovieDetails[0])
  }

  // useEffect Hook
  useEffect(() => {
    getMoviesDetails()
  }, [])

  return (
    <Layout title={"Details"}>
      <section className={Style.movies}>
        <div className="container">
          <div className="row justify-content-center my-5">
            <div className="col-lg-10">
              <div className="card mb-3">
                <div className="row justify-content-between">
                  <div className="col-md-4">
                    <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">{movies_name}</h5>
                      <PortableText value={movies_description} />
                      {/* <p className="card-text"><small className="text-muted">Categories : {movies_categories[0].movies_category} </small></p> */}
                    </div>

                    {/* Button trigger modal */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Launch demo modal
                    </button>

                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <ReactPlayer width={"100%"} url={movies_trailer} />
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default MovieDetails