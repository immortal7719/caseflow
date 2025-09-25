import { Edit, FileText, Image, Video, Volume2 } from "lucide-react";
import { memo } from "react";
import { Button } from "@/core/components/ui/button";
import { Card, CardContent } from "@/core/components/ui/card";
import { cn } from "@/core/lib/utils";
import type { Clue } from "../../types/clue";
import { DeleteClueButton } from "../delete-clue-button";
import { SaveClueButton } from "../save-clue-button";
import type { useClueItemModel } from "./clue-item-model";
import { ClueContent } from "./fragments/clue-content";

type ClueItemProps = ReturnType<typeof useClueItemModel>;

const ClueIcon = ({ type }: { type: Clue["type"] }) => {
  const iconProps = { className: "h-4 w-4" };

  switch (type) {
    case "text":
      return <FileText {...iconProps} />;
    case "image":
      return <Image {...iconProps} />;
    case "video":
      return <Video {...iconProps} />;
    case "audio":
      return <Volume2 {...iconProps} />;
    default:
      return <FileText {...iconProps} />;
  }
};

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
      <Card className="rotate-2 scale-105 border-primary opacity-90 shadow-lg">
        <CardContent className="space-y-2 p-3">
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <ClueIcon type={clue.type} />
            <h4 className="truncate font-medium text-sm">{clue.title}</h4>
          </div>
          <ClueContent clue={clue} />
        </CardContent>
      </Card>
    );
  }

  return (
    <div ref={ref}>
      <Card
        className={cn(
          "group relative cursor-grab p-0 transition-all duration-300",
          "border-2 hover:shadow-md",
          isBeingDragged && "rotate-1 scale-105 opacity-50",
          isDropTarget && "border-2 border-primary bg-primary/10 shadow-lg"
        )}
      >
        <CardContent className="flex flex-col gap-3 p-3">
          <div className="flex items-center justify-between">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <ClueIcon type={clue.type} />
              <h4 className="truncate font-medium text-sm">{clue.title}</h4>
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

          {isDropTarget && (
            <div className="absolute inset-0 flex items-center justify-center rounded-xl border-2 border-primary border-dashed bg-primary/5">
              <span className="font-medium text-primary text-sm">
                Soltar aqui
              </span>
            </div>
          )}

          {clue.description && (
            <p className="line-clamp-2 text-muted-foreground text-xs">
              {clue.description}
            </p>
          )}

          <ClueContent clue={clue} />
        </CardContent>
      </Card>
    </div>
  );
}

export const ClueItemView = memo(ClueItemViewComponent);
