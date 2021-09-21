import React from 'react';
import PropTypes from 'prop-types';

import '../style/components/loadingSpinner.scss'

const LoadingSpinner = ({error}) => {
    let emptyDivs = [];
    for (let i = 0; i < 9; i++) {
        emptyDivs.push(<div key={i}></div>);
    }

    return (
        <>
            <div className="loadingSpinnerCont">
                {!error ?
                    <div className="loadingSpinnerCont dot-grid">
                        {emptyDivs}
                    </div>
                    :
                    <div className="loadingSpinnerCont__error">
                        {error}
                    </div>
                }
            </div>
        </>
    )
}

LoadingSpinner.propTypes = {
    error: PropTypes.string
  };

export default LoadingSpinner;
