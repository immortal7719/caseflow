import { memo } from "react";
import { useClueListModel } from "./clue-list-model";
import { ClueListView } from "./clue-list-view";

type ViewProps = Parameters<typeof ClueListView>[0];
type ModelProps = Parameters<typeof useClueListModel>[0];

type ClueListProps = Omit<
  ViewProps,
  keyof ReturnType<typeof useClueListModel>
> &
  ModelProps;

function ClueListComponent({ onReorderClues, ...props }: ClueListProps) {
  return <ClueListView {...useClueListModel({ onReorderClues })} {...props} />;
}

export const ClueList = memo(ClueListComponent);
