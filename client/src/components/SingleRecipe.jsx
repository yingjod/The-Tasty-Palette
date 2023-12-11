
import { useLoaderData } from "react-router-dom";

export default function SingleRecipe() {
  const recipe = useLoaderData();
  const { title, description, prepTime, ingredients, method, poster, reviews } = recipe;

  console.log('Reviews:', reviews); // Add this line for debugging

  return (
    <>
      <div>
        <h2>{title}</h2>
        <img src={poster} alt={`Image of ${title}`} />
        <p>{description}</p>
        <p>{prepTime} mins</p>
        <p>{ingredients}</p>
        <p>{method}</p>

        <h3>Reviews</h3>
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



