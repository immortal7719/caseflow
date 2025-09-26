import { memo } from "react";
import { useSaveClueButtonModel } from "./save-clue-button-model";
import { SaveClueButtonView } from "./save-clue-button-view";

type ViewProps = Parameters<typeof SaveClueButtonView>[0];
type ModelProps = Parameters<typeof useSaveClueButtonModel>[0];

type SaveClueButtonProps = Omit<
  ViewProps,
  keyof ReturnType<typeof useSaveClueButtonModel>
> &
  ModelProps;

function SaveClueButtonComponent(props: SaveClueButtonProps) {
  return <SaveClueButtonView {...props} {...useSaveClueButtonModel(props)} />;
}

export const SaveClueButton = memo(
  SaveClueButtonComponent,
  (prevProps, nextProps) =>
    prevProps.initialData === nextProps.initialData &&
    prevProps.groupId === nextProps.groupId
);
