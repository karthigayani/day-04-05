// // Day-04-Nov-23
// import { Movie } from './Movie';
// export function MovieList() {
//   const movieList = [
//     {
//       name: "Vikram",
//       poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//       rating: 8.4,
//       summary: "Members of a black ops team must track and eliminate a gang of masked murderers.",
//     },
//     {
//       name: "RRR",
//       poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//       rating: 8.8,
//       summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     },
//     {
//       name: "Iron man 2",
//       poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//       rating: 7,
//       summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     },
//     {
//       name: "No Country for Old Men",
//       poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//       rating: 8.1,
//       summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     },
//     {
//       name: "Jai Bhim",
//       poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//       summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//       rating: 8.8,
//     },
//     {
//       name: "The Avengers",
//       rating: 8,
//       summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//       poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     },
//     {
//       name: "Interstellar",
//       poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//       rating: 8.6,
//       summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     },
//     {
//       name: "Baahubali",
//       poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//       rating: 8,
//       summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     },
//     {
//       name: "Ratatouille",
//       poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//       rating: 8,
//       summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     }
//   ];
//   return (
//       <div className="movie-list">
//         {/* For transfer data from Parent -> child we need (props)*/}
//         {/* Flow: For every loop `movieList` data goes to `mv` then we sending the `mv` datas to a variable`movie` then it is used in `function Movie` as a props. Always use the prop name as same as of the local variable name declared for single component you have created first. Then comment the single component variable declaration part to list the whole component */}
//         {/* here mv is the array element */}
//         {movieList.map((mv) => (
//           <Movie movie={mv} />
//         ))}
//       </div>
//   );
// };
/*********************************************************************************************************************************************************************************************************** */
// // Day-05-Nov-24
// import { useState } from 'react';
// import { Movie } from './Movie';

// export function MovieList() {
//   // const movieList = [
//   //   {
//   //     name: "Vikram",
//   //     poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   //     rating: 8.4,
//   //     summary: "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   //   },
//   //   {
//   //     name: "RRR",
//   //     poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   //     rating: 8.8,
//   //     summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   //   },
//   //   {
//   //     name: "Iron man 2",
//   //     poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   //     rating: 7,
//   //     summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   //   },
//   //   {
//   //     name: "No Country for Old Men",
//   //     poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   //     rating: 8.1,
//   //     summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   //   },
//   //   {
//   //     name: "Jai Bhim",
//   //     poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   //     summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   //     rating: 8.8,
//   //   },
//   //   {
//   //     name: "The Avengers",
//   //     rating: 8,
//   //     summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   //     poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   //   },
//   //   {
//   //     name: "Interstellar",
//   //     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   //     rating: 8.6,
//   //     summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   //   },
//   //   {
//   //     name: "Baahubali",
//   //     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   //     rating: 8,
//   //     summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   //   },
//   //   {
//   //     name: "Ratatouille",
//   //     poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   //     rating: 8,
//   //     summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   //   }
//   // ];
//   /***************************************************************************************************************************** */
//   // step : 6
//   const [movieList, setMovieList] = useState([
//     {
//       name: "Vikram",
//       poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//       rating: 8.4,
//       summary: "Members of a black ops team must track and eliminate a gang of masked murderers.",
//     },
//     {
//       name: "RRR",
//       poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//       rating: 8.8,
//       summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     },
//     {
//       name: "Iron man 2",
//       poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//       rating: 7,
//       summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     },
//     {
//       name: "No Country for Old Men",
//       poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//       rating: 8.1,
//       summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     },
//     {
//       name: "Jai Bhim",
//       poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//       summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//       rating: 8.8,
//     },
//     {
//       name: "The Avengers",
//       rating: 8,
//       summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//       poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     },
//     {
//       name: "Interstellar",
//       poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//       rating: 8.6,
//       summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     },
//     {
//       name: "Baahubali",
//       poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//       rating: 8,
//       summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     },
//     {
//       name: "Ratatouille",
//       poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//       rating: 8,
//       summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     }
//   ]);

