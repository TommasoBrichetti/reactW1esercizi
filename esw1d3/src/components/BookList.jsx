import { Component } from "react";
import { Container, Row, Col, Form, Button, FormGroup} from "react-bootstrap";
import scifi from '../data/scifi.json'
import SingleBook from "./SingleBook";

class BookList extends Component {

    state = {
        finder: {
            serch: ''
        }
    }

    hendleChange = (propretyName, propretyValue) => {
        this.setState({
            finder: {
                ...this.state.reservation,
                [propretyName]: propretyValue
            }
        })
    }

    books = scifi;

    bookFilter(searchInput) {
        this.books = scifi.filter((e) => e.title.toLowerCase().includes(searchInput.toLowerCase()))
    }

    render() {
        return (
            <Container fluid>
                <Form>
                    <FormGroup>
                        <Form.Control size="sm" type="text" placeholder="Small text" 
                        value={this.state.finder.serch} 
                        onChange={(e)=>{
                            this.hendleChange('serch', e.target.value)
                            this.bookFilter(e.target.value)
                        }}
                        />
                    </FormGroup>
                </Form>

                {
                    this.books.map((book) => {
                        return (
                            <SingleBook image={book.img} title={book.title} category={book.category} price={book.price} key={book.asin}/>
                        )
                    })
                }
            </Container>
        )
    }

}

export default BookList;