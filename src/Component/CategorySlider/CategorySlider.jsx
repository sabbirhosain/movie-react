import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; //npm i react-multi-carousel
import SliderCard from "./SliderCard";
import { useMovieContext } from "../../ContextAPI/ContextAPI";
import Loading from "../Loading";

const CategorySlider = () => {
  const { categories, loading } = useMovieContext()

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      infinite={true}
    >
      {
        loading && <Loading /> // page loading
      }
      {
        categories.map(category => <SliderCard key={category._id} categoryInfo={category} />)
      }
    </Carousel>
  )
}

export default CategorySlider