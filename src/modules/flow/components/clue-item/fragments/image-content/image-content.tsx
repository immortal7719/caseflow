import type { ImageClue } from "@/modules/flow/types/clue";

type ImageContentProps = {
  clue: ImageClue;
};

export function ImageContent({ clue }: ImageContentProps) {
  return (
    <div className="space-y-2">
      {clue.url && (
        <div
          aria-label={clue.alt || clue.title}
          className="h-60 w-full rounded border bg-center bg-cover"
          role="img"
          style={{ backgroundImage: `url(${clue.url})` }}
        />
      )}
      {clue.fileName && (
        <p className="text-muted-foreground text-xs">{clue.fileName}</p>
      )}
    </div>
  );
}
