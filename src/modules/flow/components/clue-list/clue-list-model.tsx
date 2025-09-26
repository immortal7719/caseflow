import { useCallback, useRef } from "react";
import type { ClueItem as ClueItemType } from "../../hooks/types";
import { useDropZone } from "../../hooks/use-drop-zone";
import type { ReorderCluesParams } from "../../types/reorder";

type UseClueListModel = {
  onReorderClues: (params: ReorderCluesParams) => void;
  groupId: string;
};

type HandlePlaceholderDropParams = {
  groupId: string;
  insertIndex: number;
  draggedItem: ClueItemType;
};

export function useClueListModel({
  groupId,
  onReorderClues,
}: UseClueListModel) {
  const emptyAreaRef = useRef<HTMLDivElement>(null);

  const handleItemDrop = useCallback(
    (draggedItem: ClueItemType, targetItem: ClueItemType) => {
      if (draggedItem.id === targetItem.id) {
        return;
      }

      onReorderClues({
        fromIndex: draggedItem.index,
        toIndex: targetItem.index,
        fromGroupId: draggedItem.groupId,
        toGroupId: targetItem.groupId,
      });
    },
    [onReorderClues]
  );

  const handlePlaceholderDrop = useCallback(
    ({
      draggedItem,
      insertIndex,
      groupId: targetGroupId,
    }: HandlePlaceholderDropParams) => {
      onReorderClues({
        fromIndex: draggedItem.index,
        toIndex: insertIndex,
        fromGroupId: draggedItem.groupId,
        toGroupId: targetGroupId,
      });
    },
    [onReorderClues]
  );

  const { isOver, canDrop, drop } = useDropZone(
    handlePlaceholderDrop,
    0,
    groupId
  );

  drop(emptyAreaRef);

  const isEmptyAreaActive = isOver && canDrop;

  return {
    emptyAreaRef,
    handleItemDrop,
    isEmptyAreaActive,
    handlePlaceholderDrop,
  };
}
