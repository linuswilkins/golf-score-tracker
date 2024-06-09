import { useState } from "react";
import type { GolfGameState } from "./GolfGame";
import TableRow from "./TableRow";
import HoleModal from "./HoleModal";

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

  const [holeSelected, setHoleSelected] = useState<number>(0);

  return (
    <>
      {holeSelected !== 0 && (
        <div className="fixed inset-none flex justify-center z-10">
          <HoleModal
            hole={golfGame.holes[holeSelected - 1]}
            players={golfGame.players}
            strokeOnHole={golfGame.strokes[holeSelected - 1]}
            addStroke={addStroke}
            removeStroke={removeStroke}
            setHoleSelected={setHoleSelected}
          />
        </div>
      )}
      <div className={holeSelected ? "blur" : ""}>
        <div className="flex items-center justify-center bg-eerie_black-300">
          <table className="min-w-full bg-eerie_black-300 border-2 border-platinum">
            <thead className="border-b">
              <tr>
                <th className="border-r p-xs">Loch</th>
                {golfGame.players.map((player) => (
                  <th className="border" key={player.getId()}>
                    {player.getName()}
                  </th>
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
                  setHoleSelected={setHoleSelected}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
