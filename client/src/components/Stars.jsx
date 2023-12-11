export default function renderStars(avgRating) {
  const ratingToNumber = parseFloat(avgRating)
  const stars = ['⭐️', '⭐️', '⭐️', '⭐️', '⭐️'].map((star, index) => {
    if (index < ratingToNumber){
      return <span key={index}>{star}</span>
    } else {
      return <span key={index} className="empty-star">{star}</span>
    }
  })
  return <div className="stars">{stars}</div> 
}
