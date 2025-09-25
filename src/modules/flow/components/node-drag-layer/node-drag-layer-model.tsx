/** biome-ignore-all lint/style/useNamingConvention: CSS */
import { useDragLayer } from "react-dnd";
import type { NodeItem } from "../../hooks/types";
import { ItemTypes } from "../../hooks/types";

export function useNodeDragLayerModel() {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem() as NodeItem,
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));

  const getItemStyles = (
    initOffset: { x: number; y: number } | null,
    currOffset: { x: number; y: number } | null
  ) => {
    if (!initOffset) {
      return { display: "none" };
    }

    if (!currOffset) {
      return { display: "none" };
    }

    const { x, y } = currOffset;
    const transform = `translate(${x}px, ${y}px)`;

    return {
      transform,
      WebkitTransform: transform,
    };
  };

  const shouldRenderDragLayer = isDragging && itemType === ItemTypes.node;

  return {
    item,
    itemType,
    isDragging,
    initialOffset,
    currentOffset,
    getItemStyles,
    shouldRenderDragLayer,
  };
}
