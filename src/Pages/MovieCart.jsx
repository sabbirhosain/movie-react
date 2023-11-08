import { useState } from "react"
import { useMovieContext } from "../ContextAPI/ContextAPI"
import Layout from "../Layout/Layout"
import PageStyle from "./Pages.module.css"
import { Link } from "react-router-dom"

const MovieCart = () => {

  const { ticketBooked } = useMovieContext()

  return (
    <Layout>
      <div className={PageStyle.movies}>
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">SL NO</th>
              <th scope="col">Image</th>
              <th scope="col">Movie Name</th>
              <th scope="col">Movie Type</th>
              <th scope="col">Movie Price</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody>
            {
              ticketBooked.map((ticket, count) =>
                <tr key={count}>
                  <th scope="row">{count + 1}</th>

                  <td><img src={ticket.imageUrl} style={{ width: "50px", height: "50px", objectFit: "cover" }} alt="" /></td>

                  <td>{ticket.movies_name}</td>
                  <td>{ticket.movies_categories[0].movies_category}</td>
                  <td>Free</td>
                  <td><Link to={`/details/${ticket._id}`} className="btn btn-warning">Details</Link></td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default MovieCart