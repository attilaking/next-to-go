import React from 'react';
import PropTypes from 'prop-types';

import '../style/components/loadingSpinner.scss'

const LoadingSpinner = (props) => {
    let emptyDivs = [];
    for (let i = 0; i < 9; i++) {
        emptyDivs.push(<div key={i}></div>);
    }

    return (
        <>
            <div className="loadingSpinnerCont">
                {!props.Error ?
                    <div className="loadingSpinnerCont dot-grid">
                        {emptyDivs}
                    </div>
                    :
                    <div className="loadingSpinnerCont__error">
                        {props.Error}
                    </div>
                }
            </div>
        </>
    )
}

LoadingSpinner.propTypes = {
    Error: PropTypes.string
  };

export default LoadingSpinner;
