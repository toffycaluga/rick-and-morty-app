import { Container, Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Container className="text-center mt-5">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    );
};

export default Loader;
