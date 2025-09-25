import { Plus } from "lucide-react";
import { type ComponentProps, Fragment } from "react";
import { Button } from "@/core/components/ui/button";
import { cn } from "@/core/lib/utils";
import type { Clue } from "../../types/clue";
import { ClueItem } from "../clue-item/clue-item";
import { DropPlaceholder } from "../clue-item/fragments";
import { DropZoneOverlay } from "../drop-zone-overlay";
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
  emptyAreaRef,
  handleItemDrop,
  isEmptyAreaActive,
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

      <div>
        {clues.length === 0 && (
          <div
            className={cn(
              "relative rounded-lg border border-dashed p-8 text-center transition-all duration-200"
            )}
            ref={emptyAreaRef}
          >
            <DropZoneOverlay
              isActive={isEmptyAreaActive}
              text="Soltar pista aqui"
            />

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
        )}

        {clues.length > 0 && (
          <>
            <DropPlaceholder
              groupId={groupId}
              insertIndex={0}
              onDrop={handlePlaceholderDrop}
            />

            {clues.map((clue, index) => (
              <Fragment key={clue.id}>
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
              </Fragment>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
