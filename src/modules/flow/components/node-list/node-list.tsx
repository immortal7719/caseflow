import { Group } from "lucide-react";
import { DraggableNode } from "./fragments";
import type { NodeItem } from "./types";

const nodes: NodeItem[] = [
  {
    id: 1,
    icon: Group,
    type: "evidence",
    value: "evidence",
    label: "Grupo de Evidências",
  },
];

export function NodeList() {
  return (
    <div className="flex items-center gap-2">
      {nodes.map((node) => (
        <DraggableNode key={node.id} node={node} />
      ))}
    </div>
  );
}
