"use strict"

function getUpcomingMovies() {
  const upcoming = document.getElementById("upcoming");
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  upcoming.innerHTML = "";

  const api_key = "6607cb2515a267b1b8a400f3879a854d";
  const list_id = "8216706";
  const ajax_params = {
    type: "GET",
    url:
      "https://api.themoviedb.org/3/list/" +
      list_id +
      "?api_key=" +
      api_key +
      "&language=en-US",
    success: success,
    error: error,
  };

  $.ajax(ajax_params);
  return;

  function success(response) {
    const movies = response.items;
    movies.forEach(movie_render);
    thumbsUp1()
    thumbsDown1()
    return;

    function movie_render(movie) {
      const { title, poster_path, overview, id } = movie;

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
            <div class="movie-list-item">
            <img class="movie-list-item-img" src="${
              IMG_PATH + poster_path
            }" alt="${title}">
            <span class="movie-list-item-title">${title}</span>
            <p class="movie-list-item-desc">${overview}</p>
            <button class="movie-list-item-button">Watch</button>
            <button class="thumbs_up_1" id=${id}>
                <span class="icon"><img src="img/BloodyKnifeUp.png"/></span>
                <span class="count" id=count_${id}>0</span>
              </button>
            <button class="thumbs_down_1" id=${id}>
            <span id="dislikeIcon" class="dislikeIcon"><img src="img/BloodyKnifeDown.png"></i></span>
            <span class="count" id=countDown_${id}>0</span>
            </button>
            </div>
            `;
      upcoming.appendChild(movieEl);
    }
  }

  function error(error) {
    console.log("not working");
  }
}
getUpcomingMovies();

function getSlashers() {
  const upcoming = document.getElementById("slasher");
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  upcoming.innerHTML = "";

  const api_key = "6607cb2515a267b1b8a400f3879a854d";
  const list_id = "8216704";
  const ajax_params = {
    type: "GET",
    url:
      "https://api.themoviedb.org/3/list/" +
      list_id +
      "?api_key=" +
      api_key +
      "&language=en-US",
    success: success,
    error: error,
  };

  $.ajax(ajax_params);
  return;

  function success(response) {
    const movies = response.items;
    movies.forEach(movie_render);
    thumbsUp2();
    thumbsDown2();

    return;

    function movie_render(movie) {
      const { title, poster_path, overview, id } = movie;

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
            <div class="movie-list-item">
            <img class="movie-list-item-img" src="${
              IMG_PATH + poster_path
            }" alt="${title}">
            <span class="movie-list-item-title">${title}</span>
            <p class="movie-list-item-desc">${overview}</p>
            <button class="movie-list-item-button">Watch</button>
            <button class="thumbs_up_2" id=${id}>
            <span class="icon"><img src="img/BloodyKnifeUp.png"/></span>
            <span class="count" id=count_${id}>0</span>
            </button>
            </button>
            <button class="thumbs_down_2" id=${id}>
            <span class="dislikeIcon"><img src="img/BloodyKnifeDown.png"></i></span>
            <span class="count" id=countDown_${id}>0</span>
            </button>
            </div>
            `;
      upcoming.appendChild(movieEl);
    }
  }

  function error(error) {
    console.log("not working");
  }
}
getSlashers();

