//these are just drafts of code I want to keep

function getUpcomingMovies() {

{
    const upcoming = document.getElementById('upcoming');
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
    upcoming.innerHTML = '';

const api_key = "6607cb2515a267b1b8a400f3879a854d";
const list_id = "8216706";
const ajax_params = 
{
    type: "GET",
    url: "https://api.themoviedb.org/3/list/" + list_id + "?api_key=" + api_key + "&language=en-US",
    success: success,
    error: error
};

$.ajax(ajax_params);
return

function success(response);
{
    const movies =  response.items;
    movies.forEach(move_render);
    return;

function movie_render(movie)
    {
        const {title, poster_path, overview} = movie;
        const movieEl = document.createElementElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        <div class="movie-list-item">
        <img class="movie-list-item-img" src="${IMG_PATH + poster_path}" alt="${title}">
        <span class="movie-list-item-title">${title}</span>
        <p class="movie-list-item-desc">${overview}</p>
        <button class="movie-list-item-button">Watch</button>
        <button class="thumbs_up">
        <span id="icon"><img src="img/BloodyKnifeUp.png"/></span>
        <span id="count">0</span>
        </button>
        <button class="thumbsDown">
        <span id="dislikeIcon"><img src="img/BloodyKnifeDown.png"></i></span>
        <span id="countDown">0</span>
        </button>
        </div>
        `
        ;
        upcoming.appendChild(movieEl);
    }
}

function error(error) {
        console.log('not working')

}
}
}
getUpcomingMovies();

// function getUpcomingMovies() {
//     const upcoming = document.getElementById('upcoming')
//     const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
//     upcoming.innerHTML = ''

// const api_key = "6607cb2515a267b1b8a400f3879a854d"
// const list_id = "8216706"
//     $.ajax({
//         type: 'GET',
//         url: 'https://api.themoviedb.org/3/list/' + list_id + "?api_key=" + api_key + "&language=en-US",
//         success: function(response) {
//             const movies = response.items;
        
//             movies.forEach(movie => {
//                 const {title, poster_path, overview} = movie

//         const movieEl = document.createElement('div')
//         movieEl.classList.add('movie')

//         movieEl.innerHTML = `
//         <div class="movie-list-item">
//         <img class="movie-list-item-img" src="${IMG_PATH + poster_path}" alt="${title}">
//         <span class="movie-list-item-title">${title}</span>
//         <p class="movie-list-item-desc">${overview}</p>
//         <button class="movie-list-item-button">Watch</button>
//         <button class="thumbs_up">
//         <span id="icon"><img src="img/BloodyKnifeUp.png"/></span>
//         <span id="count">0</span>
//         </button>
//         <button class="thumbsDown">
//         <span id="dislikeIcon"><img src="img/BloodyKnifeDown.png"></i></span>
//         <span id="countDown">0</span>
//         </button>
//         </div>
//         `
//         upcoming.appendChild(movieEl)
// })
//         },
//         error: function(error) {
//             console.log('not working')
//         },
    
//     })


// }
// getUpcomingMovies()
