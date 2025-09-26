import { useRef } from "react";
import { useDropZone } from "@/modules/flow/hooks/use-drop-zone";
import type { DropZoneParams } from "@/modules/flow/types/reorder";

type DropPlaceholderModelProps = {
  groupId: string;
  insertIndex: number;
  onDrop: (params: DropZoneParams) => void;
};

export function useDropPlaceholderModel({
  onDrop,
  groupId,
  insertIndex,
}: DropPlaceholderModelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isOver, canDrop, drop } = useDropZone(onDrop, insertIndex, groupId);

  drop(ref);

  const isActive = isOver && canDrop;

  return { ref, isActive };
}
