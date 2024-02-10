// OMDB API key placeholder

const API_KEY = '8c4b0dd0';

// Event listener for DOMContentLoaded which indicates that the DOM is ready to be interacted with
document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', performSearch);
});

// Function to perform the search when the search button is clicked
function performSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.trim();

  // Checks if the search term is not empty and then makes a fetch call to the OMDB API
  if (searchTerm) {
    fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => displayResults(data))
      .catch(error => console.error('Error fetching data:', error));
  } else {
    alert('Please enter a search term.');
  }
}

// Function to display the results of the search
function displayResults(data) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  // If the response from the API is successful, it loops through the search results and creates HTML for each
  if (data.Response === "True") {
    data.Search.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `
        <h3>${movie.Title}</h3>
        <img src="${movie.Poster !== "N/A" ? movie.Poster : 'placeholder-image-url'}" alt="${movie.Title}">
        <p>${movie.Year}</p>
        <button onclick='addToWatchlist("${movie.imdbID}")'>Add to Watchlist</button>
      `;
      resultsContainer.appendChild(movieElement);
    });
  } else {
    resultsContainer.innerHTML = '<p>No results found.</p>';
  }
}

// Function to add a movie to the watchlist stored in local storage
function addToWatchlist(imdbID) {
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  if (!watchlist.includes(imdbID)) {
    watchlist.push(imdbID);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    alert('Movie added to watchlist.');
  } else {
    alert('Movie is already in watchlist.');
  }
}
