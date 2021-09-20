import React from 'react';
import '../style/components/header.scss'

const Header = (props) => {
    return (
        <div className="headerCont">
            {props.Title}
        </div>
    )
}

export default Header;
