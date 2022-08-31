import { Card } from 'react-bootstrap';
import { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";

class SingleBook extends Component {

    state = {
        myChosenOne: false
    }

    

    change = 'bg-none'

    myChosen = () => {

        if (this.state.myChosenOne === false) {
            this.setState({
               myChosenOne: true
            })
            this.change = 'bg-primary'
        } else {
            this.change = 'bg-none'
            this.setState({
                myChosenOne: false
             })
        }
        console.log(this.state.myChosenOne)
    }

    render(props) {

        return (
            <Container fluid>
                <Row>

                    <Col sm={12} md={4} lg={2} className="my-2">
                        <Card className={this.change} onClick={this.myChosen}>
                            <Card.Img variant="top" src={this.props.image} />
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text>
                                    {this.props.category} <br />
                                    {this.props.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        )
    }
}

export default SingleBook;