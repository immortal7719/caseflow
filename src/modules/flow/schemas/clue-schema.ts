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
  duration: z
    .number()
    .positive({ message: "Duração deve ser um número positivo" })
    .optional(),
});

const audioClueFormSchema = z.object({
  url: z.string().url("URL do áudio inválida"),
  fileName: z.string().optional(),
  duration: z
    .number()
    .positive({ message: "Duração deve ser um número positivo" })
    .optional(),
});

export const clueFormSchema = z.discriminatedUnion("type", [
  z
    .object({
      type: z.literal("text"),
      text: textClueFormSchema,
    })
    .merge(baseClueFormSchema),
  z
    .object({
      type: z.literal("image"),
      image: imageClueFormSchema,
    })
    .merge(baseClueFormSchema),
  z
    .object({
      type: z.literal("video"),
      video: videoClueFormSchema,
    })
    .merge(baseClueFormSchema),
  z
    .object({
      type: z.literal("audio"),
      audio: audioClueFormSchema,
    })
    .merge(baseClueFormSchema),
]);

export type ClueFormData = z.infer<typeof clueFormSchema>;
