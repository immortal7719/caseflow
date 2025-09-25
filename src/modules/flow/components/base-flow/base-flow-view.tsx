import { Background, BackgroundVariant, ReactFlow } from "@xyflow/react";
import { ClueReorderProvider } from "../../contexts/clue-reorder-context";
import { defaultEdgeOptions } from "../data/edges";
import { nodeTypes } from "../data/nodes";
import type { useBaseFlowModel } from "./base-flow-model";

type BaseFlowView = ReturnType<typeof useBaseFlowModel>;

export function BaseFlowView({
  nodes,
  edges,
  flowRef,
  onConnect,
  onReconnect,
  onEdgesChange,
  onNodesChange,
  onNodeDragStart,
  onSelectionDragStart,
  handleGlobalReorderClues,
}: BaseFlowView) {
  return (
    <ClueReorderProvider handleGlobalReorderClues={handleGlobalReorderClues}>
      <div className="h-full w-full" ref={flowRef}>
        <ReactFlow
          defaultEdgeOptions={defaultEdgeOptions}
          deleteKeyCode={["Delete", "Backspace"]}
          edges={edges}
          fitView
          nodes={nodes}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
          onEdgesChange={onEdgesChange}
          onlyRenderVisibleElements={true}
          onNodeDragStart={onNodeDragStart}
          onNodesChange={onNodesChange}
          onReconnect={onReconnect}
          onSelectionDragStart={onSelectionDragStart}
          panOnDrag={[1, 2]}
          panOnScroll
          selectionOnDrag
        >
          <Background color="#7D7E7E" variant={BackgroundVariant.Dots} />
        </ReactFlow>
      </div>
    </ClueReorderProvider>
  );
}
