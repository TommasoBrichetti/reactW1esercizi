import { Component } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

class AddComment extends Component {

    state = {
        comment: {
            rate: 5,
            text: '',
            elementId: ''
        }
    }

    fetchCommentsPush = async (e) => {
        e.preventDefault()
        this.hendleChange('elementId', this.props.asin)
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwYjRkMjVlODE3MTAwMTU1YjM1M2IiLCJpYXQiOjE2NjIwMzkyNTAsImV4cCI6MTY2MzI0ODg1MH0.KxUdxQj1M_ncn-UyXnGwGhNU3o6UaXGHNlrAEH8Kocg"
                }
            })

            if (response.ok) {
                console.log('nice');
                this.setState({
                    comment: {
                        rate: 5,
                        text: '',
                        elementId: ''
                    }
                })

            } else {
               console.log('aiuto piura');
            }
        } catch (error) {
            console.log('something went wrong');
        }
    }

    hendleChange = (propretyName, propretyValue) => {
        this.setState ({
            comment: {
                ...this.state.comment,
                [propretyName]: propretyValue
            }
        })
    }

    render() {
        return (
            <Form onSubmit={this.fetchCommentsPush}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select" 
                    value={this.state.comment.rate} 
                    onChange={(e)=>{
                        this.hendleChange('rate', e.target.value)
                    }
                    }>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} 
                    value={this.state.comment.text} 
                    onChange={(e)=>{
                        this.hendleChange('text', e.target.value)
                    }
                    }
                    />
                </Form.Group>

                <Button as="input" type="submit" value="Submit" />
            </Form>
        )
    }
}

export default AddComment;