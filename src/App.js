import React, { Component } from 'react';

class App extends Component {
  state = {
      count: 1
  }
  onCountChange = (event) => {
      this.setState({
          count: parseInt(event.target.value)
      })
  }
  render() {
    return (
      <div className="container">
        <h1>React Native Has Power</h1>
        <h2>zadanie weryfikujące</h2>
          <form className="form-inline">
              <label htmlFor="count">Ilość</label>
              <input id="count" className="form-control" type="number" name="count" min="1" max="10"
                     value={this.state.count} onChange={this.onCountChange}/>
              <label htmlFor="type">Typ</label>
              <select id="type" name="type" className="form-control">
                  <option value="shibes">psy</option>
                  <option value="cats">koty</option>
                  <option value="birds">ptaki</option>
                  <option value="random">losowe</option>
              </select>
              <button className="btn btn-primary" type="submit">Szukaj</button>
          </form>
      </div>
    );
  }
}

export default App;
