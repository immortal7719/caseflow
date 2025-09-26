import { memo } from "react";
import { useClueItemModel } from "./clue-item-model";
import { ClueItemView } from "./clue-item-view";

type ClueItemProps = Parameters<typeof useClueItemModel>[0];

function ClueItemComponent(props: ClueItemProps) {
  return <ClueItemView {...useClueItemModel(props)} />;
}

export const ClueItem = memo(ClueItemComponent);
