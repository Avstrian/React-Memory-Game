import React from "react";
import './Scoreboard.css';

const Scoreboard = (props) => {

    return (
        <div className="score-container">
            <h2>Score: {props.score.currentScore}</h2>
            <h2>High Score: {props.score.highScore}</h2>
        </div>
    )
}


export default Scoreboard;