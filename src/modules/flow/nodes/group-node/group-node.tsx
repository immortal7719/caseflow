import type { NodeProps } from "@xyflow/react";
import isEqual from "lodash.isequal";
import { memo } from "react";
import { useGroupNodeModel } from "./group-node-model";
import { GroupNodeView } from "./group-node-view";
import type { GroupNodeType } from "./types";

type GroupNodeProps = NodeProps<GroupNodeType>;

function GroupNodeComponent(props: GroupNodeProps) {
  return <GroupNodeView {...props} {...useGroupNodeModel(props)} />;
}

export const GroupNode = memo(GroupNodeComponent, (prevProps, nextProps) => {
  if (
    prevProps.id !== nextProps.id ||
    prevProps.selected !== nextProps.selected ||
    prevProps.dragging !== nextProps.dragging ||
    prevProps.deletable !== nextProps.deletable ||
    prevProps.selectable !== nextProps.selectable ||
    prevProps.draggable !== nextProps.draggable ||
    prevProps.type !== nextProps.type ||
    prevProps.zIndex !== nextProps.zIndex ||
    prevProps.isConnectable !== nextProps.isConnectable ||
    prevProps.width !== nextProps.width ||
    prevProps.height !== nextProps.height ||
    prevProps.positionAbsoluteX !== nextProps.positionAbsoluteX ||
    prevProps.positionAbsoluteY !== nextProps.positionAbsoluteY ||
    prevProps.sourcePosition !== nextProps.sourcePosition ||
    prevProps.targetPosition !== nextProps.targetPosition ||
    prevProps.zIndex !== nextProps.zIndex
  ) {
    return false;
  }

  return isEqual(prevProps.data, nextProps.data);
});
