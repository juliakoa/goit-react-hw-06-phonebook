import React, { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Search contacts..."
        value={this.props.filter}
        onChange={this.props.handleFilterChange}
        className={css.filter}
      />
    );
  }
}

export default Filter;
