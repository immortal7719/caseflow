import type { ClueItem } from "../hooks/types";

export type ReorderCluesParams = {
  fromIndex: number;
  toIndex: number;
  fromGroupId: string;
  toGroupId: string;
};

export type DropZoneParams = {
  draggedItem: ClueItem;
  insertIndex: number;
  groupId: string;
};
