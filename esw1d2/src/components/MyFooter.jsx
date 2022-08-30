import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => (
    <Container fluid>
        <Row className='bg-dark text-light text-center'>
            <Col lg={12}>
                &copy; Bookstore
            </Col>
        </Row>
    </Container>
)

export default MyFooter