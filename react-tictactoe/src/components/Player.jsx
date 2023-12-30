import { useState, useRef, isValidElement } from "react";
export default function Player({ playerSymbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState("");

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleInputKeyDown(event) {
    if (event.key === "Enter") {
      setIsEditing(false);
      setPlayerName(event.target.value);
    }
  }

  function handleInputBlur(event) {
    if (event.relatedTarget?.id === "edit-button") return;

    if (isEditing) {
      setIsEditing(false);
      setPlayerName(event.target.value);
    }
  }

  function handleInputOnChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameElement = isEditing ? (
    <input
      autoFocus
      type="text"
      value={playerName}
      onKeyDown={handleInputKeyDown}
      onBlur={handleInputBlur}
      onChange={handleInputOnChange}
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameElement}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button id="edit-button" onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
