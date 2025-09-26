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

export function AudioFields() {
  const { control } = useFormContext<ClueFormData>();

  return (
    <>
      <FormField
        control={control}
        defaultValue=""
        name="audio.url"
        render={({ field }) => (
          <FormItem>
            <FormLabel>URL do Áudio</FormLabel>
            <FormControl>
              <Input
                placeholder="https://exemplo.com/audio.mp3"
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
        name="audio.fileName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome do Arquivo (opcional)</FormLabel>
            <FormControl>
              <Input placeholder="audio.mp3" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="audio.duration"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Duração em segundos (opcional)</FormLabel>
            <FormControl>
              <Input
                min="0"
                placeholder="60"
                step="1"
                type="number"
                {...field}
                onChange={(e) =>
                  field.onChange(
                    e.target.value ? Number(e.target.value) : undefined
                  )
                }
                value={field.value ?? ""}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
