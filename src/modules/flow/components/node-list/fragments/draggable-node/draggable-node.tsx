import { useDraggableNodeModel } from "./draggable-node-model";
import { DraggableNodeView } from "./draggable-node-view";

type DraggableNodeProps = Parameters<typeof useDraggableNodeModel>[0];

export function DraggableNode(props: DraggableNodeProps) {
  return <DraggableNodeView {...useDraggableNodeModel(props)} />;
}
