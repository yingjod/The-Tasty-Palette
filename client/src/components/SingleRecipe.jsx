

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
      const updatedRecipe = await axios.get(`/api/recipes/${recipe._id}`);
      // Update the component state with the latest recipe data
      setRecipe(updatedRecipe.data);
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };



  const handleDeleteReview = async (reviewId) => {
    console.log('Deleting review with IDs:', recipe._id, reviewId);
    try {
      console.log('Attempting to delete review:', reviewId);
  
      const response = await axios.delete(`/api/recipes/${recipe._id}/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
  
      console.log('Review deleted:', response.data);
  
      // Fetch updated recipe data after deleting the review
      const updatedRecipe = await axios.get(`/api/recipes/${recipe._id}`);
      // Update the component state with the latest recipe data
      setRecipe(updatedRecipe.data);
    } catch (error) {
      console.error('Error deleting review:', error);
  
      // Log the specific response received
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
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
                <button onClick={() => handleDeleteReview(review._id)}>
                  Delete Review
                </button>
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
  )
}








