import { useNodeDragLayerModel } from "./node-drag-layer-model";
import { NodeDragLayerView } from "./node-drag-layer-view";

export function NodeDragLayer() {
  return <NodeDragLayerView {...useNodeDragLayerModel()} />;
}
