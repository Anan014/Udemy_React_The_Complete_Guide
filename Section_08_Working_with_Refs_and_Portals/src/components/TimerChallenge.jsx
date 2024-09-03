import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }

    function handelReset(){
        setTimeRemaining(targetTime * 1000)
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10)

        // setTimerStarted(true)
    }

    function handelStop() {
        clearInterval(timer.current)
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime}  remainingTime={timeRemaining} onRest={handelReset} />
            <section className="challenge">
                <h2>{title}</h2>
                {/*{timerExpired && <p>You lost</p>}*/}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handelStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'}
                        Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>)
}