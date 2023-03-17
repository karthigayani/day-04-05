// Day-04-Nov-23
// import { useState } from 'react'; // named import

// export function Counter() {
//   // camelCase - Conventional
//   let [like, setLike] = useState(0);
//   let [dislike, setDisLike] = useState(0);

//   return (
//     <div className="Counter">
//       {/* camelCase - Mandatory */}
//       <button className="btn" onClick={() => setLike(like + 1)}>👍 {like}</button>
//       <button className="btn" onClick={() => setDisLike(dislike + 1)}>👎 {dislike}</button>
//     </div>
//   );
// }

/*********************************************************************************************************************************************************************************************** */
// // Day-05-Nov-24
// import { useState } from 'react'; // named import
// import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack'; // not used
// import DeleteIcon from '@mui/icons-material/Delete';  // not used
// import Badge from '@mui/material/Badge'; 
// import MailIcon from '@mui/icons-material/Mail';  // not used

// export function Counter() {
//   // camelCase - Conventional
//   let [like, setLike] = useState(0);
//   let [dislike, setDisLike] = useState(0);

// // For clear view changing the anoynomous function into named function
//   const incrementLike = () => setLike(like + 1);
//   const incrementDisLike = () => setDisLike(like + 1);

//   return (
//     <div className="Counter">
//       {/* camelCase - Mandatory */}
//       {/* <button className="btn" onClick={() => setLike(like + 1)}>👍 {like}</button>
//       <button className="btn" onClick={() => setDisLike(dislike + 1)}>👎 {dislike}</button> */}

// {/* step:1 */}
// {/* Applying mui Button -> IconButton*/}
//       {/* <button className="btn" onClick={incrementLike}>👍 {like}</button>
//       <button className="btn" onClick={incrementDisLike}>👎 {dislike}</button> */}

//       {/* <IconButton onClick={incrementLike} color="primary" aria-label="like"> 👍 {like} </IconButton>
//       <IconButton onClick={incrementDisLike} color="error" aria-label="dislike"> 👎 {dislike} </IconButton> */}

// {/* step:3 */}
// {/* Applying mui Data Display-> badge inside mui Button -> IconButton*/}
//       <IconButton onClick={incrementLike} color="primary" aria-label="like"> <Badge badgeContent={like} color="primary"> 👍 </Badge> </IconButton>
//       <IconButton onClick={incrementDisLike} color="error" aria-label="dislike"> <Badge badgeContent={dislike} color="error"> 👎 </Badge> </IconButton>

// {/* step:2 */}
// {/* Applying mui Data Display-> badge*/}
//       {/* <Badge badgeContent={4} color="primary"><MailIcon color="action" /></Badge> */}
//       {/* <Badge badgeContent={like} color="primary"> 👍 </Badge>
//       <Badge badgeContent={dislike} color="error"> 👎 </Badge> */}
//     </div>
//   );
// }

/****************************************************************************************************************************************************************************************** */
// Day-05-Nov-24
// clear view

import { useState } from 'react'; // named import
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge'; 

export function Counter() {
  
  let [like, setLike] = useState(0);
  let [dislike, setDisLike] = useState(0);

  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(like + 1);

  return (
    <div className="Counter">
      <IconButton onClick={incrementLike} color="primary" aria-label="like"> <Badge badgeContent={like} color="primary"> 👍 </Badge> </IconButton>
      <IconButton onClick={incrementDisLike} color="error" aria-label="dislike"> <Badge badgeContent={dislike} color="error"> 👎 </Badge> </IconButton>
    </div>
  );
}

































