import React, { Component } from 'react';

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = corsAnywhere + 'http://shibe.online/api';

class App extends Component {
    state = {
        count: 1,
        isLoading: false,
        photos: [],
        type: "shibes"
    };

    onCountChange = event => {
        this.setState({ count: parseInt(event.target.value) })
    };

    ontTypeChange = event => {
        this.setState({ type: event.target.value })
    };

    onSubmitForm = event => {
        event.preventDefault();
        this.setState({
            isLoading: true
        })
        fetch(`${apiUrl}/${this.state.type}?count=${this.state.count}`)
            .then(response => response.json())
            .then(photos => this.setState({
                isLoading: false,
                photos
            }));
    }

    render() {
        return (
            <div className="container">
                <h1>React Native Has Power</h1>
                <h2>zadanie weryfikujące</h2>
                <form className="form-inline" onSubmit={this.onSubmitForm}>
                    <label htmlFor="count">Ilość</label>
                    <input id="count" className="form-control" type="number" name="count" min="1" max="10"
                           value={this.state.count} onChange={this.onCountChange}/>
                    <label htmlFor="type">Typ</label>
                    <select id="type" name="type" className="form-control" onChange={this.ontTypeChange}>
                        <option value="shibes">psy</option>
                        <option value="cats">koty</option>
                        <option value="birds">ptaki</option>
                        <option value="random">losowe</option>
                    </select>
                    <button className="btn btn-primary" type="submit" disabled={this.state.isLoading}>
                        {this.state.isLoading ? 'Ładowanie danych' : 'Szukaj'}
                    </button>
                </form>
            </div>
        );
    }
}

export default App;
