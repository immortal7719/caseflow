import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
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

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return {
    drag,
    preview,
    isDragging,
  };
}
