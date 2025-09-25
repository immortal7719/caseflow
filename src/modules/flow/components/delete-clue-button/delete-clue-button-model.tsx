import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import type { GroupNodeData } from "../../nodes/group-node/types";
import type { Clue } from "../../types/clue";

type UseDeleteClueButtonModel = {
  clue: Clue;
  groupId: string;
};

export function useDeleteClueButtonModel({
  clue,
  groupId,
}: UseDeleteClueButtonModel) {
  const { updateNodeData, getNode } = useReactFlow();

  const handleDeleteClue = useCallback(() => {
    const node = getNode(groupId);

    if (node?.data) {
      const nodeData = node.data as GroupNodeData;

      updateNodeData(groupId, {
        clues: nodeData.clues.filter((c: Clue) => c.id !== clue.id),
      });
    }
  }, [clue.id, groupId, updateNodeData, getNode]);

  return {
    clue,
    handleDeleteClue,
  };
}
