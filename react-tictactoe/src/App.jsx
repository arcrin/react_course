import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* player area */}
          <Player
            playerName="Player 1"
            playerSymbol="X"
            isActive={activePlayer === "X" ? true : false}
          />
          <Player
            playerName="Player 2"
            playerSymbol="O"
            isActive={activePlayer === "O" ? true : false}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
