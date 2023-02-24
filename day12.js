const express  =  require('express');
const axios = require('axios');
const app = express();


//                     # AXIOS 

axios.get("https://official-joke-api.appspot.com/random_joke")
.then((result) => {
    console.log(result.data);}
)
.catch((err) => {
    console.log(err);
});

///              ## FETCH METHOD

// fetch("https://official-joke-api.appspot.com/random_joke")
// .then((result) => {
// return result.json();
// })
// .then ((joke) => {
//     console.log(joke);
// })
// .catch((err) => {
//     console.log(err);
// });

