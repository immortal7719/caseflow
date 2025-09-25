import type { ClueItem as ClueItemType } from "../../hooks/types";
import type { ReorderCluesParams } from "../../types/reorder";

type UseClueListModel = {
  onReorderClues: (params: ReorderCluesParams) => void;
};

type HandlePlaceholderDropParams = {
  groupId: string;
  insertIndex: number;
  draggedItem: ClueItemType;
};

export function useClueListModel({ onReorderClues }: UseClueListModel) {
  const handleItemDrop = (
    draggedItem: ClueItemType,
    targetItem: ClueItemType
  ) => {
    if (draggedItem.id === targetItem.id) {
      return;
    }

    onReorderClues({
      fromIndex: draggedItem.index,
      toIndex: targetItem.index,
      fromGroupId: draggedItem.groupId,
      toGroupId: targetItem.groupId,
    });
  };

  const handlePlaceholderDrop = ({
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
  };

  return { handleItemDrop, handlePlaceholderDrop };
}
