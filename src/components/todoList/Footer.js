import React, { PropTypes } from 'react';
import CYComponent from '../base/index';

class Footer extends CYComponent {
  constructor(props) {
    super(props);
    this.autoBind('renderFilter');
  }
  renderFilter(filter, name){
    if(filter === this.props.filter) {
      return name;
    }
    return (
      <a href='#' onClick={e => {
        e.preventDefault();
        this.props.onFilterChange(filter)
      }}>
        {name}
      </a>
    )
  }

  render() {
    return(
      <p>
        Show: {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {','}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {','}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
      </p>
    );
  }
}

export default Footer;
