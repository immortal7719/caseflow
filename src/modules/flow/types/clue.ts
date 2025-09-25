export type ClueMediaType = "text" | "image" | "video" | "audio";

export type BaseClue = {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  order: number;
};

export type TextClue = BaseClue & {
  type: "text";
  content: string;
};

export type ImageClue = BaseClue & {
  type: "image";
  url: string;
  alt?: string;
  fileName?: string;
};

export type VideoClue = BaseClue & {
  type: "video";
  url: string;
  fileName?: string;
  duration?: number;
};

export type AudioClue = BaseClue & {
  type: "audio";
  url: string;
  fileName?: string;
  duration?: number;
};

export type Clue = TextClue | ImageClue | VideoClue | AudioClue;

export type GroupData = {
  id: string;
  title: string;
  clues: Clue[];
  createdAt: Date;
  updatedAt: Date;
};
