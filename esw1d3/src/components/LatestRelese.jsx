import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card } from "react-bootstrap";
import { Component } from 'react';
import scifi from '../data/scifi.json'
import '../App.css';

class LatestRelese extends Component {

    render() {
        return (
            <Container >
                <Row>
                    {
                        scifi.map((book) => {
                            return (

                                <Col  sm={12} md={4} lg={2} key={book.asin} className='mb-5'>
                                    <Card className='card'>
                                        <Card>
                                            <Card.Img src={book.img} className='card-img'/>
                                            <Card.Body className='card-title'>
                                                <Card.Title>{book.title}</Card.Title>
                                                <Card.Text>
                                                    {book.price}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }

}

export default LatestRelese;