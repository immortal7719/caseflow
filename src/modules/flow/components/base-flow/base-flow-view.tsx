import { Background, BackgroundVariant, ReactFlow } from "@xyflow/react";
import type { useBaseFlowModel } from "./base-flow-model";

type BaseFlowView = ReturnType<typeof useBaseFlowModel>;

export function BaseFlowView({
  nodes,
  edges,
  onConnect,
  onEdgesChange,
  onNodesChange,
  onNodeDragStart,
  onSelectionDragStart,
}: BaseFlowView) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        deleteKeyCode={["Delete", "Backspace"]}
        edges={edges}
        fitView
        nodes={nodes}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onlyRenderVisibleElements={true}
        onNodeDragStart={onNodeDragStart}
        onNodesChange={onNodesChange}
        onSelectionDragStart={onSelectionDragStart}
        panOnDrag={[1, 2]}
        panOnScroll
        selectionOnDrag
      >
        <Background color="#ccc" variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  );
}
