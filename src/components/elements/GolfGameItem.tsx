import type { GolfGameArchive, GolfGameState } from "../GolfGame";
import Player from "../Player";

export interface GolfGameItemProps {
  archive: GolfGameArchive;
}

function GolfGameItem({ archive }: GolfGameItemProps) {
  return (
    <div className="bg-asparagus rounded-md p-sm">
      Datum: {archive.date.toString()}
      <br />
      Spieler:{" "}
      {archive.game.players.map((player, index) => (
        <span key={index}>{player.getName() + " "}</span>
      ))}
    </div>
  );
}

export default GolfGameItem;
