import React, { Component, PropTypes } from 'react';
import '../scss/header.scss';
import { Link } from 'react-router';
import FetchingProgress from '../containers/FetchingProgress';
import MenuBar from '../containers/MenuBar';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <header className="header">
        <FetchingProgress />
        <MenuBar user={this.props.user} />
      </header>
    );
  }
}

Header.PropTypes = {
  user: PropTypes.object
};
export default Header;
