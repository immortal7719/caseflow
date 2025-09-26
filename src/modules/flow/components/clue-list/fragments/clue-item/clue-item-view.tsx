import { Edit } from "lucide-react";
import { memo } from "react";
import { Button } from "@/core/components/ui/button";
import { Card, CardContent } from "@/core/components/ui/card";
import { cn } from "@/core/lib/utils";
import { CluePreview } from "../../../clue-preview";
import { DeleteClueButton } from "../../../delete-clue-button";
import { SaveClueButton } from "../../../save-clue-button";
import { ClueIcon } from "../clue-icon";
import { DropZoneOverlay } from "../drop-zone-overlay";
import type { useClueItemModel } from "./clue-item-model";
import { ClueContent } from "./fragments/clue-content";

type ClueItemProps = ReturnType<typeof useClueItemModel>;

function ClueItemViewComponent({
  ref,
  clue,
  groupId,
  isPreview,
  isDropTarget,
  isBeingDragged,
}: ClueItemProps) {
  if (isPreview) {
    return (
      <CluePreview clue={clue} variant="preview">
        <ClueContent clue={clue} />
      </CluePreview>
    );
  }

  return (
    <div ref={ref}>
      <Card
        aria-describedby={`clue-${clue.id}-content`}
        aria-label={`Pista: ${clue.title}`}
        className={cn(
          "group relative cursor-grab p-0 transition-all duration-300 focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
          "border-2 hover:shadow-md",
          isBeingDragged && "rotate-1 scale-105 opacity-50",
          isDropTarget && "border-2 border-primary bg-primary/10 shadow-lg"
        )}
        role="article"
        tabIndex={0}
      >
        <CardContent className="flex flex-col gap-3 p-3">
          <div className="flex items-center justify-between">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <ClueIcon type={clue.type} />
              <h4
                className="truncate font-medium text-sm"
                id={`clue-${clue.id}-title`}
              >
                {clue.title}
              </h4>
            </div>

            {!isBeingDragged && (
              <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                <SaveClueButton groupId={groupId} initialData={clue}>
                  <Button className="h-6 w-6" size="icon" variant="ghost">
                    <Edit className="h-3 w-3" />
                  </Button>
                </SaveClueButton>

                <DeleteClueButton clue={clue} groupId={groupId} />
              </div>
            )}
          </div>

          <DropZoneOverlay isActive={isDropTarget} text="Soltar aqui" />

          <div id={`clue-${clue.id}-content`}>
            {clue.description && (
              <p className="mb-1 line-clamp-2 text-muted-foreground text-xs">
                {clue.description}
              </p>
            )}

            <ClueContent clue={clue} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export const ClueItemView = memo(ClueItemViewComponent);
