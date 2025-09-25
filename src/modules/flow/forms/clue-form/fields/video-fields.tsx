import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/core/components/ui/form";
import { Input } from "@/core/components/ui/input";
import type { ClueFormData } from "../../../schemas/clue-schema";

export function VideoFields() {
  const { control } = useFormContext<ClueFormData>();

  return (
    <>
      <FormField
        control={control}
        defaultValue=""
        name="url"
        render={({ field }) => (
          <FormItem>
            <FormLabel>URL do Vídeo</FormLabel>
            <FormControl>
              <Input
                placeholder="https://exemplo.com/video.mp4"
                type="url"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        defaultValue=""
        name="fileName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome do Arquivo (opcional)</FormLabel>
            <FormControl>
              <Input placeholder="video.mp4" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="duration"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Duração em segundos (opcional)</FormLabel>
            <FormControl>
              <Input
                min="0"
                placeholder="120"
                step="1"
                type="number"
                {...field}
                onChange={(e) =>
                  field.onChange(
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
