import type { ComponentProps } from "react";
import { cn } from "@/core/lib/utils";
import type { useDropPlaceholderModel } from "./drop-placeholder-model";

export type DropPlaceholderViewProps = ReturnType<
  typeof useDropPlaceholderModel
> &
  Omit<ComponentProps<"div">, "ref">;

export function DropPlaceholderView({
  ref,
  isActive,
  ...props
}: DropPlaceholderViewProps) {
  return (
    <div
      {...props}
      className={cn(
        "transition-all duration-200",
        isActive ? "h-12 opacity-100" : "h-2 opacity-0",
        props.className
      )}
      ref={ref}
    >
      <div
        className={cn(
          "h-full w-full rounded-md border-2 border-dashed transition-all duration-200",
          isActive
            ? "border-primary bg-primary/10"
            : "border-muted-foreground/25 bg-muted/50"
        )}
      >
        {isActive && (
          <div className="flex h-full items-center justify-center">
            <span className="font-medium text-primary text-sm">
              Soltar pista aqui
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
