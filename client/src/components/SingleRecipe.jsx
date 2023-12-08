// import { useLoaderData } from "react-router-dom";



// export default function SingleRecipe() {
//   const recipe = useLoaderData();
//   const { title, description, prepTime, ingredients, method, poster, reviews } = recipe;

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
//           <ul>
//             {reviews.map((review, index) => (
//               <li key={index}>{review.comment}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No reviews yet.</p>
//         )}
//       </div>
//     </>
//   )
// }

import { useLoaderData } from "react-router-dom";

export default function SingleRecipe() {
  const recipe = useLoaderData();
  const { title, description, prepTime, ingredients, method, poster, review } = recipe;

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
        {review && review.length > 0 ? (
          <ul>
            {review.map((review, index) => (
              <li key={index}>
                <p>{`Rating: ${review.rating} / 5`}</p>
                <p>{`Comment: ${review.comment}`}</p>
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
