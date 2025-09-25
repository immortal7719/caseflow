import type { TextClue } from "@/modules/flow/types/clue";

type TextContentProps = {
  clue: TextClue;
};

export function TextContent({ clue }: TextContentProps) {
  return (
    <p className="line-clamp-3 text-muted-foreground text-sm">{clue.content}</p>
  );
}
