import { type ReactNode, useState } from "react";
import type { Clue } from "../../types/clue";

type SaveClueButtonModelProps = {
  initialData?: Clue;
  children?: ReactNode;
};

export function useSaveClueButtonModel({
  initialData,
}: SaveClueButtonModelProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const isEditing = !!initialData;

  const handleGoBack = () => {
    setDialogIsOpen(false);
  };

  return {
    isEditing,
    initialData,
    handleGoBack,
    dialogIsOpen,
    setDialogIsOpen,
  };
}
