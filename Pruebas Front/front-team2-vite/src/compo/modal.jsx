import React, { useState } from 'react';

const MovieGallery = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  // Supongamos que tienes un array de películas
  const movies = [
    // ... tus objetos de película aquí
  ];

  return (
    <div className="movie-gallery">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card" onClick={() => handleCardClick(movie)}>
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p>Fecha de lanzamiento: {movie.releaseDate}</p>
          <div className="rating">
            <span>Calificación:</span>
            {/* Puedes implementar el sistema de estrellas aquí */}
          </div>
        </div>
      ))}

      {selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={selectedMovie.image} alt={selectedMovie.title} />
            <h3>{selectedMovie.title}</h3>
            <p>{selectedMovie.fullDescription}</p>
            <p>Fecha de lanzamiento: {selectedMovie.releaseDate}</p>
            <div className="rating">
              <span>Calificación:</span>
              {/* Puedes implementar el sistema de estrellas aquí */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieGallery;
