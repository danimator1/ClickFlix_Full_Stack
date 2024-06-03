const getBtn = document.getElementById('get-btn');
const moviesContainer = document.getElementById('movies-container');

const getMovie = () => {
    axios.get('http://localhost:3001/movies')
        .then(response => {
            displayMovies(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the movies!', error);
        });
};

const displayMovies = (movies) => {
    moviesContainer.innerHTML = ''; // Clear the container first
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const title = document.createElement('h2');
        title.textContent = movie.title;

        const description = document.createElement('p');
        description.textContent = movie.description;

        const genre = document.createElement('p');
        genre.textContent = `Genre: ${movie.genre}`;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Release Date: ${movie.releaseDate}`;

        const duration = document.createElement('p');
        duration.textContent = `Duration: ${movie.duration} minutes`;

        const image = document.createElement('img');
        image.src = movie.image;
        image.alt = movie.title;

        const link = document.createElement('div');
        link.innerHTML = movie.link;

        movieElement.appendChild(title);
        movieElement.appendChild(description);
        movieElement.appendChild(genre);
        movieElement.appendChild(releaseDate);
        movieElement.appendChild(duration);
        movieElement.appendChild(image);
        movieElement.appendChild(link);

        moviesContainer.appendChild(movieElement);
    });
};

getBtn.addEventListener('click', getMovie);
