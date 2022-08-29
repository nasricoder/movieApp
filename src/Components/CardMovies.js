import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';


const CardMovies=({movie,movies,setMovies}) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
          {movie.description}
          </Card.Text>
          <Rating name="read-only" value={movie.rating} readOnly />
         
        </Card.Body>
      </Card>
    );
  }
  
  export default CardMovies;