import { Volume2 } from "lucide-react";
import type { AudioClue } from "@/modules/flow/types/clue";

type AudioContentProps = {
  clue: AudioClue;
};

export function AudioContent({ clue }: AudioContentProps) {
  return (
    <div className="space-y-2">
      <div className="flex h-16 items-center justify-center rounded border bg-muted">
        <Volume2 className="h-8 w-8 text-muted-foreground" />
      </div>
      <div className="flex justify-between text-muted-foreground text-xs">
        {clue.fileName && <span>{clue.fileName}</span>}
        {clue.duration && <span>{Math.round(clue.duration)}s</span>}
      </div>
    </div>
  );
}
