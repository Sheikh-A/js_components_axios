

function DogCard(imgUrl) {
    const newCard = document.createElement('div'),
          newImage = document.createElement('img'),
          breed = document.createElement('h3');

    breed.textContent ="Breed: Husky";
    newImage.src = imgUrl;

    newImage.classList.add('dog-image');
    newCard.classList.add('dog-card');

    newCard.appendChild(newImage);
    newCard.appendChild(breed);

    return newCard;
}

const entryPoint = document.querySelector('.entry');
console.log(entryPoint);




// Step Four: Build out a basic DogCard component, we should only concern ourselves with displaying the image at this point.

  // adding click event here

// Step Three: talk about HTTP, requesting data from a server, and axios
// with get(), we send a GET request
//basic structure of a axios request
// axios.get()
//   .then(response => {
//  })
//   .catch(error => {
// })


axios.get('https://dog.ceo/api/breed/husky/images/random/12') //PROMISE
  .then(response => { //res
      console.log(response);
      console.log(response.data.message);
        response.data.message.forEach( (imgUrlSrc) => {
            entryPoint.appendChild(DogCard(imgUrlSrc));
        });
  })
  .catch(error => {
      console.log("the data was not returned", error)
  });

//Looping Through Objects
// for (var property in object) {
//     if (object.hasOwnProperty(property)) {
      // Do things here
//     }
//   }

// const fruits = {
//     apple: 28,
//     orange: 17,
//     pear: 54,
//   }

//   const keys = Object.keys(fruits)
//   console.log(keys) // [apple, orange, pear]

// const fruits = {
//     apple: 28,
//     orange: 17,
//     pear: 54,
//   }

//   const values = Object.values(fruits)
//   console.log(values) // [28, 17, 54]

// const fruits = {
//     apple: 28,
//     orange: 17,
//     pear: 54,
//   }

//   const entries = Object.entries(fruits)
//   console.log(entries)
  // [
  //   [apple, 28],
  //   [orange, 17],
  //   [pear, 54]
  // ]


//   async function asyncFunc() {
//     try {
//       // fetch data from a url endpoint
//       const response = await axios.get("/some_url_endpoint");
//       const data = await response.json();

//       return data;
//     } catch (error) {
//       alert(error); // catches both errors
//     }
//   }

// Looping through arrays created from Object.keys
// const keys = Object.keys(fruits)
// for (const key of keys) {
//   console.log(key)
// }



// Results:
// apple
// orange
// pear

// for (const [fruit, count] of entries) {
//     console.log(`There are ${count} ${fruit}s`)
//   }

  // Result
  // There are 28 apples
  // There are 17 oranges
  // There are 54 pears


/* Once an HTTP request is made, Axios returns a promise that is either fulfilled or rejected, depending on the response from the backend service. To handle the result, you can use the then() method */

/* If the promise is fulfilled, the first argument of then() will be called; if the promise is rejected, the second argument will be called. */
