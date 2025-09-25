import type { Clue } from "@/modules/flow/types/clue";
import { AudioContent, ImageContent, TextContent, VideoContent } from "..";

type ClueContentProps = {
  clue: Clue;
};

export function ClueContent({ clue }: ClueContentProps) {
  switch (clue.type) {
    case "text":
      return <TextContent clue={clue} />;
    case "image":
      return <ImageContent clue={clue} />;
    case "video":
      return <VideoContent clue={clue} />;
    case "audio":
      return <AudioContent clue={clue} />;
    default:
      return null;
  }
}
