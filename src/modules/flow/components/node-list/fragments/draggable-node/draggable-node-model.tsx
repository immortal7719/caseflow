import { useEffect, useRef } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useDragNode } from "../../../../hooks/use-drag-node";
import type { NodeItem } from "../../types";

type DraggableNodeModelProps = {
  node: NodeItem;
};

export function useDraggableNodeModel({ node }: DraggableNodeModelProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { drag, preview, isDragging } = useDragNode({
    type: node.type,
    label: node.label,
  });

  drag(ref);

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return {
    ref,
    node,
    isDragging,
  };
}
