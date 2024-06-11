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
    <div className="bg-eerie_black rounded-t-xl absolute bottom-none h-fit w-full z-30 py-md">
      <h1 className="text-2xl text-center">Loch {hole.getHoleNumber()}</h1>
      <div className="flex justify-center mt-md overflow-auto custom-scrollbar">
        <table className="">
          <thead>
            <tr className="">
              {players.map((player, index) => {
                let className = "p-sm bg-eerie_black-400 ";
                if (index === 0) {
                  className += " rounded-tl-xl";
                }
                if (index === players.length - 1) {
                  className += " rounded-tr-xl";
                }

                return (
                  <th className={className}>
                    <p className="truncate overflow-hidden w-3xl">
                      {player.getName()}
                    </p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr className="">
              {players.map((_, index) => (
                <td className="p-sm border-eerie_black bg-eerie_black-400 pb-md">
                  <div className="flex flex-col">
                    <Button
                      onClick={() => {
                        addStroke(index, hole.getHoleNumber() - 1);
                      }}
                    >
                      +
                    </Button>
                    <span className="text-center py-sm">
                      {strokeOnHole[index]}
                    </span>

                    <Button
                      styling="bg-vermilion"
                      onClick={() =>
                        removeStroke(index, hole.getHoleNumber() - 1)
                      }
                    >
                      -
                    </Button>
                  </div>
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
