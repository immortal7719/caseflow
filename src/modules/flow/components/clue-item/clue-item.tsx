import { useClueItemModel } from "./clue-item-model";
import { ClueItemView } from "./clue-item-view";

type ClueItemProps = Parameters<typeof useClueItemModel>[0];

export function ClueItem(props: ClueItemProps) {
  return <ClueItemView {...useClueItemModel(props)} />;
}
