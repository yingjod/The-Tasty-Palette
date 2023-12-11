
import { useLoaderData } from "react-router-dom";

export default function SingleRecipe() {
  const recipe = useLoaderData();
  const { title, description, prepTime, ingredients, method, poster, reviews } = recipe;

  console.log('Reviews:', reviews); // Add this line for debugging

  return (
    <>
      <div>
        <h2>{title}</h2>
      </div>

      <div className="img-ing">
        <img className="single-img" src={poster} alt={`Image of ${title}`} />
        <div className="ing-div">
          <h3 className="single-recipe-title"> Ingredients </h3>
          <p className="ingredients">{ingredients}</p>
        </div>
      </div>

      <div>
        <h3 className="single-recipe-title"> Preparation Time </h3>
        <p className="prep">{prepTime} mins</p>
        <h3 className="single-recipe-title"> Description </h3>
        <p className="description">{description}</p>
        <h3 className="single-recipe-title"> Method </h3>
        <p className="method">{method}</p>
      </div>

      <div className="review-section">
        <h3 className="single-recipe-title"> Reviews</h3>
          {reviews && reviews.length > 0 ? (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {reviews.map((review, index) => (
                <li key={index}>
                  {review.rating !== undefined && (
                    <div>
                      <p style={{ margin: 0, padding: 0 }}>
                        {/* Display stars based on the rating */}
                        {Array(review.rating).fill().map((_, starIndex) => (
                          <span key={starIndex}>★</span>
                        ))}
                        {/* Display the username who gave the rating */}
                        {review.owner && review.owner.username ? ` Rated by ${review.owner.username}` : 'Unknown User'}
                      </p>
                      {review.text && <p>{`Comment: ${review.text}`}</p>}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
     </>
    );
  }



