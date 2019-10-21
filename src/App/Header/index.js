import React from 'react';
import List from '@material-ui/icons/ListAlt';
import './Header.css';

const Header = () =>
  <div className="Header">
      <div className="Title">
        <List className="Logo" fontSize="large"/>
        <h3>TO DO LIST</h3>
      </div>
  </div>;

export default Header;