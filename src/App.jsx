import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import MediaCard from "./components/MediaCard"
import Box from '@mui/material/Box';
import Red from './components/Red'
import axios from 'axios'


const App = () => {
  //  let [counter, SetCounter] = useState(0);

  //  useEffect(() => {
  //    console.log("useeffect Chal raha hai");
     
  //  }, [counter])

  let [userData, SetUserData] = useState([]);

  useEffect(() => {
     try {
        axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            SetUserData(response.data);
        });
       
        
     } catch (err) {
       console.log(err);
       
     }
  }, []);

  console.log(userData);
  

  return (
    <div>
       <Navbar />
       {/* <Red />
       <Box />
       <h1 style={{margin: "50px"}}>{counter}</h1>
       <button onClick={() => {
         SetCounter(++counter);
       }}>Counter</button>
       <button onClick={() => {
         SetCounter(--counter);
       }}>InCounter</button> */}

     <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px", marginTop: "20px"}}>
      {
       userData && userData.map((elem, idx) => {
         return (
            <MediaCard imgSrc={elem.image} proTitle={elem.title} descr={elem.description}/>
         )
       })
     }
     </Box>


    </div>
  )
}

export default App

// H1 YA H6 TK TYPOGRAPHIY USE KARNA HOTA HAI AUR P TAG BHI
// LIFE CYCLE OF REACT COMPONENT

// USEEFFECT KA HOOK AP SE DO CHEZEY LAITA HAI AEK CALL BACK FUNCTION DOSRA EMPTY ARRAY