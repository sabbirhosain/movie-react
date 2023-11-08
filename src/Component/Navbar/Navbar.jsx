import { Link, NavLink } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useMovieContext } from "../../ContextAPI/ContextAPI";
const Navbar = () => {
  const { ticketBooked } = useMovieContext()
  return (
    <>
      <nav className="navbar py-3 navbar-expand-lg navbar-dark bg-dark position-absolute z-3 top-0 container-fluid">
        <div className="container">
          <NavLink className="navbar-brand" to={'/'}>Movies</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <NavLink to={"/home"} className={"nav-link"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/movie"} className={"nav-link"}>Movie</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to={"/"} className={"nav-link"}>Details</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/movie-cart"} className={"nav-link"}>Cart</NavLink>
              </li> */}
            </ul>
            <Link to={"/movie-cart"} className="btn btn-primary position-relative">
              <AiOutlineShoppingCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{ticketBooked.length}</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar