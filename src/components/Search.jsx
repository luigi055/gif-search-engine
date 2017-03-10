import React, { Component } from 'react'

class Search extends Component {
  onInputChange(term) {
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search">
        <input 
          type="text" 
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Enter text to search for gifs!"
        />
      </div>
    );
  }
}


Search.propType = {
  onTermChange: React.PropTypes.func.isRequired,
};

export default Search;
