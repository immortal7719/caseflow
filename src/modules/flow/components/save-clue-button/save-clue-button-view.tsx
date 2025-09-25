import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/core/components/ui/dialog";
import { ClueForm } from "../../forms/clue-form";
import type { useSaveClueButtonModel } from "./save-clue-button-model";

type SaveClueButtonViewProps = ReturnType<typeof useSaveClueButtonModel> & {
  groupId: string;
  children?: ReactNode;
};

export function SaveClueButtonView({
  groupId,
  children,
  isEditing,
  initialData,
  handleGoBack,
  dialogIsOpen,
  setDialogIsOpen,
}: SaveClueButtonViewProps) {
  return (
    <Dialog onOpenChange={setDialogIsOpen} open={dialogIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Editar Pista" : "Adicionar Nova Pista"}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Modifique as informações da pista conforme necessário."
              : "Preencha as informações da nova pista de investigação."}
          </DialogDescription>
        </DialogHeader>

        <ClueForm
          groupId={groupId}
          handleGoBack={handleGoBack}
          initialData={initialData}
        />
      </DialogContent>
    </Dialog>
  );
}
