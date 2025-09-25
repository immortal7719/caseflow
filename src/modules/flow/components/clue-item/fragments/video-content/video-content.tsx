import type { VideoClue } from "@/modules/flow/types/clue";

type VideoContentProps = {
  clue: VideoClue;
};

export function VideoContent({ clue }: VideoContentProps) {
  return (
    <div className="space-y-2">
      {clue.url && (
        <video
          className="h-24 w-full rounded border object-cover"
          controls={false}
          muted
          src={clue.url}
        />
      )}
      <div className="flex justify-between text-muted-foreground text-xs">
        {clue.fileName && <span>{clue.fileName}</span>}
        {clue.duration && <span>{Math.round(clue.duration)}s</span>}
      </div>
    </div>
  );
}
