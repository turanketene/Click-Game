import React from "react";

const Score = props => (
    <div>
        <h3>
            <strong className= "instruction">Click on a different image every time to earn points, game is over when you click on the same image twice!</strong>
            <p className = "score"><strong>Score: {props.score} | TopScore: {props.topscore}</strong></p>
            <p className = "message"><strong>{props.message}</strong></p>
        </h3>
    </div>
);

export default Score;