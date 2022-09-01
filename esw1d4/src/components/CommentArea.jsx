import { Component } from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { isCompositeComponent } from "react-dom/test-utils";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {

    state = {
        comments: [],
    }

    

    getPost = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
                headers: {
                    "Accept": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwYjUxMTVlODE3MTAwMTU1YjM1M2MiLCJpYXQiOjE2NjIwMzkzMTMsImV4cCI6MTY2MzI0ODkxM30.YFGlcMD6_WlGt6KbQi1b_2mhNfp14Ohl4xdVmVkMJFk",
                    
                }
            })
            console.log(response)
            if (response.ok) {
                let getComments = await response.json();
                console.log(getComments)
                this.setState({
                    comments: getComments,
                })
            } else {
                console.log('Something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        this.getPost();
    }

    render() {

        return (

            <div>

                <AddComment asin={this.props.asin}/>

                <ListGroup>

                    {
                        this.state.comments.map((comment, i) => {
                            return <CommentList text={comment.comment} rate={comment.rate} key={i}></CommentList>
                        })
                    }
                </ListGroup>

            </div>
        )

    }

}

export default CommentArea;