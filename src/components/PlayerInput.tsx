import { useEffect, useState } from "react";
import Button from "./elements/Button";

interface PlayerInputProps {
  name: string;
  setName: (name: string, id: number) => void;
  id: number;
  removePlayer: (id: number) => void;
}

function PlayerInput({ name, setName, id, removePlayer }: PlayerInputProps) {
  return (
    <div>
      <input
        type="text"
        placeholder={"Name"}
        value={name}
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value, id);
        }}
      />

      <Button onClick={() => removePlayer(id)}>-</Button>
    </div>
  );
}

export default PlayerInput;
