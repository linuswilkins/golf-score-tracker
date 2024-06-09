import Hole from "./Hole";
import Player from "./Player";

export interface GolfGameState {
  players: Player[];
  holes: Hole[];
  strokes: number[][];
  playerAmount: number;
  shortGame: boolean;
}

export enum GolfGameActionKind {
  ADD_PLAYER,
  REMOVE_PLAYER,
  SET_PLAYER_NAME,
  ADD_STROKE,
  REMOVE_STROKE,
  SET_SHORT_GAME,
  START_GAME,
}

export interface GolfGameAction {
  type: GolfGameActionKind;
  payload: {
    player?: Player;
    playerName?: string;
    playerId?: number;
    shortGame?: boolean;
    holeId?: number;
  };
}

function cleanUpPlayerIds(players: Player[]): Player[] {
  const newPlayers = players.map((player, index) => {
    player.setId(index);
    return player; // Return the updated player object
  });
  return newPlayers;
}

function cleanUpStrokes(strokes: number[][], playerAmount: number) {
  return strokes.filter((_, index) => index < playerAmount);
}

export function golfGameReducer(
  state: GolfGameState,
  action: GolfGameAction
): GolfGameState {
  const { type, payload } = action;

  switch (type) {
    case GolfGameActionKind.ADD_PLAYER:
      if (payload.playerName !== undefined) {
        return {
          ...state,
          players: [
            ...state.players,
            new Player(state.playerAmount, payload.playerName),
          ],
          playerAmount: state.playerAmount + 1,
          strokes: state.strokes.map((stroke) => [...stroke, 0]),
        };
      }
    case GolfGameActionKind.REMOVE_PLAYER:
      if (payload.playerId !== undefined) {
        const players = state.players.filter(
          (player) => player.getId() !== payload.playerId
        );

        return {
          ...state,
          players: cleanUpPlayerIds(players),
          playerAmount: state.playerAmount - 1,
          strokes: cleanUpStrokes(state.strokes, state.playerAmount),
        };
      }
    case GolfGameActionKind.SET_PLAYER_NAME:
      if (payload.playerName !== undefined && payload.playerId !== undefined) {
        const players = state.players.map((player) => {
          if (player.getId() === payload.playerId) {
            player.setName(payload.playerName!);
          }
          return player;
        });

        return {
          ...state,
          players,
        };
      }
    case GolfGameActionKind.ADD_STROKE:
      if (payload.playerId !== undefined && payload.holeId !== undefined) {
        const newStrokes = state.strokes;
        newStrokes[payload.holeId][payload.playerId]++;

        return {
          ...state,
          strokes: newStrokes,
        };
      }
    case GolfGameActionKind.REMOVE_STROKE:
      if (payload.playerId !== undefined && payload.holeId !== undefined) {
        const newStrokes = state.strokes;
        if (newStrokes[payload.holeId][payload.playerId] > 0) {
          newStrokes[payload.holeId][payload.playerId]--;

          return {
            ...state,
            strokes: newStrokes,
          };
        }
      }
    case GolfGameActionKind.SET_SHORT_GAME:
      if (payload.shortGame !== undefined) {
        return {
          ...state,
          shortGame: payload.shortGame,
        };
      }
    case GolfGameActionKind.START_GAME:
      const newHoles: Hole[] = [];
      const newStrokes: number[][] = [];

      if (state.shortGame) {
        for (let i = 1; i <= 9; i++) {
          newHoles.push(new Hole(i));
          newStrokes.push(new Array(state.playerAmount).fill(0));
        }
      } else {
        for (let i = 1; i <= 18; i++) {
          newHoles.push(new Hole(i));
          newStrokes.push(new Array(state.playerAmount).fill(0));
        }
      }
      return {
        ...state,
        holes: newHoles,
        strokes: newStrokes,
      };

    default:
      console.log("Invalid action type");
      return state;
  }
}
