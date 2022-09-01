import { Component } from "react";
import { Col, Container, Row, ListGroup} from "react-bootstrap";

class CommentList extends Component{

    render(){
        return(
            <ListGroup.Item> {this.props.rate} - {this.props.comment}</ListGroup.Item>
        )
    }   
}

export default CommentList;