import { ReactFlowProvider } from "@xyflow/react";
import { BaseFlow } from "../base-flow";

export function Flow() {
  return (
    <ReactFlowProvider>
      <BaseFlow />
    </ReactFlowProvider>
  );
}
