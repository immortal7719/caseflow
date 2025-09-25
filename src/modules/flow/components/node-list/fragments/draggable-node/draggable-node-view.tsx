/** biome-ignore-all lint/a11y/noNoninteractiveTabindex: biome mistakenly flags this */
import { cn } from "@/core/lib/utils";
import type { useDraggableNodeModel } from "./draggable-node-model";

type DraggableNodeViewProps = ReturnType<typeof useDraggableNodeModel>;

export function DraggableNodeView({
  ref,
  node,
  isDragging,
}: DraggableNodeViewProps) {
  return (
    <div
      aria-describedby={`${node.id}-description`}
      className={cn(
        "flex cursor-grab select-none items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:cursor-grabbing sm:gap-3 sm:px-4",
        isDragging && "opacity-50"
      )}
      ref={ref}
      tabIndex={0}
    >
      <node.icon aria-hidden="true" className="text-gray-600" size={16} />
      <span className="text-xs sm:text-sm">{node.label}</span>
      <span className="sr-only" id={`${node.id}-description`}>
        Pressione Enter ou Espaço para selecionar e use as setas para mover
      </span>
    </div>
  );
}
