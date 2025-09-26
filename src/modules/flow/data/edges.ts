import { type DefaultEdgeOptions, MarkerType } from "@xyflow/react";

export const defaultEdgeOptions: DefaultEdgeOptions = {
  style: {
    strokeWidth: 2,
  },
  markerEnd: {
    type: MarkerType.ArrowClosed,
  },
  reconnectable: "target",
};
