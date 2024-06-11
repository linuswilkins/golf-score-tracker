import { useState } from "react";
import type Hole from "./Hole";
import Button from "./elements/Button";

interface TableRowProps {
  hole: Hole;
  playerAmount: number;
  strokeOnHole: number[];
  addStroke: (playerId: number, holeId: number) => void;
  removeStroke: (playerId: number, holeId: number) => void;
  setHoleSelected: (selected: number) => void;
}

export default function TableRow({
  hole,
  playerAmount,
  strokeOnHole,
  addStroke,
  removeStroke,
  setHoleSelected,
}: TableRowProps) {
  return (
    <tr onClick={() => setHoleSelected(hole.getHoleNumber())}>
      <td className="p-xs border-b border-r border-platinum text-center">
        {hole.getHoleNumber()}
      </td>

      {strokeOnHole?.map((stroke, index) => (
        <td
          className="py-sm px-md border border-platinum text-center"
          key={index}
        >
          {stroke}
        </td>
      ))}

      {/* <tr>
        <td className="p-xs border-b border-r border-platinum text-center">
          {hole.getHoleNumber()}
        </td>
      
        {strokeOnHole?.map((stroke, index) => (
          <td className="py-sm px-md border-b border-platinum" key={index}>
            <div className="flex">
              {stroke}
              <Button
                onClick={() => {
                  addStroke(index, hole.getHoleNumber() - 1);
                }}
              >
                +
              </Button>
              <Button
                onClick={() => removeStroke(index, hole.getHoleNumber() - 1)}
              >
                -
              </Button>
            </div>
          </td>
        ))}
      </tr> */}
    </tr>
  );
}
