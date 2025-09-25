import { FileText, Image, Video, Volume2 } from "lucide-react";
import type { ComponentType } from "react";
import type { ClueFormData } from "../../schemas/clue-schema";
import type { Clue, ClueMediaType } from "../../types/clue";

const FORM_DEFAULT_VALUES: ClueFormData = {
  type: "text",
  title: "",
  content: "",
  description: "",
};

export function getInitialValues(clue?: Clue): ClueFormData {
  if (!clue) {
    return FORM_DEFAULT_VALUES;
  }

  const baseData = {
    title: clue.title,
    description: clue.description || "",
  };

  switch (clue.type) {
    case "text":
      return {
        type: "text",
        content: clue.content,
        ...baseData,
      };
    case "image":
      return {
        type: "image",
        url: clue.url,
        alt: clue.alt || "",
        fileName: clue.fileName || "",
        ...baseData,
      };
    case "video":
      return {
        type: "video",
        url: clue.url,
        fileName: clue.fileName || "",
        duration: clue.duration,
        ...baseData,
      };
    case "audio":
      return {
        type: "audio",
        url: clue.url,
        fileName: clue.fileName || "",
        duration: clue.duration,
        ...baseData,
      };
    default:
      return FORM_DEFAULT_VALUES;
  }
}

export const clueTypes: Array<{
  value: ClueMediaType;
  label: string;
  icon: ComponentType<{ className?: string }>;
}> = [
  { value: "text", label: "Texto", icon: FileText },
  { value: "image", label: "Imagem", icon: Image },
  { value: "video", label: "Vídeo", icon: Video },
  { value: "audio", label: "Áudio", icon: Volume2 },
];
