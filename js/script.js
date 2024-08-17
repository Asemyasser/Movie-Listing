const topMoviesApiUrl = "https://imdb-top-100-movies.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "08f38291c2mshd4db13e8a80b53fp122189jsn95af135db67b",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

fetch(topMoviesApiUrl, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const topMoviesRow = document.querySelector(".section-top-movies .row");

    for (let i = 0; i <= 14; i++) {
      const movieCard = `
        <div class="col-lg-3 col-md-4 col-sm-6 col-9">
            <div class="movie-card">
              <img src="${data[i].image}" alt="${
        data[i].title
      }" class="rounded-3 w-100" />
              <div class="overlay">
                <div class="overlay-content text-white">
                  <h3 class="h5 m-0">${data[i].title}</h3>
                  <p class="m-0">${data[i].year}</p>
                  <p class="fs-6 m-0 text-info"
                  }">${data[i].rating}</p>
                  ${
                    data[i].rank % 3 === 0
                      ? `<span class="lang text-bg-warning">Ru</span>`
                      : ""
                  }
                  <span class="lang text-bg-danger">Eng</span>
                </div>
              </div>
            </div>
          </div>`;
      topMoviesRow.innerHTML += movieCard;
    }
  });

const owlCarousele = document.querySelector(".owl-carousel");

for (let i = 1; i <= 12; i++) {
  const movieCard = `
        <div class="item h-100">
          <div class="movie-card h-100">
            <img src="imgs/card${i}.png" alt="" class="rounded-3 h-100 w-100" />
          </div>
        </div>`;
  owlCarousele.innerHTML += movieCard;
}

// slider

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 7,
    },
  },
});
