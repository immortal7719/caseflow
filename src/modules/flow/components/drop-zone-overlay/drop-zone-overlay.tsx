import type { ComponentProps } from "react";
import { cn } from "@/core/lib/utils";

type DropZoneOverlayProps = ComponentProps<"div"> & {
  text: string;
  isActive: boolean;
};

export function DropZoneOverlay({
  text,
  isActive,
  ...props
}: DropZoneOverlayProps) {
  return (
    <div
      {...props}
      className={cn(
        [
          "absolute inset-0 flex items-center justify-center rounded-lg border-2 border-primary border-dashed bg-primary/20 opacity-0",
          "pointer-events-none transition-opacity duration-200",
          isActive && "opacity-100",
        ],
        props.className
      )}
      inert
    >
      <span className="font-medium text-primary text-sm">{text}</span>
    </div>
  );
}
