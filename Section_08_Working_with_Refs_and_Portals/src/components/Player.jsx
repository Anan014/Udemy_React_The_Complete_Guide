import {useRef, useState} from "react";

export default function Player() {
    const playerName = useRef()
    const [enteredPlayerName, setEnteredPlayerName] = useState('')

    function handelClick() {
        setEnteredPlayerName(playerName.current.value);
        playerName.current.value = ''
    }

    return (
        <section id="player">
            <h2>Welcome {enteredPlayerName ?? 'unknown entity'} entity</h2>
            <p>
                <input ref={playerName} type="text"/>
                <button onClick={handelClick}>Set Name</button>
            </p>
        </section>
    );
}
