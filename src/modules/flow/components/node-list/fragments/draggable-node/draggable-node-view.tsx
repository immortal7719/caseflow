import type { useDraggableNodeModel } from "./draggable-node-model";

type DraggableNodeViewProps = ReturnType<typeof useDraggableNodeModel>;

export function DraggableNodeView({
  ref,
  node,
  isDragging,
}: DraggableNodeViewProps) {
  return (
    <div
      className={`flex cursor-grab select-none items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-50 active:cursor-grabbing sm:gap-3 sm:px-4 ${
        isDragging ? "opacity-50" : ""
      }`}
      ref={ref}
    >
      <node.icon className="text-gray-600" size={16} />
      <span className="text-xs sm:text-sm">{node.label}</span>
    </div>
  );
}
