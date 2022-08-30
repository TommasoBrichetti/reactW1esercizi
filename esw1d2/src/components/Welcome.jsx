import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from "react-bootstrap";
import { Jumbotron } from 'react-bootstrap'

const Welcome = () => (
    <Container>
        <Row>
            <Col>

                <Jumbotron className='text-center mt-5'>
                    <h1>Benvenuto!</h1>
                    <p>
                        Tutti i nuovi libri li trovi da noi!!!
                    </p>
                </Jumbotron>

            </Col>
        </Row>
    </Container>


)

export default Welcome;