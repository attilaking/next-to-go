import React from 'react';
import PropTypes from 'prop-types';
import '../style/components/header.scss'

const Header = (props) => {
    return (
        <div className="headerCont">
            {props.Title}
        </div>
    )
}

Header.propTypes = {
    Title: PropTypes.string
  };

export default Header;
