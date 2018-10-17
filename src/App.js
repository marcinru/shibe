import React, { Component } from 'react';
import SearchForm from './SearchForm';

class App extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            types: ['shibes', 'cats', 'birds', 'random']
        }
        this.updatePhotos = this.updatePhotos.bind(this);
    }

    updatePhotos(photos) {
        this.setState({ photos })
    }

    render() {
        return (
            <div className="container">
                <h1>React Native Has Power</h1>
                <h2>zadanie weryfikujące</h2>
                <SearchForm types={this.state.types} onGetSearchResults={this.updatePhotos}/>
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
