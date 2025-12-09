import styles from './cards.module.css';

function Card({films}) {
    return (
      <div className={styles.card}>
        <h2>{films.title}</h2>
        <img src={films.image} alt={films.title} />
        <p>{films.description}</p>
        <p>Год: {films.year}</p>
        <p>Рейтинг: {films.rating}</p>
      </div>
    );
  }
  
  export default Card;