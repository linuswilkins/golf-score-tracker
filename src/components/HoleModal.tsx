import { useEffect } from "react";
import type Hole from "./Hole";
import type Player from "./Player";
import Button from "./elements/Button";

export interface HoleModalProps {
  hole: Hole;
  players: Player[];
  strokeOnHole: number[];
  addStroke: (playerId: number, holeId: number) => void;
  removeStroke: (playerId: number, holeId: number) => void;
  setHoleSelected: (selected: number) => void;
}

export default function HoleModal({
  hole,
  players,
  strokeOnHole,
  addStroke,
  removeStroke,
  setHoleSelected,
}: HoleModalProps) {
  useEffect(() => {
    console.log(strokeOnHole);
  }, []);
  return (
    <div className="bg-eerie_black-400 rounded-t-xl absolute bottom-none h-fit w-full z-30 p-md">
      <h1 className="text-xl text-center">Loch {hole.getHoleNumber()}</h1>
      <div className="flex justify-center my-md">
        <table className="">
          <thead>
            <tr>
              {players.map((player) => (
                <th className="p-sm border">{player.getName()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {players.map((_, index) => (
                <td className="p-sm border">
                  <button
                    onClick={() => {
                      addStroke(index, hole.getHoleNumber() - 1);
                    }}
                  >
                    +
                  </button>
                  {strokeOnHole[index]}
                  <button
                    onClick={() =>
                      removeStroke(index, hole.getHoleNumber() - 1)
                    }
                  >
                    -
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="-mb-md -mx-md">
        <button
          onClick={() => setHoleSelected(0)}
          className="bg-asparagus  p-md w-full rounded-t-xl"
        >
          Schließen
        </button>
      </div>
    </div>
  );
}
