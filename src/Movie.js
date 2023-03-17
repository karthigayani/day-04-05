// // Day-04-Nov-23
// import { useState } from 'react';
// import { Counter } from './Counter';

// // Object destructuring - movie(props)
// export function Movie({ movie }) {
//   // creating single component
//   // const movie = {
//   //       name: "Vikram",
//   //       poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   //       rating: 8.4,
//   //       summary: "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   //   };

//   const ratingStyles = { 
//     color: movie.rating >= 8.5 ? "green" : "red"
//   }; // Conditional Styling
//   // step:2
//   // const show = false;
//   // const show = true;

//   // step : 4 useState with boolean (comment step - 2)
//   // const [show, setShow] = useState(false);
//   const [show, setShow] = useState(true);


//   return (
//     <div className="movie-container">
//       <img className="movie-poster" src={movie.poster} alt={movie.name} />
//       <div className="movie-specs">
//         <h2 className="movie-name">{movie.name}</h2>
//         <p style={ratingStyles} className="movie-rating">⭐{movie.rating}</p>
//       </div>
//       {/* step : 1 */}
//       {/* <button>Toggle description</button> */}

//   {/* step : 5 comment step-1*/}
//         {/* <button onClick = {() => setShow(false)}>Toggle description - {show + ""}</button> */}
        
//         {/* step : 6 comment step-5 */}
//         <button onClick = {() => setShow(!show)}>Toggle description</button>
//       {/* step : 3 */}
//       {show ? <p className="movie-summary">{movie.summary}</p> : null}
//       {/* <p className="movie-summary">{movie.summary}</p> */}


//       <Counter />
//     </div>
//   );
// }
// // conditional rendering -> If you want to hide a element / If you want to execute the element only when it meets the condition.
// hooks : for listening the variable 
// Step - 5: click -> onclick function trigger -> setShow trigger -> show value updated(false)
// you need to update opposite:
// !false -> true
// !true -> false

/************************************************************************************************************************************************************************************************** */
// Day-05-Nov-24 
// Applying mui feaures
import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
export function Movie({ movie }) {
  
  const ratingStyles = { 
    color: movie.rating >= 8.5 ? "green" : "red"
  }; 
  const [show, setShow] = useState(true);

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-specs">
        {/* step:2 added toggle summary */}
        <h2 className="movie-name">{movie.name} <IconButton 
          color="primary"
          onClick = {() => setShow(!show)}
          aria-label="Toggle summary">
          {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
          </IconButton>
        </h2>
        <p style={ratingStyles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      
      {/* step:1 */}
        {/* <button onClick = {() => setShow(!show)}>Toggle description</button> */}
        {/* <IconButton 
          color="primary"
          onClick = {() => setShow(!show)}
          aria-label="Toggle summary">
          {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </IconButton> */}
      
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}
/********************************************************************************************** */
// for reference
// {/* step:1 */}
//         {/* <button onClick = {() => setShow(!show)}>Toggle description</button> */}
//         <IconButton color="primary"
//         onClick = {() => setShow(!show)}
//         aria-label="Toggle summary">
//           {/* <DeleteIcon /> */}
//           {/* <ExpandMoreIcon/> <ExpandLessIcon/> */}
//           {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
//         </IconButton>
      