//   // step:2
// const [name, setName] = useState(""); 
// // step :4
// const [poster, setPoster] = useState(""); 
// const [rating, setRating] = useState(""); 
// const [summary, setSummary] = useState(""); 
//   return (
//     <div>
//       {/* Step :1 To get data from user */}
//       <div className="add-movie-form">
//         {/* <input type="text" placeholder="Name"/> */}
//     {/* step : 3 */}
//         <input 
//           type="text" 
//           placeholder="Name"
//           onChange={(event) => setName(event.target.value)}
//         />
//         {/* {name} */}
//         {/* <input type="text" placeholder="Poster"/>
//         <input type="text" placeholder="Rating"/>
//         <input type="text" placeholder="Summary"/> */}

//     {/* step :5 */}
//         <input 
//           type="text" 
//           placeholder="Poster"
//           onChange={(event) => setPoster(event.target.value)}
//         />
//         {/* {poster} */}
//         <input 
//           type="text" 
//           placeholder="Rating"
//           onChange={(event) => setRating(event.target.value)}
//         />
//         {/* {rating} */}
//         <input 
//           type="text" 
//           placeholder="Summary"
//           onChange={(event) => setSummary(event.target.value)}
//         />
//         {/* {summary} */}

// {/* step:7 */}
//         {/* <button>Add Movie</button> */}
//         <button
//           onClick={() => {
//             const newMovie = {
//               name : name,
//               poster : poster,
//               rating : rating,
//               summary : summary,
//             };
//           // step : 8
//           setMovieList([...movieList, newMovie]);
//           console.log(newMovie);
//           }}
//         >
//           Add Movie
//         </button>
//       </div>
//       <div className="movie-list">
//         {/* For transfer data from Parent -> child we need (props)*/}
//         {/* Flow: For every loop `movieList` data goes to `mv` then we sending the `mv` datas to a variable`movie` then it is used in `function Movie` as a props. Always use the prop name as same as of the local variable name declared for single component you have created first. Then comment the single component variable declaration part to list the whole component */}
//         {/* here mv is the array element */}
//         {movieList.map((mv) => (
//           <Movie movie={mv} />
//         ))}
//       </div>
//     </div>
//   );
// };

/***************************************************************************************************************************************************************************************************************** */
// // Day-05-Nov-24
// // For clear view changing the anoynomous function into named function
// import { useState } from 'react';
// import { Movie } from './Movie';

// export function MovieList() {
//   const [movieList, setMovieList] = useState([
//     {
//       name: "Vikram",
//       poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//       rating: 8.4,
//       summary: "Members of a black ops team must track and eliminate a gang of masked murderers.",
//     },
//     {
//       name: "RRR",
//       poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//       rating: 8.8,
//       summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     },
//     {
//       name: "Iron man 2",
//       poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//       rating: 7,
//       summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     },
//     {
//       name: "No Country for Old Men",
//       poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//       rating: 8.1,
//       summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     },
//     {
//       name: "Jai Bhim",
//       poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//       summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//       rating: 8.8,
//     },
//     {
//       name: "The Avengers",
//       rating: 8,
//       summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//       poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     },
//     {
//       name: "Interstellar",
//       poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//       rating: 8.6,
//       summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     },
//     {
//       name: "Baahubali",
//       poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//       rating: 8,
//       summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     },
//     {
//       name: "Ratatouille",
//       poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//       rating: 8,
//       summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     }
//   ]);

// const [name, setName] = useState("");
// const [poster, setPoster] = useState(""); 
// const [rating, setRating] = useState(""); 
// const [summary, setSummary] = useState(""); 

