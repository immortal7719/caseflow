export const ItemTypes = {
  clue: "clue",
  node: "node",
} as const;

export type ClueItem = {
  id: string;
  index: number;
  groupId: string;
  clue?: import("../types/clue").Clue;
};

export type NodeItem = {
  type: string;
  label: string;
};

export type DragCollectedProps = {
  isDragging: boolean;
};

export type DropCollectedProps = {
  isOver: boolean;
  canDrop: boolean;
};
