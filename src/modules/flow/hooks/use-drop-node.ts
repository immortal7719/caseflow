import { useDrop } from "react-dnd";
import type { NodeItem } from "./types";
import { ItemTypes } from "./types";

export function useDropNode(
  onDrop: (
    item: NodeItem,
    clientOffset: { x: number; y: number } | null
  ) => void
) {
  const [{ isOver }, drop] = useDrop<NodeItem, void, { isOver: boolean }>({
    accept: ItemTypes.node,
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      onDrop(item, clientOffset);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return {
    drop,
    isOver,
  };
}
