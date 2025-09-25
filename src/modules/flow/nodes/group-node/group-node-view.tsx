import { Handle, type NodeProps, Position } from "@xyflow/react";
import { GripIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/core/components/ui/card";
import { ClueList } from "../../components/clue-list";
import { InlineEditableTitle } from "../../components/inline-editable-title";
import type { useGroupNodeModel } from "./group-node-model";
import type { GroupNodeType } from "./types";

type GroupNodeViewProps = ReturnType<typeof useGroupNodeModel> &
  NodeProps<GroupNodeType>;

const HANDLE_STYLE = { height: 10, width: 10 };

export function GroupNodeView({
  id,
  data,
  isConnectable,
  handleUpdateTitle,
  handleReorderClues,
}: GroupNodeViewProps) {
  return (
    <>
      <Card className="nowheel flex h-full w-[500px] cursor-default flex-col gap-0 bg-card/95 p-0 shadow-lg backdrop-blur-sm">
        <CardHeader className="cursor-grab rounded-t-lg bg-secondary/50 p-3">
          <div className="flex items-center justify-between">
            <InlineEditableTitle
              className="flex-1"
              onSave={handleUpdateTitle}
              placeholder="Grupo de evidências"
              value={data.title || ""}
            />
            <GripIcon className="h-5 w-5 text-muted-foreground/70" />
          </div>
        </CardHeader>
        <CardContent className="nodrag nopan scrollbar-thin scrollbar-thumb-zinc-950 scrollbar-track-zinc-50 flex-1 overflow-y-auto p-3">
          <ClueList
            className="max-h-[400px]"
            clues={data.clues || []}
            groupId={id}
            onReorderClues={handleReorderClues}
          />
        </CardContent>
      </Card>

      <Handle
        id={`evidence-${id}-target-top`}
        isConnectable={isConnectable}
        position={Position.Top}
        style={HANDLE_STYLE}
        type="target"
      />

      <Handle
        id={`evidence-${id}-target-left`}
        isConnectable={isConnectable}
        position={Position.Left}
        style={HANDLE_STYLE}
        type="target"
      />

      <Handle
        id={`evidence-${id}-source-right`}
        isConnectable={isConnectable}
        position={Position.Right}
        style={HANDLE_STYLE}
        type="source"
      />

      <Handle
        id={`evidence-${id}-source-bottom`}
        isConnectable={isConnectable}
        position={Position.Bottom}
        style={HANDLE_STYLE}
        type="source"
      />
    </>
  );
}
