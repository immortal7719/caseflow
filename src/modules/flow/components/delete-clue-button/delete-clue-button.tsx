import { memo } from "react";
import { useDeleteClueButtonModel } from "./delete-clue-button-model";
import { DeleteClueButtonView } from "./delete-clue-button-view";

type DeleteClueButtonProps = Parameters<typeof useDeleteClueButtonModel>[0];

function DeleteClueButtonComponent(props: DeleteClueButtonProps) {
  return <DeleteClueButtonView {...useDeleteClueButtonModel(props)} />;
}

export const DeleteClueButton = memo(DeleteClueButtonComponent);
