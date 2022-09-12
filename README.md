# The Haunted Cinema
## Description
Welcome to the Haunted Cinema! Enter at your own risk!

A single page web application featuring a unique design perspective.

Created using HTML, CSS, and Javascript.

The design is responsive to both desktop and mobile devices.

Users can use knife up and knife down to rate each film.

Users can scroll through the title using the arrow buttons.

Data is pulled asynchronously from TMDB API.

## Lessons Learned:
- Usually I would use axious and async/await to retrieve data from an api. 


// getSlashers();

// async function getSlashers() {
// const api_key = "6607cb2515a267b1b8a400f3879a854d"
// const list_id = "8216704"

// var result = await axios.get(
// "https://api.themoviedb.org/3/list/" + list_id + "?api_key=" + api_key + "&language=en-US"
// );

// result = result.data.items;
// console.log(result)

//result.map(function(cur, index){

// })
// result.map(function (cur, index) {
//   sliders.insertAdjacentHTML(
//        "beforeend",
//        `<img class="img-${index} slider-img" src="https://image.tmdb.org./t/p/w185/${cur.poster_path" />`
//     )
// })
// }

I also tried using an XMLHttpRequest:
// getSlashers()
// function getSlashers() {
//     const xhr = new XMLHttpRequest();
//     const api_key = "6607cb2515a267b1b8a400f3879a854d"
//     const list_id = "8216704"
//     xhr.open('GET', 'https://api.themoviedb.org/3/list/' + list_id + '?api_key=' + api_key + '&language=en-US' )

//     xhr.responseType = 'json'

//     xhr.send()

//     xhr.onload = () => {
//         const movie = xhr.response

//         console.log(movie.items[0].title)
//     }
// }

Finally, I setlled on using ajax.