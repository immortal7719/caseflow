import { useDrag } from "react-dnd";
import type { ClueItem, DragCollectedProps } from "./types";
import { ItemTypes } from "./types";

export function useDragClue(item: ClueItem) {
  const [{ isDragging }, drag, preview] = useDrag<
    ClueItem,
    void,
    DragCollectedProps
  >({
    item,
    type: ItemTypes.clue,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return {
    drag,
    preview,
    isDragging,
  };
}
