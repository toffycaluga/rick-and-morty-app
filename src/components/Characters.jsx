// src/components/Characters.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Loader from './Loader';

const Characters = () => {
    const [characters, setCharacters] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <Container>
            <h1 className="mt-5">Characters</h1>
            <Row>
                {characters.map((character, index) => (
                    <Col key={index} xs={12} lg={3} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={character.image} />
                            <Card.Body>
                                <Card.Title>{character.name}</Card.Title>
                                <NavLink to={`/characters/${character.id}`} activeClassName="active">
                                    View Details
                                </NavLink>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Characters;
