import { useEffect, useReducer, useState } from "react";
import GolfGameSetup from "./GolfGameSetup";
import Hole from "./Hole";
import {
  type GolfGameState,
  golfGameReducer,
  GolfGameActionKind,
} from "./GolfGame";
import GolfGameTable from "./GolfGameTable";
import Button from "./elements/Button";
import Player from "./Player";

function GolfScoreTracker() {
  const [golfGame, dispatch] = useReducer(golfGameReducer, {
    players: [],
    holes: [],
    strokes: [],
    playerAmount: 0,
    shortGame: false,
  });
  const [setup, setSetup] = useState(true);

  function startGame() {
    if (golfGame.players.length < 1) {
      alert("Please add at least one player");
      return;
    }

    dispatch({ type: GolfGameActionKind.START_GAME, payload: {} });
    saveGame();
    setSetup(false);
  }

  function restoreGame() {
    const safeGameString = localStorage.getItem("currentGolfGame");

    if (!safeGameString) {
      alert("No game to restore");
      return;
    }

    const parsedSafeGame = JSON.parse(safeGameString);

    try {
      const players = parsedSafeGame.players.map(
        (player: any) => new Player(player.id, player.name)
      );
      const holes = parsedSafeGame.holes.map(
        (hole: any) => new Hole(hole.holeNumber, hole.par)
      );
      const strokes = parsedSafeGame.strokes;
      const playerAmount = parsedSafeGame.playerAmount;
      const shortGame = parsedSafeGame.shortGame;

      dispatch({
        type: GolfGameActionKind.LOAD_GAME,
        payload: {
          golfGame: { players, holes, strokes, playerAmount, shortGame },
        },
      });

      setSetup(false);
    } catch (e) {
      alert("Error loading game");
    }
  }

  function saveGame() {
    localStorage.setItem("currentGolfGame", JSON.stringify({ ...golfGame }));
  }

  function saveGameToArchive() {
    const archiveString = localStorage.getItem("golfGameArchive");

    const archive = JSON.parse(archiveString || "[]");
    console.log("archive", archive);

    const newArchive = [{ game: golfGame, date: new Date().toLocaleString() }];

    console.log("Check same game:");

    if (
      archive.length !== 0 &&
      JSON.stringify(archive[0].game) === JSON.stringify(golfGame)
    ) {
      console.log("Same game. Won't be saved");
    } else {
      console.log(newArchive);
      archive ? newArchive.push(...archive) : null;
      localStorage.setItem("golfGameArchive", JSON.stringify(newArchive));
    }

    setSetup(true);
  }

  return (
    <div>
      {setup && (
        <>
          <GolfGameSetup
            shortGame={golfGame.shortGame}
            setShortGame={(shortGame: boolean) =>
              dispatch({
                type: GolfGameActionKind.SET_SHORT_GAME,
                payload: { shortGame: shortGame },
              })
            }
            playerAmount={golfGame.playerAmount}
            players={golfGame.players}
            setPlayerName={(playerName: string, playerId: number) =>
              dispatch({
                type: GolfGameActionKind.SET_PLAYER_NAME,
                payload: { playerName: playerName, playerId: playerId },
              })
            }
            removePlayer={(playerId: number) =>
              dispatch({
                type: GolfGameActionKind.REMOVE_PLAYER,
                payload: { playerId: playerId },
              })
            }
            addPlayer={() =>
              dispatch({
                type: GolfGameActionKind.ADD_PLAYER,
                payload: { playerName: "Player" },
              })
            }
            start={() => startGame()}
          />
          <Button onClick={restoreGame}>Letztes Spiel Laden</Button>
        </>
      )}
      {!setup && (
        <>
          <GolfGameTable
            golfGame={golfGame}
            addStroke={(playerId, holeId) => {
              dispatch({
                type: GolfGameActionKind.ADD_STROKE,
                payload: { playerId: playerId, holeId: holeId },
              });
            }}
            removeStroke={(playerId, holeId) => {
              dispatch({
                type: GolfGameActionKind.REMOVE_STROKE,
                payload: { playerId: playerId, holeId: holeId },
              });
            }}
            saveGame={saveGame}
          />
          <Button onClick={saveGameToArchive}>Speichern</Button>
        </>
      )}
    </div>
  );
}

export default GolfScoreTracker;
