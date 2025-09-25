import { Plus } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "@/core/components/ui/button";
import { cn } from "@/core/lib/utils";
import type { Clue } from "../../types/clue";
import { ClueItem } from "../clue-item/clue-item";
import { DropPlaceholder } from "../clue-item/fragments";
import { SaveClueButton } from "../save-clue-button";
import type { useClueListModel } from "./clue-list-model";

type ClueListViewProps = ReturnType<typeof useClueListModel> &
  ComponentProps<"section"> & {
    clues: Clue[];
    groupId: string;
  };

export function ClueListView({
  clues,
  groupId,
  handleItemDrop,
  handlePlaceholderDrop,
  ...props
}: ClueListViewProps) {
  return (
    <section
      {...props}
      aria-label="Lista de pistas"
      className={cn("space-y-2", props.className)}
    >
      <div className="flex items-center justify-between">
        <span className="font-medium text-muted-foreground text-sm">
          Pistas ({clues.length})
        </span>
        <SaveClueButton groupId={groupId}>
          <Button className="h-7 gap-1 px-2" size="sm" variant="ghost">
            <Plus className="h-3 w-3" />
            Adicionar
          </Button>
        </SaveClueButton>
      </div>

      <div className="space-y-2">
        {clues.length === 0 ? (
          <div className="rounded-lg border border-muted-foreground/25 border-dashed p-8 text-center">
            <p className="text-muted-foreground text-sm">
              Nenhuma pista adicionada ainda
            </p>
            <SaveClueButton groupId={groupId}>
              <Button className="mt-2 gap-1" size="sm" variant="outline">
                <Plus className="h-3 w-3" />
                Adicionar primeira pista
              </Button>
            </SaveClueButton>
          </div>
        ) : (
          <>
            <DropPlaceholder
              groupId={groupId}
              insertIndex={0}
              onDrop={handlePlaceholderDrop}
            />

            {clues.map((clue, index) => (
              <div key={clue.id}>
                <ClueItem
                  clue={clue}
                  groupId={groupId}
                  index={index}
                  onDrop={handleItemDrop}
                />

                <DropPlaceholder
                  groupId={groupId}
                  insertIndex={index + 1}
                  onDrop={handlePlaceholderDrop}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
