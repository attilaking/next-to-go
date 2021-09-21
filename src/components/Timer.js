import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Timer = ({onTimeElapsed, config}) => {

    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        let timer = setInterval(() => {
            let now = Math.round(new Date().getTime() / 1000);
            setTimeLeft(config.startTime - now);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (timeLeft && timeLeft <= -config.removeTime) {
            onTimeElapsed(config.itemId);
        }
    }, [timeLeft])

    return (
        <>
            {timeLeft ?
                timeLeft <= 0 ? <span style={{'color': 'red'}}>{`${timeLeft}s`}</span> :
                    new Date(timeLeft * 1000).toISOString().substr(11, 8) : '-'}
        </>
    )
}

Timer.propTypes = {
    onTimeElapsed: PropTypes.func,
    config: PropTypes.object
};

export default Timer;
