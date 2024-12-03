import PropTypes from "prop-types"

import styles from './MovieCard.module.css';
import { Play } from 'lucide-react';
const MovieCard = ( {m} ) => {
  
    return (

      <>
      

     
      <div className={styles.movieCard}>
        <div className={styles.posterContainer}>
          <img
            src={m.Poster}
            alt={m.Title}
            className={styles.poster}
          />
          <div className={styles.overlay}>
            <div className={styles.content}>
              <h3 className={styles.title}>{m.Title}</h3>
              <div className={styles.metadata}>
                <span>{m.Year}</span>
                
              </div>
             
              <button className={styles.watchButton}>
                <Play size={16} />
                <span>Watch Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

MovieCard.propTypes = {
  m: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieCard
