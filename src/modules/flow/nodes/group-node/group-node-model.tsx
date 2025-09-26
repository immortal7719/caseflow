import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import { useClueReorder } from "../../hooks/use-clue-reorder";
import type { ReorderCluesParams } from "../../types/reorder";
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
      handleGlobalReorderClues({
        toIndex,
        fromIndex,
        toGroupId,
        fromGroupId,
      });
    },
    [handleGlobalReorderClues]
  );

  const handleUpdateTitle = useCallback(
    (newTitle: string) => {
      updateNodeData(id, { title: newTitle });
    },
    [updateNodeData, id]
  );

  return {
    id,
    data,
    handleUpdateTitle,
    handleReorderClues,
  };
}
