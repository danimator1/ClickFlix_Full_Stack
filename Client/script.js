// chat GPT helped me with this
document.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.getElementById('movies-container');
    const actorsContainer = document.getElementById('actors-container');
    const reviewsContainer = document.getElementById('reviews-container');
    const actorForm = document.getElementById('actor-form');
    const cancelButton = document.getElementById('cancel-button');

    if (moviesContainer) {
        getMovies(moviesContainer);
    }
    if (actorsContainer) {
        getAllActors(actorsContainer);
    }
    if (reviewsContainer) {
        getAllReviews(reviewsContainer);
    }
    //  chat GPT helped me with this
    actorForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const actorId = document.getElementById('actor-id').value;
        const name = document.getElementById('name').value;
        const bio = document.getElementById('bio').value;
        const dob = document.getElementById('dob').value;
        const image = document.getElementById('image').value;

        if (actorId) {
            updateActor(actorId, { name, bio, dob, image });
        } else {
            addActor({ name, bio, dob, image });
        }
    });

    cancelButton.addEventListener('click', () => {
        resetForm();
    });
});

const getMovies = (moviesContainer) => {
    axios.get('http://localhost:3001/movies')
        .then(response => {
            displayMovies(response.data, moviesContainer);
        })
        .catch(error => {
            console.error('There was an error fetching the movies!', error);
        });
};

const displayMovies = (movies, moviesContainer) => {
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const title = document.createElement('h2');
        title.textContent = movie.title;

        const review = document.createElement('h2');
        review.textContent = movie.review;

        const genre = document.createElement('p');
        genre.textContent = `Genre: ${movie.genre}`;

        const image = document.createElement('img');
        image.src = movie.image;
        image.alt = movie.title;
        image.addEventListener('click', () => {
            window.location.href = movie.link;
        });

        movieElement.appendChild(title);
        movieElement.appendChild(genre);
        movieElement.appendChild(image);

        moviesContainer.appendChild(movieElement);
    });
};

const getAllActors = (actorsContainer) => {
    axios.get('http://localhost:3001/actors')
        .then(response => {
            displayActors(response.data, actorsContainer);
        })
        .catch(error => {
            console.error('There was an error fetching the actors!', error);
        });
};

const displayActors = (actors, actorsContainer) => {
    actorsContainer.innerHTML = '';
    actors.forEach(actor => {
        const actorElement = document.createElement('div');
        actorElement.classList.add('actor');

        const actorName = document.createElement('p');
        actorName.textContent = actor.name;

        const actorImage = document.createElement('img');
        actorImage.src = actor.image;
        actorImage.alt = actor.name;
        actorImage.addEventListener('click', () => {
            showActorDetails(actor);
            populateForm(actor);
        });

        actorElement.appendChild(actorImage);
        actorElement.appendChild(actorName);

        actorsContainer.appendChild(actorElement);
    });
};

const showActorDetails = (actor) => {
    const actorDetails = document.createElement('div');
    actorDetails.classList.add('actor-details');

    const actorBio = document.createElement('p');
    actorBio.textContent = `Bio: ${actor.bio}`;

    const actorDob = document.createElement('p');
    actorDob.textContent = `Date of Birth: ${actor.dob}`;

    actorDetails.appendChild(actorBio);
    actorDetails.appendChild(actorDob);

    // chatgpt helped me with this
    const existingDetails = document.querySelector('.actor-details');
    if (existingDetails) {
        existingDetails.remove();
    }

    // Chat GPT Help Me With This
    document.body.appendChild(actorDetails);
};

const populateForm = (actor) => {
    document.getElementById('actor-id').value = actor._id;
    document.getElementById('name').value = actor.name;
    document.getElementById('bio').value = actor.bio;
    document.getElementById('dob').value = actor.dob;
    document.getElementById('image').value = actor.image;

    document.getElementById('form-title').textContent = 'Update Actor';
    document.getElementById('cancel-button').style.display = 'block';
};

const resetForm = () => {
    document.getElementById('actor-id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('bio').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('image').value = '';

    document.getElementById('form-title').textContent = 'Add Actor';
    document.getElementById('cancel-button').style.display = 'none';
};

const addActor = (actor) => {
    axios.post('http://localhost:3001/actors', actor)
        .then(response => {
            console.log(response.data.message);
            getAllActors(document.getElementById('actors-container'));
            resetForm();
        })
        .catch(error => {
            console.error('There was an error adding the actor!', error);
        });
};

const updateActor = (actorId, actor) => {
    axios.put(`http://localhost:3001/actors/${actorId}`, actor)
        .then(response => {
            console.log(response.data.message);
            getAllActors(document.getElementById('actors-container'));
            resetForm();
        })
        .catch(error => {
            console.error('There was an error updating the actor!', error);
        });
};

const getAllReviews = (reviewsContainer) => {
    axios.get('http://localhost:3001/reviews')
        .then(response => {
            displayReviews(response.data, reviewsContainer);
        })
        .catch(error => {
            console.error('There was an error fetching the reviews!', error);
        });
};

const displayReviews = (reviews, reviewsContainer) => {
    reviewsContainer.innerHTML = '';
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        const movieRating = document.createElement('p');
        movieRating.textContent = review.movieReview;

        const movieReview = document.createElement('p');
        movieReview.textContent = review.rating;

        reviewElement.appendChild(movieRating);
        reviewElement.appendChild(movieReview);

        reviewsContainer.appendChild(reviewElement);
    });
};
