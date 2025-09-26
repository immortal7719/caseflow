import { FileText, Image, Video, Volume2 } from "lucide-react";
import type { Clue } from "../../types/clue";

type ClueIconProps = {
  type: Clue["type"];
  className?: string;
};

export function ClueIcon({ type, className = "h-4 w-4" }: ClueIconProps) {
  const iconProps = { className };

  switch (type) {
    case "text":
      return <FileText {...iconProps} />;
    case "image":
      return <Image {...iconProps} />;
    case "video":
      return <Video {...iconProps} />;
    case "audio":
      return <Volume2 {...iconProps} />;
    default:
      return <FileText {...iconProps} />;
  }
}
