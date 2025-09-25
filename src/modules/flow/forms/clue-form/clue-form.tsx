import { useClueFormModel } from "./clue-form-model";
import { ClueFormView } from "./clue-form-view";

type ClueFormProps = Parameters<typeof useClueFormModel>[0];

export function ClueForm(props: ClueFormProps) {
  return <ClueFormView {...useClueFormModel(props)} />;
}
