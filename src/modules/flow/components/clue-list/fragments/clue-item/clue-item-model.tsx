import { useRef } from "react";
import type { ClueItem } from "@/modules/flow/hooks/types";
import { useDragClue } from "@/modules/flow/hooks/use-drag-clue";
import { useDropClue } from "@/modules/flow/hooks/use-drop-clue";
import type { Clue } from "@/modules/flow/types/clue";

type ClueItemModelProps = {
  clue: Clue;
  index: number;
  groupId: string;
  isPreview?: boolean;
  onDrop: (draggedItem: ClueItem, targetItem: ClueItem) => void;
};

export function useClueItemModel({
  clue,
  index,
  onDrop,
  groupId,
  isPreview,
}: ClueItemModelProps) {
  const ref = useRef<HTMLDivElement>(null);

  const dragItem: ClueItem = {
    index,
    groupId,
    id: clue.id,
    clue,
  };

  const { isDragging, drag } = useDragClue(dragItem);
  const { isOver, canDrop, drop } = useDropClue(onDrop, dragItem);

  drag(drop(ref));

  const isDropTarget = isOver && canDrop;
  const isBeingDragged = isDragging;

  return {
    ref,
    clue,
    groupId,
    isPreview,
    isDropTarget,
    isBeingDragged,
  };
}
