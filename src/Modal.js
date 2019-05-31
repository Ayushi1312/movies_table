import React, { Component } from 'react';
import  './assets/style/index.css';

class Modal extends Component {

    state = {
        data: {}
    }

// API call to fetch detailed description of movies/series
    componentDidUpdate = async (prevProps) => {
        if (this.props.isOpen && this.props.imdbID !== prevProps.imdbID) {
            const rawResponse = await fetch(`http://www.omdbapi.com/?apikey=c7e2df9&i=${this.props.imdbID}`);
            const data = await rawResponse.json();
            this.setState({
                data: data
            });
        }
    }

   // Rendering the complete description of movies/series
    render() {
        if (this.props.isOpen) {
            const data = this.state.data;
            return (
                <div className="modal-container">
                    <h3 className="modal-heading"><u>{data.Title}</u></h3> &nbsp;
                    <h5> Release Year : {data.Year}</h5>
                    <h5> Rated : {data.Rated}</h5>
                    <h5> Release Date : {data.Released}</h5>
                    <h5> Runtime : {data.Runtime}</h5>
                    <h5> Genre : {data.Genre}</h5>
                    <h5> Director : {data.Director}</h5>
                    <h5> Writer : {data.Writer}</h5>
                    <h5> Actors : {data.Actors}</h5>
                    <h5> Plot : {data.Plot}</h5>
                    <h5> Language : {data.Language}</h5>
                    <h5> Country : {data.Country}</h5>
                    <h5> Awards : {data.Awards}</h5> &nbsp;
                    <img src={data.Poster} width="80" height="100" />
                    <span onClick={() => this.props.closeModal()} className="close">&times;</span>
                </div>
            );
        }
        return null;
    }


}

export default Modal;