// const addMovie = () => {
//   const newMovie = {
//     name : name,
//     poster : poster,
//     rating : rating,
//     summary : summary,
//   };
// setMovieList([...movieList, newMovie]);
// console.log(newMovie);
// }
//   return (
//     <div>
//       <div className="add-movie-form">
//         <input 
//           type="text" 
//           placeholder="Name"
//           onChange={(event) => setName(event.target.value)}
//         /> 
//         <input 
//           type="text" 
//           placeholder="Poster"
//           onChange={(event) => setPoster(event.target.value)}
//         />
//         <input 
//           type="text" 
//           placeholder="Rating"
//           onChange={(event) => setRating(event.target.value)}
//         />
//         <input 
//           type="text" 
//           placeholder="Summary"
//           onChange={(event) => setSummary(event.target.value)}
//         />
//         {/* cut the onClick function part and (paste) declare it into a variable */}
//         <button onClick={addMovie}>Add Movie</button>
//       </div>
//       <div className="movie-list">
//         {movieList.map((mv) => (
//           <Movie movie={mv} />
//         ))}
//       </div>
//     </div>
//   );
// };

/********************************************************************************************************************************************************************************************************************************************************************** */
// // Day-05-Nov-24
// // For clear view changing the anoynomous function into named function
// // adding mui features after installations. 

// import { useState } from 'react';
// import { Movie } from './Movie';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// export function MovieList() {
//   const [movieList, setMovieList] = useState([
//     {
//       name: "Vikram",
//       poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//       rating: 8.4,
//       summary: "Members of a black ops team must track and eliminate a gang of masked murderers.",
//     },
//     {
//       name: "RRR",
//       poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//       rating: 8.8,
//       summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     },
//     {
//       name: "Iron man 2",
//       poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//       rating: 7,
//       summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     },
//     {
//       name: "No Country for Old Men",
//       poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//       rating: 8.1,
//       summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     },
//     {
//       name: "Jai Bhim",
//       poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//       summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//       rating: 8.8,
//     },
//     {
//       name: "The Avengers",
//       rating: 8,
//       summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//       poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     },
//     {
//       name: "Interstellar",
//       poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//       rating: 8.6,
//       summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     },
//     {
//       name: "Baahubali",
//       poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//       rating: 8,
//       summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     },
//     {
//       name: "Ratatouille",
//       poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//       rating: 8,
//       summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     }
//   ]);

// const [name, setName] = useState("");
// const [poster, setPoster] = useState(""); 
// const [rating, setRating] = useState(""); 
// const [summary, setSummary] = useState(""); 

// const addMovie = () => {
//   const newMovie = {
//     name : name,
//     poster : poster,
//     rating : rating,
//     summary : summary,
//   };
// setMovieList([...movieList, newMovie]);
// console.log(newMovie);
// }
//   return (
//     <div>
//       <div className="add-movie-form">
//       <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
        
//         <TextField label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
        
//         <TextField label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
        
//         <TextField label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
        
//         {/* cut the onClick function part and (paste) declare it into a variable */}
//         {/* <button onClick={addMovie}>Add Movie</button> */}
//         <Button variant="contained" onClick={addMovie}>Add Movie</Button>
//       </div>
//       <div className="movie-list">
//         {movieList.map((mv) => (
//           <Movie movie={mv} />
//         ))}
//       </div>
//     </div>
    
//   );
// };

/************************************************************************************************************************************************************************************************* */
// Day-05-Nov-24
// extracting a component from other component
// extracting addmovie from movie list
// movied the addMovie to new file

import { useState } from 'react';
import { Movie } from './Movie';
import { AddMovie } from './AddMovie';

export function MovieList() {
  const [movieList, setMovieList] = useState([
    {
      name: "Vikram",
      poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary: "Members of a black ops team must track and eliminate a gang of masked murderers.",
    },
    {
      name: "RRR",
      poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    },
    {
      name: "Iron man 2",
      poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    },
    {
      name: "No Country for Old Men",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: "Jai Bhim",
      poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
    },
    {
      name: "The Avengers",
      rating: 8,
      summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
    {
      name: "Ratatouille",
      poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    }
  ]);
  return (
    <div>
      <AddMovie movieList={movieList} setMovieList={setMovieList}/>
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie movie={mv} />
        ))}
      </div>
    </div>
  );
};

