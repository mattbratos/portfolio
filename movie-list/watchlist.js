const API_KEY = '8c4b0dd0';

document.addEventListener('DOMContentLoaded', () => {
    displayWatchlist();
  });
  
  function displayWatchlist() {
    const watchlistContainer = document.getElementById('watchlist');
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  
    watchlist.forEach(imdbID => {
      // Fetch movie details from OMDB
      fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(movie => {
          const movieElement = document.createElement('div');
          movieElement.innerHTML = `
            <h3>${movie.Title}</h3>
            <img src="${movie.Poster !== "N/A" ? movie.Poster : 'placeholder-image-url'}" alt="${movie.Title}">
            <p>${movie.Year}</p>
            <button onclick='removeFromWatchlist("${movie.imdbID}")'>Remove from Watchlist</button>
          `;
          watchlistContainer.appendChild(movieElement); 
        }));