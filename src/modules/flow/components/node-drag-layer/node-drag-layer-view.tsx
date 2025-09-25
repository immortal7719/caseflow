import { Group } from "lucide-react";
import type { NodeItem } from "../../hooks/types";
import type { useNodeDragLayerModel } from "./node-drag-layer-model";

type NodeDragLayerViewProps = ReturnType<typeof useNodeDragLayerModel>;

function NodeDragPreview({ item }: { item: NodeItem }) {
  const IconComponent = item.type === "evidence" ? Group : Group;

  return (
    <div className="flex max-w-max cursor-grabbing select-none items-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm shadow-lg">
      <IconComponent className="text-gray-600" size={16} />
      <span>{item.label}</span>
    </div>
  );
}

export function NodeDragLayerView({
  item,
  initialOffset,
  currentOffset,
  getItemStyles,
  shouldRenderDragLayer,
}: NodeDragLayerViewProps) {
  if (!shouldRenderDragLayer) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[100] h-full w-full">
      <div style={getItemStyles(initialOffset, currentOffset)}>
        <NodeDragPreview item={item} />
      </div>
    </div>
  );
}
