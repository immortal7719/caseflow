import type { TextClue } from "@/modules/flow/types/clue";

type TextContentProps = {
  clue: TextClue;
};

export function TextContent({ clue }: TextContentProps) {
  return <p className="text-muted-foreground text-sm">{clue.content}</p>;
}
