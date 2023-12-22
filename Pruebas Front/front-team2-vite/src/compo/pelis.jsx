
import React, { useState } from 'react';

const MovieGallery = () => {
  // Supongamos que tienes un array de películas con calificaciones
  const movies = [
    {
      title: "Spiderman",
      image: "https://www.mundodeportivo.com/alfabeta/hero/2023/07/frases-spider-man.jpg?width=768&aspect_ratio=16:9&format=nowebp",
      description: "Spider-Man, traducido en ocasiones como el Hombre Araña, es un personaje creado por los estadounidenses Stan Lee y Steve Ditko, e introducido en el cómic Amazing Fantasy 15, publicado por Marvel Comics en agosto de 1962.",
      releaseDate: "15 de mayo de 2002",
    },
    {
        title: "Hulk",
        image: "https://hips.hearstapps.com/hmg-prod/images/el-increible-hulk-1554403044.jpg?crop=1xw:1xh;center,top&resize=1200:*",
        description: "Hulk, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics, siendo considerado el personaje más fuerte de la editorial. Fue creado por los escritores Stan Lee y Jack Kirby siendo su primera aparición en The Incredible Hulk #1 publicado en mayo de 1962.",
        releaseDate: "26 de junio de 2003",
      },
    {
        title: "Deadpool",
        image: "https://i.blogs.es/799179/deadpool-xataka/840_560.jpg",
        description: "Un exmercenario quien, tras haber sido sometido a un cruel experimento, adquiere el superpoder de sanar rápidamente y pretende vengarse del hombre que destrozó su vida.",
        releaseDate: "11 de febrero de 2016",
      },
    {
        title: "IronMan",
        image: "https://es.web.img3.acsta.net/r_654_368/newsv7/20/05/07/12/52/3980724.jpg",
        description: "Es una película de superhéroes de 2008. Es la primera entrega del Universo cinematográfico de Marvel. La cinta fue dirigida por Jon Favreau, con un guion de Mark Fergus, Hawk Ostby, Art Marcum y Matt Holloway. Es protagonizada por Robert Downey Jr., Terrence Howard, Jeff Bridges, Shaun Toub y Gwyneth Paltrow.",
        releaseDate: "14 de abril de 2008",
      },
    {
        title: "4X4",
        image: "https://resizer.glanacion.com/resizer/v2/peter-lanzani-en-una-escena-de-la-polemica-WQK5XPK6PRFHRJDH67BOUJJ4QU.jpg?auth=6ef5c2272152fada0cfb4e0698472e03dc17643d85daeb28d6dc4ba2c81b3269&width=880&height=586&quality=70&smart=true",
        description: "Es una película argentina de 2019 dirigida por Mariano Cohn luego del éxito de la multipremiada El ciudadano ilustre estrenada en 2016 codirigida en su momento por Gastón Duprat, quién ahora funge como productor del proyecto. La cinta está protagonizada por Peter Lanzani y Dady Brieva.",
        releaseDate: "4 de abril de 2019",
      },
    {
        title: "Argentina 1985",
        image: "https://img2.rtve.es/i/?w=1600&i=1666776983448.jpg",
        description: "Es una película de drama histórico argentino de 2022 producida y dirigida por Santiago Mitre y escrita por Mitre y Mariano Llinás. Está protagonizada por Ricardo Darín, Peter Lanzani, Alejandra Flechner y Norman Briski. Relata el caso real de la tarea del fiscal Julio César Strassera y su equipo, en el célebre Juicio a las Juntas que habían instalado un régimen de terrorismo de Estado con miles de desaparecidos y torturados durante la última dictadura que gobernó Argentina desde 1976 hasta 1983.",
        releaseDate: "29 de septiembre de 2022",
      },
    {
        title: "El Robo del Siglo",
        image: "https://m.cinesargentinos.com.ar/static/archivos/62971",
        description: "La película está basada en una historia real, el robo de la sucursal del Banco Río de la localidad bonaerense de Acassuso el viernes 13 de enero de 2006,2​ la cual fue asaltada por una banda de seis ladrones armados con réplicas de armas reales. Tomaron 23 rehenes y se llevaron aproximadamente 19 millones de dólares de 147 cajas de seguridad.",
        releaseDate: "16 enero 2020",
      },
      {
        title: "No me Rompan",
        image: "https://www.infobae.com/new-resizer/B6x-WyWHYaoPLEKd7DL1s6sZRU0=/1200x900/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/OE33SETBJJGQDN4MA72HYRQNAQ.jpg",
        description: "​​Ángela y Vera son dos mujeres de carácter explosivo que se conocen intentando domar sus impulsos más furiosos. Pero cuando se cruza en sus caminos Edgardo, un gurú obsesionado con la juventud eterna, decidirán enfrentarlo liderando un plan absolutamente ridículo pero justiciero.",
        releaseDate: "21 de septiembre de 2023",
      },
    {
        title: "no andaba muerto estaba de parranda",
        image: "https://h5w2v5m4.rocketcdn.me/wp-content/uploads/2020/05/critica-no-andaba-muerto-estaba-de-parranda-imagen-2.jpg",
        description: "Es una película cómica colombiana dirigida por Fernando Ayllón. Estrenada en las salas de cine colombianas el 2 de enero de 2020. fue protagonizada por Ricardo Quevedo, Liss Pereira, Nelson Polanía, Brian Moreno, Ana Cristina Botero, Shirley Marulanda, Marianne Schaller y José Ordoñez.",
        releaseDate: "2 de enero de 2020",
      },
    {
        title: "Simón",
        image: "https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2023/09/Simon-1024x533.png",
        description: "Durante las protestas en Venezuela, Simón (Christian McGaffney) y sus compañeros son detenidos, siendo víctimas de tortura. Obligado a huir de Venezuela, se convierte en solicitante de asilo y se dirige a Miami. Inmigración le informa de que, una vez obtenido el asilo, no podrá regresar a su país. Simón enfrenta tanto trauma como culpa y debe tomar la decisión de si quedarse en Miami y empezar una nueva vida o volver a su país para enfrentar una tiranía",
        releaseDate: "15 de diciembre de 2022",
      },
    {
        title: "No se Aceptan Devoluciones",
        image: "https://1.bp.blogspot.com/-Vn2zBM35nOo/U2ElzlrOmcI/AAAAAAAAwYE/NNULYh5qZxc/s1600/No+se+aceptan+devoluciones+1.jpg",
        description: "Valentín es el soltero más mujeriego de Acapulco. Un día, una mujer de su pasado deja un bebé en su puerta y desaparece. Valentín decide ir a Los Angeles en su búsqueda, pero en vez de encontrar a la madre, descubre un hogar para él y su nueva hija Maggie.",
        releaseDate: "15 de mayo de 2014",
      },
  ];

  const [movieRatings, setMovieRatings] = useState(Array(movies.length).fill(Array(5).fill(false)));

  // Función para manejar la calificación de una película
  const handleRating = (movieIndex, starIndex) => {
    const newMovieRatings = movieRatings.map((ratings, index) => {
      if (index === movieIndex) {
        return ratings.map((_, i) => i <= starIndex);
      }
      return ratings;
    });

    setMovieRatings(newMovieRatings);
  };

  return (
    <div className="movie-gallery">
      {movies.map((movie, movieIndex) => (
        <div key={movieIndex} className="movie-card">
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p>Fecha de lanzamiento: {movie.releaseDate}</p>
          <div className="rating">
            <span>Calificación:</span>
            {movieRatings[movieIndex].map((rated, starIndex) => (
              <span
                key={starIndex}
                className={rated ? 'star rated' : 'star'}
                onClick={() => handleRating(movieIndex, starIndex)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGallery;
















// import React, { useState } from 'react';

// const MovieGallery = () => {
//   const [ratings, setRatings] = useState(Array(5).fill(false));

//   // Función para manejar la calificación de una película
//   const handleRating = (index) => {
//     const newRatings = ratings.map((_, i) => i <= index);
//     setRatings(newRatings);
//   };

//   // Supongamos que tienes un array de películas con calificaciones
//   const movies = [
//     {
//       title: "Spiderman",
//       image: "https://www.mundodeportivo.com/alfabeta/hero/2023/07/frases-spider-man.jpg?width=768&aspect_ratio=16:9&format=nowebp",
//       description: "Descripción de Spiderman",
//       releaseDate: "Fecha de lanzamiento de Spiderman",
//     },
//     {
//       title: "Hulk",
//       image: "https://hips.hearstapps.com/hmg-prod/images/el-increible-hulk-1554403044.jpg?crop=1xw:1xh;center,top&resize=1200:*",
//       description: "Descripción de Hulk",
//       releaseDate: "Fecha de lanzamiento de Hulk",
//     },
//     // ... otros objetos de película aquí
//   ];

//   return (
//     <div className="movie-gallery">
//       {movies.map((movie, index) => (
//         <div key={index} className="movie-card">
//           <img src={movie.image} alt={movie.title} />
//           <h3>{movie.title}</h3>
//           <p>{movie.description}</p>
//           <p>Fecha de lanzamiento: {movie.releaseDate}</p>
//           <div className="rating">
//             <span>Calificación:</span>
//             {ratings.map((rated, i) => (
//               <span
//                 key={i}
//                 className={rated ? 'star rated' : 'star'}
//                 onClick={() => handleRating(i)}
//               >
//                 &#9733;
//               </span>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieGallery;









