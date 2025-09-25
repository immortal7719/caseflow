import { useClueDragLayerModel } from "./clue-drag-layer-model";
import { ClueDragLayerView } from "./clue-drag-layer-view";

export function ClueDragLayer() {
  return <ClueDragLayerView {...useClueDragLayerModel()} />;
}
