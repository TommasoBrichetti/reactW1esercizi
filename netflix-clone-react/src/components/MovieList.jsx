import { Component } from "react";
import { Col, Container } from 'react-bootstrap'
import MovieCard from "./MovieCard";

class MovieList extends Component {


    state = {
        movies: []
    }

    getPost = async () => {
        try {
            let response = await fetch(this.props.url)
            console.log(response)

            if (response.ok) {
                let getMovies = await response.json();
                console.log(getMovies.Search)

                this.setState({
                    movies: getMovies.Search,
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

    slideright = () => { document.getElementById(this.props.selector).scrollLeft += 190 }
    slideleft = () => { document.getElementById(this.props.selector).scrollLeft -= 190 }

    render() {
        return (
            <div>
                <h2 className="title ml-4">{this.props.title}</h2>
                <Container fluid className='moviesList' id={this.props.selector}>
                    {this.state.movies.map((m) => (
                        <Col key={m.imdbID}>
                            <MovieCard movie={m} />
                        </Col>
                    ))}
                </Container>
                <div className="button-area">
                    <button onClick={this.slideleft}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 26L10 16L20 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </button>
                    <button onClick={this.slideright}><svg className='right' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 26L10 16L20 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </button>
                </div>
            </div>
        )
    }
}

export default MovieList;