import type Hole from "./Hole";

interface TableRowProps {
  hole: Hole;
  playerAmount: number;
  strokeOnHole: number[];
  addStroke: (playerId: number, holeId: number) => void;
  removeStroke: (playerId: number, holeId: number) => void;
}

export default function TableRow({
  hole,
  playerAmount,
  strokeOnHole,
  addStroke,
  removeStroke,
}: TableRowProps) {
  return (
    <tr>
      <td>{hole.getHoleNumber()}</td>

      {strokeOnHole?.map((stroke, index) => (
        <td key={index}>
          {stroke}
          <button
            onClick={() => {
              addStroke(index, hole.getHoleNumber() - 1);
            }}
          >
            +
          </button>
          <button onClick={() => removeStroke(index, hole.getHoleNumber() - 1)}>
            -
          </button>
        </td>
      ))}
    </tr>
  );
}
