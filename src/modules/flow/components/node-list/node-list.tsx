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
    <fieldset
      aria-label="Ferramentas para criar grupos de evidências"
      className="flex items-center gap-2 border-none p-0"
    >
      {nodes.map((node) => (
        <DraggableNode key={node.id} node={node} />
      ))}
    </fieldset>
  );
}
