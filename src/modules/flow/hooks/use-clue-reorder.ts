import { useContext } from "react";
import { ClueReorderContext } from "../contexts/clue-reorder-context";

export function useClueReorder() {
  const context = useContext(ClueReorderContext);

  if (!context) {
    throw new Error("useClueReorder must be used within a ClueReorderProvider");
  }

  return context;
}
