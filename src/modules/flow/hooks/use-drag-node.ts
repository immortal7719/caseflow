import { useDrag } from "react-dnd";
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

  return {
    drag,
    preview,
    isDragging,
  };
}
