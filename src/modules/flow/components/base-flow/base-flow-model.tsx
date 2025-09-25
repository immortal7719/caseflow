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

const initialNodes: Node[] = [
  {
    id: "group1",
    type: "evidence",
    position: { x: 100, y: 100 },
    data: {
      title: "Evidências Físicas",
      clues: [
        {
          id: "clue1",
          title: "Impressão digital na porta",
          description:
            "Impressão digital encontrada na maçaneta da porta principal",
          type: "text" as const,
          content:
            "Impressão digital parcial encontrada na superfície metálica da maçaneta. Padrão compatível com mão direita, indicador. Qualidade suficiente para comparação.",
          order: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "clue2",
          title: "Foto da cena do crime",
          description: "Fotografia geral da sala onde ocorreu o incidente",
          type: "image" as const,
          url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
          alt: "Sala com móveis desarrumados",
          fileName: "cena_crime_001.jpg",
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    } as GroupNodeData,
  },
  {
    id: "group2",
    type: "evidence",
    position: { x: 500, y: 100 },
    data: {
      title: "Depoimentos",
      clues: [
        {
          id: "clue3",
          title: "Testemunha viu carro vermelho",
          description: "Relato da Sra. Maria sobre veículo suspeito",
          type: "text" as const,
          content:
            "Por volta das 20h30, a testemunha observou um carro vermelho, possivelmente um sedan, estacionado em frente ao local por aproximadamente 15 minutos.",
          order: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    } as GroupNodeData,
  },
];

const initialEdges: Edge[] = [
  {
    id: "group1-group2",
    source: "group1",
    target: "group2",
    sourceHandle: "evidence-group1-source-right",
    targetHandle: "evidence-group2-target-left",
  },
];

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
