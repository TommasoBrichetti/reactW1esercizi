import { Component } from "react";
import { Col, Container, Row, ListGroup} from "react-bootstrap";

class CommentList extends Component{

    render(){
        return(
            <ListGroup.Item className="text-dark"> {this.props.rate} - {this.props.text}</ListGroup.Item>
        )
    }   
}

export default CommentList;