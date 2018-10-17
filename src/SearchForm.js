import React, {Component} from 'react';

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = corsAnywhere + 'http://shibe.online/api';

class SearchForm extends Component {
    state = {
        count: 1,
        isLoading: false,
        type: this.props.types[0]
    };

    onCountChange = event => {
        this.setState({ count: parseInt(event.target.value) })
    };

    ontTypeChange = event => {
        this.setState({ type: event.target.value })
    };

    getRandomType() {
        const randomIndex = Math.floor(Math.random() * 3);
        return this.props.types[randomIndex];
    }

    onSubmitForm = event => {
        event.preventDefault();
        this.setState({ isLoading: true });
        const endpoint = this.state.type === 'random' ? this.getRandomType() : this.state.type;
        fetch(`${apiUrl}/${endpoint}?count=${this.state.count}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText)
            })
            .then(photos => {
                this.setState({ isLoading: false });
                this.props.onGetSearchResults(photos)
            })
            .catch(error => {
                this.setState({ isLoading: false });
                console.log(error)
            });
    };

    render() {
        return (
            <form className="form-inline" onSubmit={this.onSubmitForm}>
                <label htmlFor="count">Ilość</label>
                <input id="count" className="form-control" type="number" name="count" min="1" max="10"
                       value={this.state.count} onChange={this.onCountChange}/>
                <label htmlFor="type">Typ</label>
                <select id="type" name="type" className="form-control" onChange={this.ontTypeChange}>
                    {this.props.types.map(typ => <option value={typ} key={typ}>{typ}</option>)}
                </select>
                <button className="btn btn-primary" type="submit" disabled={this.state.isLoading}>
                    {this.state.isLoading ? 'Ładowanie danych' : 'Szukaj'}
                </button>
            </form>
        );
    }
}

export default SearchForm;
