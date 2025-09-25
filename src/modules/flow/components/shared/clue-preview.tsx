import { Card, CardContent } from "@/core/components/ui/card";
import type { Clue } from "../../types/clue";
import { ClueIcon } from "./clue-icon";

type CluePreviewProps = {
  clue: Clue;
  variant?: "default" | "preview" | "drag";
  className?: string;
  children?: React.ReactNode;
};

export function CluePreview({
  clue,
  variant = "default",
  className = "",
  children,
}: CluePreviewProps) {
  const getCardClassName = () => {
    switch (variant) {
      case "preview":
        return "rotate-2 scale-105 border-primary opacity-90 shadow-lg";
      case "drag":
        return "max-w-xs cursor-grabbing select-none shadow-lg";
      default:
        return "";
    }
  };

  return (
    <Card className={`${getCardClassName()} ${className}`}>
      <CardContent className="space-y-2 p-3">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <ClueIcon type={clue.type} />
          <h4 className="truncate font-medium text-sm">{clue.title}</h4>
        </div>
        {clue.description && (
          <p className="line-clamp-2 text-muted-foreground text-xs">
            {clue.description}
          </p>
        )}
        {children}
      </CardContent>
    </Card>
  );
}
