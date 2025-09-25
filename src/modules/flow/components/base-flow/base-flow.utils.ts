import type { Node } from "@xyflow/react";
import type { GroupNodeData } from "../../nodes/group-node/types";
import type { Clue } from "../../types/clue";

export type NodeValidationParams = {
  nodes: Node[];
  fromGroupId: string;
  toGroupId: string;
  fromIndex: number;
};

export type NodeValidationResult = {
  isValid: boolean;
  fromNode?: Node;
  toNode?: Node;
  fromNodeIndex?: number;
  toNodeIndex?: number;
  fromNodeData?: GroupNodeData;
  toNodeData?: GroupNodeData;
};

export type ClueReorderContext = {
  nodes: Node[];
  fromIndex: number;
  toIndex: number;
  fromGroupId: string;
  toGroupId: string;
  movedClue: Clue;
};

export function validateNodesAndClues({
  nodes,
  toGroupId,
  fromIndex,
  fromGroupId,
}: NodeValidationParams): NodeValidationResult {
  const fromNodeIndex = nodes.findIndex((node) => node.id === fromGroupId);
  const toNodeIndex = nodes.findIndex((node) => node.id === toGroupId);

  const nodeNotFound = fromNodeIndex === -1 || toNodeIndex === -1;
  if (nodeNotFound) {
    return { isValid: false };
  }

  const fromNode = nodes[fromNodeIndex];
  const toNode = nodes[toNodeIndex];
  const fromNodeData = fromNode.data as GroupNodeData;
  const toNodeData = toNode.data as GroupNodeData;

  const isInvalidClueIndex =
    !fromNodeData.clues || fromIndex >= fromNodeData.clues.length;
  if (isInvalidClueIndex) {
    return { isValid: false };
  }

  return {
    toNode,
    fromNode,
    toNodeData,
    toNodeIndex,
    fromNodeData,
    isValid: true,
    fromNodeIndex,
  };
}

export function reorderCluesWithinSameGroup(
  context: ClueReorderContext,
  validation: NodeValidationResult
): Node[] {
  const { nodes, fromIndex, toIndex } = context;
  const { fromNode, fromNodeIndex, fromNodeData } = validation;

  const isInvalidFromNode =
    !fromNode || fromNodeIndex === undefined || !fromNodeData;

  if (isInvalidFromNode) {
    return nodes;
  }

  const updatedNodes = [...nodes];
  const reorderedClues = [...fromNodeData.clues];
  reorderedClues.splice(fromIndex, 1);
  reorderedClues.splice(toIndex, 0, context.movedClue);

  updatedNodes[fromNodeIndex] = {
    ...fromNode,
    data: {
      ...fromNodeData,
      clues: reorderedClues,
    },
  };

  return updatedNodes;
}

export function moveCluesBetweenGroups(
  context: ClueReorderContext,
  validation: NodeValidationResult
): Node[] {
  const { nodes, fromIndex, toIndex } = context;

  const {
    toNode,
    fromNode,
    toNodeData,
    toNodeIndex,
    fromNodeData,
    fromNodeIndex,
  } = validation;

  const canProceedWithUpdate =
    toNode &&
    fromNode &&
    toNodeData &&
    fromNodeData &&
    toNodeIndex !== undefined &&
    fromNodeIndex !== undefined;

  if (!canProceedWithUpdate) {
    return nodes;
  }

  const updatedNodes = [...nodes];

  const fromClues = [...fromNodeData.clues];
  fromClues.splice(fromIndex, 1);

  updatedNodes[fromNodeIndex] = {
    ...fromNode,
    data: {
      ...fromNodeData,
      clues: fromClues,
    },
  };

  const toClues = [...(toNodeData.clues || [])];
  toClues.splice(toIndex, 0, context.movedClue);

  updatedNodes[toNodeIndex] = {
    ...toNode,
    data: {
      ...toNodeData,
      clues: toClues,
    },
  };

  return updatedNodes;
}
