import { FileText } from "lucide-react";
import { Card, CardContent } from "@/core/components/ui/card";
import type { ClueItem } from "../../hooks/types";
import { CluePreview } from "../shared/clue-preview";
import type { useClueDragLayerModel } from "./clue-drag-layer-model";

type ClueDragLayerViewProps = ReturnType<typeof useClueDragLayerModel>;

function ClueDragPreview({ item }: { item: ClueItem }) {
  if (!item.clue) {
    return (
      <Card className="max-w-xs cursor-grabbing select-none shadow-lg">
        <CardContent className="p-3">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="font-medium text-sm">Clue</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return <CluePreview clue={item.clue} variant="drag" />;
}

export function ClueDragLayerView({
  item,
  initialOffset,
  currentOffset,
  getItemStyles,
  shouldRenderDragLayer,
}: ClueDragLayerViewProps) {
  if (!shouldRenderDragLayer) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[100] h-full w-full">
      <div style={getItemStyles(initialOffset, currentOffset)}>
        <ClueDragPreview item={item} />
      </div>
    </div>
  );
}
