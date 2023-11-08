import Carousel from "../Component/Carousel/Carousel"
import SectionTitle from "../Component/SectionTitle/SectionTitle"
import { useMovieContext } from "../ContextAPI/ContextAPI"
import Layout from "../Layout/Layout"
import Loading from '../Component/Loading'
import CategorySlider from "../Component/CategorySlider/CategorySlider"

const Home = () => {

  const { categories, loading } = useMovieContext()
  return (
< Layout title={"Home"} >
  {/* Hero Section */}
  < section >
    <div className="container-fluid g-0">
      <Carousel />
    </div>
  </section >

  {/* Section Title */}
  < section className="container" >
    <SectionTitle title="Movies Category" />
  </section >

  {/* Category Section */}
  < section >
    <div className="container my-5">
      <CategorySlider />
    </div>
  </section >


</Layout >
  )
}

export default Home