import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import type { DragCollectedProps, NodeItem } from "./types";
import { ItemTypes } from "./types";

export function useDragNode(item: NodeItem) {
  const [{ isDragging }, drag, preview] = useDrag<
    NodeItem,
    void,
    DragCollectedProps
  >({
    item,
    type: ItemTypes.node,
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
