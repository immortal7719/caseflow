import { useDrop } from "react-dnd";
import type { DropZoneParams } from "../types/reorder";
import type { ClueItem, DropCollectedProps } from "./types";
import { ItemTypes } from "./types";

export function useDropZone(
  onDrop: (params: DropZoneParams) => void,
  insertIndex: number,
  groupId: string
) {
  const [{ isOver, canDrop }, drop] = useDrop<
    ClueItem,
    void,
    DropCollectedProps
  >({
    accept: ItemTypes.clue,
    drop: (draggedItem) => {
      onDrop({ draggedItem, insertIndex, groupId });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
    }),
  });

  return {
    drop,
    isOver,
    canDrop,
  };
}
