import { Component } from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { isCompositeComponent } from "react-dom/test-utils";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {

    state = {
        comments: [],
        loading: true,
        error: false
    }

    componentDidMount = () => {
        this.fetchComments()
    }

    fetchComments = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/ ${this.props.asin}` , {
                headers: {
                    'Accept': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwYjRkMjVlODE3MTAwMTU1YjM1M2IiLCJpYXQiOjE2NjIwMzkyNTAsImV4cCI6MTY2MzI0ODg1MH0.KxUdxQj1M_ncn-UyXnGwGhNU3o6UaXGHNlrAEH8Kocg"
                }
            })

            if (response.ok) {
                let commentsRes = await response.json()
                console.log(commentsRes)

                this.setState({
                    comments: commentsRes,
                    loading: false,
                    error: false,
                })

            } else {
                this.setState({
                    ...this.state.comments,
                    loading: false,
                    error: true,
                })
            }
        } catch (error) {
            console.log('something went wrong');

            this.setState({
                ...this.state.comments,
                loading: false,
                error: true,
            })
        }
    }

    render() {
        return (
            <div>
                <AddComment asin={this.props.asin}/>
                <ListGroup>
                    {this.state.comments.map((comment, i) => (
                        <CommentList rate={comment.rate} comment={comment.comment} key={i} />
                    ))}
                </ListGroup>
            </div>
        )
    }
}

export default CommentArea;