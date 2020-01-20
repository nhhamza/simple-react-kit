import React from 'react';
import { Link } from 'react-router-dom';
import t from '../../constants/translates';

const Header = () => (
  <div>
    <ul>
      <li>
        <Link to="/">{t.header.home}</Link>
      </li>
      <li>
        <Link to="/about">{t.header.about}</Link>
      </li>
      <li>
        <Link to="/users">{t.header.users}</Link>
      </li>
    </ul>
  </div>
);

export default Header;
