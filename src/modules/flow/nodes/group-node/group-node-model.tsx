import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import { useClueReorder } from "../../contexts/clue-reorder-context";
import type { ReorderCluesParams } from "../../types/reorder";
import { arrayMove } from "../../utils/array-move";
import type { GroupNodeData } from "./types";

type UseGroupNodeModel = {
  id: string;
  data: GroupNodeData;
};

export function useGroupNodeModel({ id, data }: UseGroupNodeModel) {
  const { updateNodeData } = useReactFlow();
  const { handleGlobalReorderClues } = useClueReorder();

  const handleReorderClues = useCallback(
    ({ fromIndex, toIndex, fromGroupId, toGroupId }: ReorderCluesParams) => {
      if (fromGroupId && toGroupId) {
        handleGlobalReorderClues({
          fromIndex,
          toIndex,
          fromGroupId,
          toGroupId,
        });
      } else {
        const reorderedClues = arrayMove(data.clues || [], fromIndex, toIndex);
        updateNodeData(id, { clues: reorderedClues });
      }
    },
    [handleGlobalReorderClues, data.clues, updateNodeData, id]
  );

  const handleUpdateTitle = (newTitle: string) => {
    updateNodeData(id, { title: newTitle });
  };

  return {
    id,
    data,
    handleUpdateTitle,
    handleReorderClues,
  };
}
