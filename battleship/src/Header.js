import React from 'react';

export const Header = () => {
  return (
    <header>
      <h1> Battleships Game</h1>

      <p className="subtitle"> A strategy game </p>
      <span role="img" aria-label="anchor">
        ⚓️🚢🚢 🚀🚀🚀 🚢🚢⚓️
      </span>
    </header>
  );
};