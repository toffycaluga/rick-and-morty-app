import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
    const navigate = useNavigate();

    const goToCharacters = () => {
        navigate('/characters');
    };

    return (
        <Container className="text-center mt-5">
            <h1>Welcome to the Rick and Morty App</h1>
            <Button variant="primary" onClick={goToCharacters}>Go to Characters</Button>
        </Container>
    );
};

export default Home;
