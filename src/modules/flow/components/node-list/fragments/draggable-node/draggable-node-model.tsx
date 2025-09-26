import { useRef } from "react";
import { useDragNode } from "../../../../hooks/use-drag-node";
import type { NodeItem } from "../../types";

type DraggableNodeModelProps = {
  node: NodeItem;
};

export function useDraggableNodeModel({ node }: DraggableNodeModelProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { drag, isDragging } = useDragNode({
    type: node.type,
    label: node.label,
  });

  drag(ref);

  return {
    ref,
    node,
    isDragging,
  };
}
