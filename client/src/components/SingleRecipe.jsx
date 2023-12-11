
// import { useLoaderData } from "react-router-dom";

// export default function SingleRecipe() {
//   const recipe = useLoaderData();
//   const { title, description, prepTime, ingredients, method, poster, reviews } = recipe;

//   console.log('Reviews:', reviews); // Add this line for debugging

//   return (
//     <>
//       <div>
//         <h2>{title}</h2>
//         <img src={poster} alt={`Image of ${title}`} />
//         <p>{description}</p>
//         <p>{prepTime} mins</p>
//         <p>{ingredients}</p>
//         <p>{method}</p>
        
//         <h3>Reviews</h3>
//         {reviews && reviews.length > 0 ? (
//           <ul style={{ listStyle: 'none', padding: 0 }}>
//             {reviews.map((review, index) => (
//               <li key={index}>
//                 {review.rating !== undefined && (
//                   <div>
//                     <p style={{ margin: 0, padding: 0 }}>
//                       {/* Display stars based on the rating */}
//                       {Array(review.rating).fill().map((_, starIndex) => (
//                         <span key={starIndex}>★</span>
//                       ))}
//                       {/* Display the username who gave the rating */}
//                       {review.owner && review.owner.username ? ` Rated by ${review.owner.username}` : 'Unknown User'}
//                     </p>
//                     {review.text && <p>{`Comment: ${review.text}`}</p>}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No reviews yet.</p>
//         )}
//       </div>
//     </>
//   );
// }

import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getToken } from '../utilities/helpers/common';
import axios from 'axios';

export default function SingleRecipe() {
  const [recipe, setRecipe] = useState(useLoaderData());
  const [formData, setFormData] = useState({ rating: 5, text: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/recipes/${recipe._id}/reviews`, formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      console.log('Review created:', response.data);
      setFormData({ rating: 5, text: '' });
      // Fetch updated recipe data after creating the review
      // You may need to modify the endpoint or add additional logic based on your server setup
      const updatedRecipe = await axios.get(`/api/recipes/${recipe._id}`);
      // Update the component state with the latest recipe data
      // This assumes that the server returns the entire recipe including reviews
      setRecipe(updatedRecipe.data);
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };

  return (
    <>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.poster} alt={`Image of ${recipe.title}`} />
        <p>{recipe.description}</p>
        <p>{recipe.prepTime} mins</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.method}</p>

        <h3>Reviews</h3>
        {recipe.reviews && recipe.reviews.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {recipe.reviews.map((review, index) => (
              <li key={index}>
                <p style={{ margin: 0, padding: 0 }}>
                  {Array(review.rating).fill().map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                  {review.owner && review.owner.username ? ` Rated by ${review.owner.username}` : 'Unknown User'}
                </p>
                {review.text && <p>{`Comment: ${review.text}`}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}

        <form onSubmit={handleSubmitReview}>
          <label>
            Rating:
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              min="1"
              max="5"
            />
          </label>
          <label>
            Comment:
            <textarea
              name="text"
              value={formData.text}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </>
  );
}









