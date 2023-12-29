import Player from "./components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* player area */}
          <Player playerName="Player 1" playerSymbol="X"/>
          <Player playerName="Player 2" playerSymbol="O"/>
        </ol>
        Game board
      </div>
    </main>
  )
}

export default App
