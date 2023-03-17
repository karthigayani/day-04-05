// // Day-04-Nov-23
// // Problem:1 
// import './App.css';
// import { Movie } from './Movie';
// function App() {
//   return (
//     // <Movie />
//     <MovieList/>
//   );
// }
// function MovieList(){
// const movieList = [
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
//       summary:"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
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
//     <div className="movie-list">
//       {/* For transfer data from Parent -> child we need (props)*/}
//       {/* Flow: For every loop `movieList` data goes to `mv` then we sending the `mv` datas to a variable`movie` then it is used in `function Movie` as a props. Always use the prop name as same as of the local variable name declared for single component you have created first. Then comment the single component variable declaration part to list the whole component */}
//       {/* here mv is the array element */}
//       {movieList.map((mv)=>(
//         <Movie movie={mv} />
//       ))}
//     </div>
//   );
// };
// export default App;

/*********************************************************************************************************************************************************************************************************************************************************************** */
// // Form in react
// // Problem:2
// import { useState } from 'react';
// import './App.css';
// // Main function(component)
// function App() {
//   return (
//     <AddColor/>
//   );
// }
// // Sub-function(component) Step-1
// function AddColor(){
//   const [color, setColor] = useState("orange");
//   const styles = {background:color};
//   // step-3 comment this line
//   // const colorList = ["crimson","orangered","orange","pink"]; 
//   const [colorList, setColorList] = useState([    // step-4 adding useState
//     "crimson",
//     "orangered",
//     "orange",
//     "pink"
//   ]);
//   return(
//     <div>
//       <input
//         style={styles}
//         onChange={(event) => setColor(event.target.value)}
//         placeholder="Enter a color"
//         value={color}
//       />
//       {/* step-8 : onclick logic -> copy existing colorList & add new color to it. (Applying ES6 feature - spread operator)  */}
//       {/* <button>Add Color</button> */}
//       <button onClick={() => setColorList([...colorList, color])}>Add Color
//       {/* <button onClick={() => setColorList([...colorList, color, color])}> */}
//       {/* AddColor function -> color variable*/}
//       {/* Flow: (1)Spread operator copies the existing colorList ->  (2)adding new color to the colorList -> (3)setColorList updating the new colorList*/}
//       </button>
//       {/* <ColorBox />
//       <ColorBox />
//       <ColorBox /> */}
//       {/* step:5 */}
//       {/* {colorList.map((clr) => (
//         <ColorBox color={clr}/>
//       ))} */}
//       {/* To Overcome warning put index for key*/}
//       {colorList.map((clr, index) => (
//         <ColorBox key={index} color={clr}/>
//       ))}
//     </div>
//   );
// }
// // Sub-function(component) Step-2
// function ColorBox({color}){   // Step -6 Object destructuring
//   const styles = {
//     width: "250px",
//     height:"25px",
//     // background: "orange",
//     background: color,   // Step -7 Applying props{color} instead of orange
//     marginTop:"10px"
//   }
//   return <div 
//             style={styles}>
//         </div>
// }
// export default App;
// colorList flow : colorList -> clr -> (clr->color) -> color goes as props of colorBox -> color assigned to background.
// Flow: when you `type` -> onChange triggered and fire `setColor` -> In setColor we gaved the typed value (event.target.value) -> So it updates the value for color.
// Why form needed ?
// If you want to add/submit any data to the website, we need form.
// Immutability concept -> Copying the existing data and make changes without disturbing the old one.(Virtual DOM concept)


// When you use mapping you will always get a warning message in console : Warning: Each child in a list should have a unique "key" prop.
// How to overcome this warning ?

// To avoid this, change your code,
// from:
// {colorList.map((clr) => (
//   <ColorBox color={clr}/>
//   ))}
// To:
// {colorList.map((clr,index) => (
//   <ColorBox key={index} color={clr}/>
// ))}

// What is the use of putting key?
// key helps to quickly compare the changes b/w virtual DOM and real DOM
// If you don't mention key you will not get the benifits of virtual DOM.
// why we put index? Bcs every array element should have a unique key called index.


/**************************************************************************************************************************************************************************************************************** */
// Day-05-Nov-24
// Problem:1 
// Applying form in react movie app
import './App.css';
import { MovieList } from './MovieList';
function App() {
  return (
    // <Movie />
    <MovieList/>
  );
}
export default App;

/**************************************************************************************************************************************************************************************************************************************************** */






















