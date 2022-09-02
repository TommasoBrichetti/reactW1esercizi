import { Component } from "react";
import {Image} from 'react-bootstrap'

class MovieCard extends Component{
    render(){
        return(
            <div className="movieCard">
                <Image src={this.props.movie.Poster} width={'160'} height={'220'} />
            </div>
        )
    }   
}

export default MovieCard;