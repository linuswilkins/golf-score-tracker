import type { GolfGameState } from "./GolfGame";
import TableRow from "./TableRow";

export interface GolfGameProps {
  golfGame: GolfGameState;
  addStroke: (playerId: number, holeId: number) => void;
  removeStroke: (playerId: number, holeId: number) => void;
}

export default function GolfGameTable({
  golfGame,
  addStroke,
  removeStroke,
}: GolfGameProps) {
  console.log(golfGame);

  return (
    <table>
      <thead>
        <tr>
          <th>Loch</th>
          {golfGame.players.map((player) => (
            <th key={player.getId()}>{player.getName()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {golfGame.holes.map((hole, index) => (
          <TableRow
            key={index}
            hole={hole}
            playerAmount={golfGame.playerAmount}
            strokeOnHole={golfGame.strokes[index]}
            addStroke={addStroke}
            removeStroke={removeStroke}
          />
        ))}
      </tbody>
    </table>
  );
}
