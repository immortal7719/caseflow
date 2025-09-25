import { useSaveClueButtonModel } from "./save-clue-button-model";
import { SaveClueButtonView } from "./save-clue-button-view";

type ViewProps = Parameters<typeof SaveClueButtonView>[0];
type ModelProps = Parameters<typeof useSaveClueButtonModel>[0];

type SaveClueButtonProps = Omit<
  ViewProps,
  keyof ReturnType<typeof useSaveClueButtonModel>
> &
  ModelProps;

export function SaveClueButton(props: SaveClueButtonProps) {
  return <SaveClueButtonView {...props} {...useSaveClueButtonModel(props)} />;
}
