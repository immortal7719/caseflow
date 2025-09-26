import { cva, type VariantProps } from "class-variance-authority";
import { Card, CardContent } from "@/core/components/ui/card";
import { cn } from "@/core/lib/utils";
import type { Clue } from "../../types/clue";
import { ClueIcon } from "../clue-list/fragments/clue-icon";

const cluePreviewVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "",
      preview: "rotate-2 scale-105 border-primary opacity-90 shadow-lg",
      drag: "max-w-xs cursor-grabbing select-none shadow-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type CluePreviewProps = {
  clue: Clue;
  className?: string;
  children?: React.ReactNode;
} & VariantProps<typeof cluePreviewVariants>;

export function CluePreview({
  clue,
  children,
  className,
  variant,
}: CluePreviewProps) {
  return (
    <Card className={cn(cluePreviewVariants({ variant }), className)}>
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
