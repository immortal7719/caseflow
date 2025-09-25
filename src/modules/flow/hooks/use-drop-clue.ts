import { useDrop } from "react-dnd";
import type { ClueItem, DropCollectedProps } from "./types";
import { ItemTypes } from "./types";

export function useDropClue(
  onDrop: (draggedItem: ClueItem, dropTargetItem: ClueItem) => void,
  targetItem: ClueItem
) {
  const [{ isOver, canDrop }, drop] = useDrop<
    ClueItem,
    void,
    DropCollectedProps
  >({
    accept: ItemTypes.clue,
    drop: (draggedItem) => {
      if (draggedItem.id !== targetItem.id) {
        onDrop(draggedItem, targetItem);
      }
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
