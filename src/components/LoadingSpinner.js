import React from 'react';
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

export default LoadingSpinner;
