import React, { Component } from 'react';
import SearchForm from './SearchForm';

class App extends Component {
    constructor() {
        super();
        this.state = {
            fetchError: false,
            photos: [],
            types: ['shibes', 'cats', 'birds', 'random']
        }
        this.updatePhotos = this.updatePhotos.bind(this);
    }

    updatePhotos(photos, response) {
        this.setState({
            fetchError: response === 'error',
            photos
        })
    }

    render() {
        return (
            <div className="container">
                <h1>React Native Has Power</h1>
                <h2>zadanie weryfikujące</h2>
                <SearchForm types={this.state.types} onGetSearchResults={this.updatePhotos}/>
                {this.state.fetchError ? (
                <div className="alert alert-danger">
                    Błąd: nie udało się pobrać danych z serwera.
                </div> ) : ''}
                <div className="search-results">
                    {this.state.photos.map((photo, index) => (
                        <img src={photo} alt="" className="img-thumbnail" key={index}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
