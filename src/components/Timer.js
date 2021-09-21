import React, { useEffect, useState } from 'react';

const Timer = (props) => {

    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        let timer = setInterval(() => {
            let now = Math.round(new Date().getTime() / 1000);
            setTimeLeft(props.Config.startTime - now);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(()=> {
        if (timeLeft && timeLeft <= -props.Config.removeTime){
            props.OnTimeElapsed(props.Config.itemId);
        }
    },[timeLeft])

    return (
        <div>
            {timeLeft ? timeLeft <= 0 ? `${timeLeft}s` : new Date(timeLeft * 1000).toISOString().substr(11, 8) : "-"}
        </div>
    )
}

export default Timer;
