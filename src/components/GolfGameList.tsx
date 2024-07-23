import type { GolfGameArchive, GolfGameState } from "./GolfGame";
import GolfGameItem from "./elements/GolfGameItem";

export interface GolfGameListProps {
  archives: GolfGameArchive[];
}

function GolfGameList({ archives }: GolfGameListProps) {
  return (
    <ul className="my-sm flex flex-col gap-sm">
      {archives.map((archive, index) => (
        <GolfGameItem archive={archive} key={index} />
      ))}
    </ul>
  );
}

export default GolfGameList;
