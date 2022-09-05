import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';


const CardMovies=({movie,movies,setMovies}) => {
  const {id} = useParams()
  const found = movies.find(el=> el.id === Number(id))
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text >
          {found.description}
          </Card.Text>
          <Rating name="read-only" value={movie.rating} readOnly />
         
        </Card.Body>
      </Card>
    );
  }
  
  export default CardMovies;