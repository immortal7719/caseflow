import type { VideoClue } from "@/modules/flow/types/clue";

type VideoContentProps = {
  clue: VideoClue;
};

export function VideoContent({ clue }: VideoContentProps) {
  return (
    <div className="space-y-2">
      {clue.url && (
        <video
          className="h-60 w-full rounded border object-cover"
          controls={true}
          controlsList="nodownload"
          muted
          poster="/video-poster.webp"
          preload="metadata"
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
