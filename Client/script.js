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

        const genre = document.createElement('p');
        genre.textContent = `Genre: ${movie.genre}`;

        const image = document.createElement('img');
        image.src = movie.image;
        image.alt = movie.title;
        image.addEventListener('click', () => {
            // console.log(movie.link);
            window.location.href = movie.link;
          });

        // const link = document.createElement('div');
        // link.innerHTML = movie.link;

        movieElement.appendChild(title);
        movieElement.appendChild(genre);
        movieElement.appendChild(image);
        // movieElement.appendChild(link);

        moviesContainer.appendChild(movieElement);
    });
};

// Call getMovie function immediately when the script is loaded
getMovie();


const getReview = () => {
    axios.get('http://localhost:3001/reviews')
        .then(response => {
            displayReviwes(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the reviews!', error);
        });
};




const displayReviews = (reviews) => {
    moviesContainer.innerHTML = ''; // Clear the container first
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${review.ratings}`;

        reviewElement.appendChild(rating);

        moviesContainer.appendChild(reviewElement);
    });
};

getReview();