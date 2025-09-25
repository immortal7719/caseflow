import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/core/components/ui/form";
import { Textarea } from "@/core/components/ui/textarea";
import type { ClueFormData } from "../../../schemas/clue-schema";

export function TextFields() {
  const { control } = useFormContext<ClueFormData>();

  return (
    <FormField
      control={control}
      defaultValue=""
      name="content"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Conteúdo do Texto</FormLabel>
          <FormControl>
            <Textarea
              className="min-h-24 resize-none"
              placeholder="Digite o conteúdo da pista..."
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
