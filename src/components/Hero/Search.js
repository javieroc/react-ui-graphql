import React, { Component } from 'react';
import { debounce } from 'throttle-debounce';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleRefetch = debounce(500, (value) => {
      this.props.refetch({
        filter: value,
      });
    });
  }

  onChange(event) {
    const { value } = event.target;
    this.handleRefetch(value);
  }

  render() {
    return (
      <div className="search">
        <input placeholder="Search..." onChange={this.onChange} />
      </div>
    );
  }
}

export default Search;
