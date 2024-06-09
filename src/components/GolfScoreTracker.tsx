import { useReducer, useState } from "react";
import GolfGameSetup from "./GolfGameSetup";
import Hole from "./Hole";
import {
  type GolfGameState,
  golfGameReducer,
  GolfGameActionKind,
} from "./GolfGame";
import GolfGameTable from "./GolfGameTable";

const MAX_PLAYERS = 10;

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

    setSetup(false);
  }

  return (
    <div>
      {setup && (
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
      )}
      {!setup && (
        <GolfGameTable
          golfGame={golfGame}
          addStroke={(playerId, holeId) => {
            console.log(playerId, holeId);
            dispatch({
              type: GolfGameActionKind.ADD_STROKE,
              payload: { playerId: playerId, holeId: holeId },
            });
          }}
          removeStroke={(playerId, holeId) =>
            dispatch({
              type: GolfGameActionKind.REMOVE_STROKE,
              payload: { playerId: playerId, holeId: holeId },
            })
          }
        />
      )}
      {/* <button
          onClick={() => {
            restoreGame();
          }}
        >
          restore
        </button> */}
    </div>
  );
}

export default GolfScoreTracker;
