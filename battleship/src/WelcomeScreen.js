import React from 'react';

export const WelcomeScreen = ({ startPlay }) => {
  return (
    <main>
      <h2 className="tip-box-title">Rules</h2>
      <p className="player-tip">
        Your fleets are positioned at secret coordinates and you take turns firing torpedoes at each other. 
        The first to sink the opponnet whole fleet wins!

        Who will be the best??
      </p>

     
      <button onClick={startPlay}>Play</button>
    </main>
  );
};