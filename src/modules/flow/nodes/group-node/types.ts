import type { Node } from "@xyflow/react";
import type { Clue } from "../../types/clue";

export type GroupNodeData = {
  title: string;
  clues: Clue[];
};

export type GroupNodeType = Node<GroupNodeData, "group">;
