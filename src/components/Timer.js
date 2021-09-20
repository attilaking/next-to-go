import React, { useEffect, useState } from 'react';
import '../style/components/header.scss'

const Timer = (props) => {

    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        setInterval(() => {
            let now = Math.round(new Date().getTime() / 1000);
            setTimeLeft(props.StartTime - now);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            {new Date(timeLeft * 1000).toISOString().substr(14, 5)}
        </div>
    )
}

export default Timer;
