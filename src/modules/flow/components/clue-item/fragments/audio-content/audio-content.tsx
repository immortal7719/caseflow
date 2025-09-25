import type { AudioClue } from "@/modules/flow/types/clue";

type AudioContentProps = {
  clue: AudioClue;
};

export function AudioContent({ clue }: AudioContentProps) {
  return (
    <div className="space-y-2">
      {clue.url && (
        <audio
          aria-label={
            clue.fileName ? `Audio: ${clue.fileName}` : "Audio player"
          }
          className="w-full"
          controls={true}
          preload="none"
          src={clue.url}
        >
          <track kind="captions" />
          Your browser does not support the audio element.
        </audio>
      )}
      <div className="flex justify-between text-muted-foreground text-xs">
        {clue.fileName && <span>{clue.fileName}</span>}
        {clue.duration && <span>{Math.round(clue.duration)}s</span>}
      </div>
    </div>
  );
}
