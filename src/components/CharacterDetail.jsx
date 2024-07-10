// src/components/CharacterDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Loader from './Loader';

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (!character) return <div>Loading...</div>;

    return (
        <Container className="mt-5">
            <Card>
                <Row noGutters>
                    <Col md={4}>
                        <Card.Img className="character-img" src={character.image} />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>{character.name}</Card.Title>
                            <Card.Text>Status: {character.status}</Card.Text>
                            <Card.Text>Species: {character.species}</Card.Text>
                            <Card.Text>Gender: {character.gender}</Card.Text>
                            <Card.Text>Origin: {character.origin.name}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default CharacterDetail;
