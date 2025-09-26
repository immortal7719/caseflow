import { zodResolver } from "@hookform/resolvers/zod";
import { useReactFlow } from "@xyflow/react";
import { useForm } from "react-hook-form";
import { getId } from "@/modules/flow/utils/get-id";
import type { GroupNodeData } from "../../nodes/group-node/types";
import { type ClueFormData, clueFormSchema } from "../../schemas/clue-schema";
import type { Clue } from "../../types/clue";
import { extractClueData, getInitialValues } from "./clue-form.utils";

type UseClueFormModelProps = {
  groupId: string;
  initialData?: Clue;
  handleGoBack?: () => void;
};

export function useClueFormModel({
  groupId,
  initialData,
  handleGoBack,
}: UseClueFormModelProps) {
  const isEditing = !!initialData;
  const { updateNodeData, getNode } = useReactFlow();

  const form = useForm<ClueFormData>({
    resolver: zodResolver(clueFormSchema),
    defaultValues: getInitialValues(initialData),
  });

  const watchedType = form.watch("type");

  const createClue = (
    nodeData: GroupNodeData,
    extractedData: ReturnType<typeof extractClueData>
  ) => {
    const newClue: Clue = {
      id: getId(),
      ...extractedData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    updateNodeData(groupId, {
      clues: [...nodeData.clues, newClue],
    });
  };

  const editClue = (
    nodeData: GroupNodeData,
    extractedData: ReturnType<typeof extractClueData>
  ) => {
    const updatedClue: Clue = {
      ...initialData,
      ...extractedData,
      updatedAt: new Date(),
    } as Clue;

    const updatedClues = nodeData.clues.map((clue) =>
      clue.id === updatedClue.id ? updatedClue : clue
    );

    updateNodeData(groupId, {
      clues: updatedClues,
    });
  };

  const handleFormSubmit = (data: ClueFormData) => {
    const node = getNode(groupId);
    const nodeData = node?.data as GroupNodeData;
    const extractedData = extractClueData(data);

    if (isEditing) {
      editClue(nodeData, extractedData);
    } else {
      createClue(nodeData, extractedData);
    }

    handleGoBack?.();
  };

  return {
    form,
    isEditing,
    watchedType,
    handleFormSubmit,
  };
}
