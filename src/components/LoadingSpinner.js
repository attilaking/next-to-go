import React from 'react';
import PropTypes from 'prop-types';
import '../style/components/loadingSpinner.scss'

const LoadingSpinner = (props) => {
    return (
        <>
            <div className="loadingSpinnerCont">
                {!props.Error ?
                    <div className="loadingSpinnerCont dot-grid">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
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
    Error: PropTypes.string,
    Backdrp: PropTypes.bool
  };

export default LoadingSpinner;
