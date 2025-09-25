import { z } from "zod/v3";

const TITLE_MIN_LENGTH = 1;
const TITLE_MAX_LENGTH = 100;

const baseClueFormSchema = z.object({
  title: z
    .string()
    .min(TITLE_MIN_LENGTH, "Título é obrigatório")
    .max(TITLE_MAX_LENGTH, "Título muito longo"),
  description: z.string().optional(),
});

const textClueFormSchema = z.object({
  content: z.string().min(1, "Conteúdo do texto é obrigatório"),
});

const imageClueFormSchema = z.object({
  url: z.string().url("URL da imagem inválida"),
  alt: z.string().optional(),
  fileName: z.string().optional(),
});

const videoClueFormSchema = z.object({
  url: z.string().url("URL do vídeo inválida"),
  fileName: z.string().optional(),
  duration: z.number().positive().optional(),
});

const audioClueFormSchema = z.object({
  url: z.string().url("URL do áudio inválida"),
  fileName: z.string().optional(),
  duration: z.number().positive().optional(),
});

export const clueFormSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("text"),
    ...baseClueFormSchema.shape,
    ...textClueFormSchema.shape,
  }),
  z.object({
    type: z.literal("image"),
    ...baseClueFormSchema.shape,
    ...imageClueFormSchema.shape,
  }),
  z.object({
    type: z.literal("video"),
    ...baseClueFormSchema.shape,
    ...videoClueFormSchema.shape,
  }),
  z.object({
    type: z.literal("audio"),
    ...baseClueFormSchema.shape,
    ...audioClueFormSchema.shape,
  }),
]);

export type ClueFormData = z.infer<typeof clueFormSchema>;