//Watch Again
function getWatchAgain() {
  const upcoming = document.getElementById("watch-again");
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  upcoming.innerHTML = "";

  const api_key = "6607cb2515a267b1b8a400f3879a854d";
  const list_id = "8217566";
  const ajax_params = {
    type: "GET",
    url:
      "https://api.themoviedb.org/3/list/" +
      list_id +
      "?api_key=" +
      api_key +
      "&language=en-US",
    success: success,
    error: error,
  };

  $.ajax(ajax_params);
  return;

  function success(response) {
    const movies = response.items;
    movies.forEach(movie_render);
    thumbsUp3();
    thumbsDown3();

    return;

    function movie_render(movie) {
      const { title, poster_path, overview, id } = movie;

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
            <div class="movie-list-item">
              <img class="movie-list-item-img" src="${
                IMG_PATH + poster_path
              }" alt="${title}">
              <span class="movie-list-item-title">${title}</span>
              <p class="movie-list-item-desc">${overview}</p>
              <button class="movie-list-item-button">Watch</button>
              <button class="thumbs_up_3" id=${id}>
                <span class="icon"><img src="img/BloodyKnifeUp.png"/></span>
                <span class="count" id=count_${id}>0</span>
              </button>
              <button class="thumbs_down_3" id="${id}">
                <span class="dislikeIcon"><img src="img/BloodyKnifeDown.png"></i></span>
                <span class="count" id=countDown_${id}>0</span>
              </button>
            </div>
            `;
      upcoming.appendChild(movieEl);
    }
  }

  function error(error) {
    console.log("not working");
  }
}
getWatchAgain();

const thumbsUp1 = () => {
    const thumbsUpElements = document.getElementsByClassName("thumbs_up_1");
    Array.from(thumbsUpElements).forEach(function (element) {
      element.addEventListener("click", (event) => {
        console.log(event.currentTarget.id);
        const count_id = event.currentTarget.id;
        const count = document.getElementById(`count_${count_id}`);
        if (count) {
          console.log(count.innerHTML);
          let currentCount = Number(count.innerHTML);
          currentCount++;
          count.innerHTML = currentCount;
        }
      });
    });
  };

  const thumbsDown1 = () => {
    const thumbsDownElements = document.getElementsByClassName("thumbs_down_1");
    Array.from(thumbsDownElements).forEach(function (element) {
      element.addEventListener("click", (event) => {
        console.log(event.currentTarget.id);
        const count_id = event.currentTarget.id;
        const count = document.getElementById(`countDown_${count_id}`);
        if (count) {
          console.log(count.innerHTML);
          let currentCount = Number(count.innerHTML);
          currentCount++;
          count.innerHTML = currentCount;
        }
      });
    });
  }

const thumbsUp2 = () => {
    const thumbsUpElements = document.getElementsByClassName("thumbs_up_2");
    Array.from(thumbsUpElements).forEach(function (element) {
      element.addEventListener("click", (event) => {
        console.log(event.currentTarget.id);
        const count_id = event.currentTarget.id;
        const count = document.getElementById(`count_${count_id}`);
        if (count) {
          console.log(count.innerHTML);
          let currentCount = Number(count.innerHTML);
          currentCount++;
          count.innerHTML = currentCount;
        }
      });
    });
  };

  const thumbsDown2 = () => {
    const thumbsDownElements = document.getElementsByClassName("thumbs_down_2");
    Array.from(thumbsDownElements).forEach(function (element) {
      element.addEventListener("click", (event) => {
        console.log(event.currentTarget.id);
        const count_id = event.currentTarget.id;
        const count = document.getElementById(`countDown_${count_id}`);
        if (count) {
          console.log(count.innerHTML);
          let currentCount = Number(count.innerHTML);
          currentCount++;
          count.innerHTML = currentCount;
        }
      });
    });
  };

const thumbsUp3 = () => {
  const thumbsUpElements = document.getElementsByClassName("thumbs_up_3");
  Array.from(thumbsUpElements).forEach(function (element) {
    element.addEventListener("click", (event) => {
      console.log(event.currentTarget.id);
      const count_id = event.currentTarget.id;
      const count = document.getElementById(`count_${count_id}`);
      if (count) {
        console.log(count.innerHTML);
        let currentCount = Number(count.innerHTML);
        currentCount++;
        count.innerHTML = currentCount;
      }
    });
  });
};

const thumbsDown3 = () => {
    const thumbsDownElements = document.getElementsByClassName("thumbs_down_3");
    Array.from(thumbsDownElements).forEach(function (element) {
      element.addEventListener("click", (event) => {
        console.log(event.currentTarget.id);
        const count_id = event.currentTarget.id;
        const count = document.getElementById(`countDown_${count_id}`);
        if (count) {
          console.log(count.innerHTML);
          let currentCount = Number(count.innerHTML);
          currentCount++;
          count.innerHTML = currentCount;
        }
      });
    });
  };


//tried to refactor ThumbsUp/ThumbsDown based on the teams example
const ThumbsUp = {
  state: {
    count: 0,
  },
  template() {
    return `
      <span id="icon"><img src="img/BloodyKnifeUp.png"/></span>
       <span id="counter">${this.state.count}</span>
        `;
  },
  initialize() {
    document.getElementById("thumbsUp").innerHTML = this.template();
    document
      .getElementById("icon")
      .addEventListener("click", () => ThumbsUp.increment());
  },
  increment() {
    this.state.count++;
    this.updateUI();
  },
  updateUI() {
    document.getElementById("counter").textContent = this.state.count;
    console.log(this.state.count);
  },
};
ThumbsUp.initialize();

const ThumbsDown = {
  state: {
    count: 0,
  },
  template() {
    return `
      <span id="dislikeIcon"><img src="img/BloodyKnifeDown.png"></i></span>
                <span id="countDown">${this.state.count}</span>
        `;
  },
  initialize() {
    document.getElementById("thumbsDown").innerHTML = this.template();
    document
      .getElementById("dislikeIcon")
      .addEventListener("click", () => ThumbsDown.increment());
  },
  increment() {
    this.state.count++;
    this.updateUI();
  },
  updateUI() {
    document.getElementById("countDown").textContent = this.state.count;
    console.log(this.state.count);
  },
};
ThumbsDown.initialize();

//ARROW - NOT WORKING WITH DYNAMIC RENDERING

// const arrows = document.querySelectorAll(".fas fa-chevron-right arrow");
// console.log(arrows.length);
// const movieLists = document.querySelectorAll(".movie-list");
// console.log("this should be 3" + movieLists);
// arrows.forEach((arrow, i) => {
//   const itemNumber = movieLists[i].querySelectorAll("img").length;
//   console.log("this should be 8" + itemNumber);
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


