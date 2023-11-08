import Layout from '../Layout/Layout'
import MovieCard from '../Component/MovieCard/MovieCard'
import Style from './Pages.module.css'
import { useMovieContext } from '../ContextAPI/ContextAPI'
import Loading from '../Component/Loading'

const Movie = () => {
  const { movies, categories, loading, getMoviesSearch, getSelectedData, } = useMovieContext()
  return (
    <Layout title={"Movies"}>
      <section className={Style.movies}>
        <div className="container mt-5">
          <div className="col-6 mx-auto">
            <div className="d-flex" role="search">
              <input onChange={getMoviesSearch} id='movieSearch' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              {/* <button id='btn' className="btn btn-outline-success" type="submit">Search</button> */}

              <select onChange={getSelectedData} className="form-select ms-4" aria-label="Default select example">
                <option defaultValue={"selected"}>Choose Categories</option>
                {
                  categories.map(category => <option key={category._id} value={category.movies_category} >{category.movies_category}</option>)
                }
              </select>
            </div>
          </div>
          <div className="row my-5">

            {
              loading && <Loading /> // page loading
            }
            {
              movies.map(movie =>
                <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                  <MovieCard key={movie._id} movieInfo={movie} />
                </div>
              )}

          </div>
        </div>
      </section>
    </Layout >
  )
}

export default Movie