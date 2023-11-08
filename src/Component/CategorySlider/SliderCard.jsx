import { NavLink } from 'react-router-dom'
import CardStyle from './SlideCard.module.css'

const SliderCard = ({ categoryInfo }) => {
  const { movies_category, imageUrl } = categoryInfo
  return (
    <div className="card" id={CardStyle.slide__card}>
      <div className={CardStyle.card__image}>
        <img src={imageUrl} className={CardStyle.silde__img} alt="..." />
        <span className={CardStyle.movie__category}>{movies_category}</span>
      </div>
      <NavLink className={CardStyle.view__btn}>view movies</NavLink>
    </div>
  )
}

export default SliderCard