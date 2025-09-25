import {
  addEdge,
  type Edge,
  type Node,
  type OnConnect,
  type OnNodeDrag,
  type OnReconnect,
  reconnectEdge,
  type SelectionDragHandler,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import { useCallback, useRef } from "react";
import "@xyflow/react/dist/style.css";
import { makeFlow } from "@/test/factories/make-flow";
import type { NodeItem } from "../../hooks/types";
import { useDropNode } from "../../hooks/use-drop-node";
import { useUndoRedo } from "../../hooks/use-undo-redo";
import type { GroupNodeData } from "../../nodes/group-node/types";
import type { ReorderCluesParams } from "../../types/reorder";
import { getId } from "../../utils/get-id";
import {
  type ClueReorderContext,
  moveCluesBetweenGroups,
  reorderCluesWithinSameGroup,
  validateNodesAndClues,
} from "./base-flow.utils";

const flow = makeFlow();

const initialNodes: Node[] = flow.nodes;
const initialEdges: Edge[] = flow.edges;

export function useBaseFlowModel() {
  const flowRef = useRef<HTMLDivElement>(null);

  const { takeSnapshot } = useUndoRedo();
  const { screenToFlowPosition } = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleDropNode = useCallback(
    (item: NodeItem, clientOffset: { x: number; y: number } | null) => {
      if (!clientOffset) {
        return;
      }

      const position = screenToFlowPosition({
        x: clientOffset.x,
        y: clientOffset.y,
      });

      const newNode = {
        id: getId(),
        type: item.type,
        position,
        data:
          item.type === "evidence"
            ? ({ title: "Novo Grupo", clues: [] } as GroupNodeData)
            : { label: `${item.type} node` },
      };

      takeSnapshot();
      setNodes((prevState) => [...prevState, newNode]);
    },
    [screenToFlowPosition, takeSnapshot, setNodes]
  );

  const { drop } = useDropNode(handleDropNode);
  drop(flowRef);

  const onNodeDragStart: OnNodeDrag = useCallback(() => {
    takeSnapshot();
  }, [takeSnapshot]);

  const onSelectionDragStart: SelectionDragHandler = useCallback(() => {
    takeSnapshot();
  }, [takeSnapshot]);

  const handleGlobalReorderClues = useCallback(
    ({ fromIndex, toIndex, fromGroupId, toGroupId }: ReorderCluesParams) => {
      takeSnapshot();

      setNodes((currentNodes) => {
        const validation = validateNodesAndClues({
          toGroupId,
          fromIndex,
          fromGroupId,
          nodes: currentNodes,
        });

        if (!(validation.isValid && validation.fromNodeData)) {
          return currentNodes;
        }

        const movedClue = validation.fromNodeData.clues[fromIndex];
        const context: ClueReorderContext = {
          toIndex,
          fromIndex,
          toGroupId,
          movedClue,
          fromGroupId,
          nodes: currentNodes,
        };

        if (fromGroupId === toGroupId) {
          return reorderCluesWithinSameGroup(context, validation);
        }

        return moveCluesBetweenGroups(context, validation);
      });
    },
    [setNodes, takeSnapshot]
  );

  const onConnect: OnConnect = useCallback(
    (params) => {
      takeSnapshot();
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot));
    },
    [setEdges, takeSnapshot]
  );

  const onReconnect: OnReconnect = useCallback(
    (oldEdge, newConnection) => {
      takeSnapshot();
      setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
    },
    [setEdges, takeSnapshot]
  );

  return {
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
  };
}
