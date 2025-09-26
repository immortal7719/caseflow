import { FileText, Image, Video, Volume2 } from "lucide-react";
import type { ComponentType } from "react";
import type { ClueFormData } from "../../schemas/clue-schema";
import type { Clue, ClueMediaType } from "../../types/clue";

const FORM_DEFAULT_VALUES: ClueFormData = {
  type: "text",
  title: "",
  description: "",
  text: {
    content: "",
  },
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
        ...baseData,
        text: {
          content: clue.content,
        },
      };
    case "image":
      return {
        type: "image",
        ...baseData,
        image: {
          url: clue.url,
          alt: clue.alt || "",
          fileName: clue.fileName || "",
        },
      };
    case "video":
      return {
        type: "video",
        ...baseData,
        video: {
          url: clue.url,
          fileName: clue.fileName || "",
          duration: clue.duration,
        },
      };
    case "audio":
      return {
        type: "audio",
        ...baseData,
        audio: {
          url: clue.url,
          fileName: clue.fileName || "",
          duration: clue.duration,
        },
      };
    default:
      return FORM_DEFAULT_VALUES;
  }
}

export function extractClueData(data: ClueFormData) {
  switch (data.type) {
    case "text":
      return {
        type: data.type,
        title: data.title,
        description: data.description,
        content: data.text.content,
      };
    case "image":
      return {
        type: data.type,
        title: data.title,
        description: data.description,
        url: data.image.url,
        alt: data.image.alt,
        fileName: data.image.fileName,
      };
    case "video":
      return {
        type: data.type,
        title: data.title,
        description: data.description,
        url: data.video.url,
        fileName: data.video.fileName,
        duration: data.video.duration,
      };
    case "audio":
      return {
        type: data.type,
        title: data.title,
        description: data.description,
        url: data.audio.url,
        fileName: data.audio.fileName,
        duration: data.audio.duration,
      };
    default:
      return data as never;
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
