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

export function ImageFields() {
  const { control } = useFormContext<ClueFormData>();

  return (
    <>
      <FormField
        control={control}
        defaultValue=""
        name="url"
        render={({ field }) => (
          <FormItem>
            <FormLabel>URL da Imagem</FormLabel>
            <FormControl>
              <Input
                placeholder="https://exemplo.com/imagem.jpg"
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
        name="alt"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Texto Alternativo (opcional)</FormLabel>
            <FormControl>
              <Input placeholder="Descrição da imagem..." {...field} />
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
              <Input placeholder="imagem.jpg" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
