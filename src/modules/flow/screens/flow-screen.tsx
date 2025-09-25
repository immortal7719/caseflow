import { ReactFlowProvider } from "@xyflow/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CriminalInvestigationFlow } from "../components/criminal-investigation-flow";
import { FlowHeader } from "../components/flow-header";

export function FlowScreen() {
  return (
    <ReactFlowProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="flex h-screen flex-col">
          <FlowHeader />
          <main
            aria-label="Área principal de investigação criminal"
            className="flex-1"
          >
            <CriminalInvestigationFlow />
          </main>
        </div>
      </DndProvider>
    </ReactFlowProvider>
  );
}
