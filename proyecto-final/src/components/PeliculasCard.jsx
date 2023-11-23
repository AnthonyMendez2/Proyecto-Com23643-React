import {Link} from 'react-router-dom'
import './PeliculasCard.css'

export const PeliculasCard = ({pelicula})=>{

    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

    return (
        <li className="moviesCard">
            <div>
                <Link to={`/pelicula/${pelicula.id}`}>
                    <img className='movieImage' src={imgURL}/>
                    {pelicula.title}
                </Link>
            </div>
        </li>
    )    

}