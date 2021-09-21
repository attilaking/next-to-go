import React from 'react';
import PropTypes from 'prop-types';

import '../style/components/header.scss'

const Header = ({title}) => {
    return (
        <div className="headerCont">
            {title}
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string
  };

export default Header;