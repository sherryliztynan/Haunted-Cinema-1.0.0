function getUpcomingMovies() {
    const upcoming = document.getElementById('upcoming')
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    upcoming.innerHTML = ''

const api_key = "6607cb2515a267b1b8a400f3879a854d"
const list_id = "8216706"
    $.ajax({
        type: 'GET',
        url: 'https://api.themoviedb.org/3/list/' + list_id + "?api_key=" + api_key + "&language=en-US",
        success: function(response) {
            const movies = response.items;
        
            movies.forEach(movie => {
                const {title, poster_path, overview} = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

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
        upcoming.appendChild(movieEl)
})
        },
        error: function(error) {
            console.log('not working')
        },
    
    })


}
getUpcomingMovies()

function getSlashers() {
    const slasher = document.getElementById('slasher')
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    slasher.innerHTML = ''

    $.ajax({
        type: 'GET',
        url: 'https://api.themoviedb.org/3/list/8216704?api_key=6607cb2515a267b1b8a400f3879a854d&language=en-US',
        success: function(response) {
            const movies = response.items;
            
            movies.forEach(movie => {
                const {title, poster_path, overview} = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

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
        slasher.appendChild(movieEl)
})
        },
        error: function(error) {
            console.log('not working')
        },
    
    })


}
getSlashers()

//THUMBS UP

const thumbsUp = document.querySelector(".thumbs_up");
let likeIcon = document.querySelector("#icon"),
count = document.querySelector("#count");

let clicked = false;


window.onload = thumbsUp.addEventListener("click", () => {
    clicked = true;
    likeIcon.innerHTML = `<img src="img/BloodyKnifeUp.png"/>`;
    count.textContent++;
    console.log(count)
});



//THUMBS DOWN

const thumbsDown = document.querySelector(".thumbsDown");
let dislikeIcon = document.querySelector("#dislikeIcon"),
  countDown = document.querySelector("#countDown");
    let selected = false;

window.onload = thumbsDown.addEventListener("click", () => {
    selected = true;
    dislikeIcon.innerHTML = `<img src="img/BloodyKnifeDown.png"/>`;
    countDown.textContent++;
    console.log(countDown)
});

//ARROW - NOT WORKING WITH DYNAMIC RENDERING

// const arrows = document.querySelectorAll(".fas fa-chevron-right arrow");
// const movieLists = document.querySelectorAll(".movie-list");
// arrows.forEach((arrow, i) => {
//   const itemNumber = movieLists[i].querySelectorAll("img").length;
//   let clickCounter = 0;
//   arrow.addEventListener("click", () => {
//     const ratio = Math.floor(window.innerWidth / 270);
//     clickCounter++;
//     if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
//       movieLists[i].style.transform = `translateX(${
//         movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
//       }px)`;
//     } else {
//       movieLists[i].style.transform = "translateX(0)";
//       clickCounter = 0;

//     }
//   });
// });