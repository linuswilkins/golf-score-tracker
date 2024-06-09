import { useEffect, useRef, useState } from "react";
import PlayerInput from "./PlayerInput";
import Player from "./Player";
import Button from "./elements/Button";

interface GolfGameSetupProps {
  shortGame: boolean;
  setShortGame: (shortGame: boolean) => void;
  playerAmount: number;
  players: Player[];
  setPlayerName: (name: string, id: number) => void;
  removePlayer: (id: number) => void;
  addPlayer: () => void;
  start: () => void;
}

function GolfGameSetup({
  shortGame,
  setShortGame,
  playerAmount,
  players,
  setPlayerName,
  removePlayer,
  addPlayer,
  start,
}: GolfGameSetupProps) {
  var playerInputs = players.map((player) => (
    <PlayerInput
      key={player.getId()}
      name={player.getName()}
      setName={setPlayerName}
      id={player.getId()}
      removePlayer={removePlayer}
    />
  ));

  function submitSetup() {
    start();
  }

  useEffect(() => {
    playerInputs = players.map((player) => (
      <PlayerInput
        key={player.getId()}
        name={player.getName()}
        setName={setPlayerName}
        id={player.getId()}
        removePlayer={removePlayer}
      />
    ));
  }, [players]);

  return (
    <div>
      <h2 className="text-lg">Einstellungen</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>Spieleranzahl {playerAmount}</p>

        <label htmlFor="shortGame">9 Loch</label>

        <input
          type="checkbox"
          name="shortGame"
          id="shortGame"
          value={shortGame.toString()}
          onChange={() => {
            setShortGame(!shortGame);
          }}
        />

        {playerInputs}

        <br />

        <Button onClick={addPlayer}>+</Button>
        <br />
        <Button onClick={submitSetup}>Start</Button>
      </form>
    </div>
  );
}

export default GolfGameSetup;
