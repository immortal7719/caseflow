import { BaseFlow } from "../base-flow";
import { ClueDragLayer } from "../clue-drag-layer";
import { NodeDragLayer } from "../node-drag-layer";

export function CriminalInvestigationFlow() {
  return (
    <>
      <BaseFlow />
      <NodeDragLayer />
      <ClueDragLayer />
    </>
  );
}
