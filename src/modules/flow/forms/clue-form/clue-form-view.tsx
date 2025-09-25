import { FormProvider } from "react-hook-form";
import { Button } from "@/core/components/ui/button";
import { DialogClose, DialogFooter } from "@/core/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/core/components/ui/form";
import { Input } from "@/core/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/components/ui/select";
import { Textarea } from "@/core/components/ui/textarea";
import type { ClueMediaType } from "../../types/clue";
import { clueTypes } from "./clue-form.utils";
import type { useClueFormModel } from "./clue-form-model";
import { AudioFields, ImageFields, TextFields, VideoFields } from "./fields";

type ClueFormViewProps = ReturnType<typeof useClueFormModel>;

const renderTypeSpecificFields = (type: ClueMediaType) => {
  switch (type) {
    case "text":
      return <TextFields />;
    case "image":
      return <ImageFields />;
    case "video":
      return <VideoFields />;
    case "audio":
      return <AudioFields />;
    default:
      return null;
  }
};

export function ClueFormView({
  form,
  isEditing,
  watchedType,
  handleFormSubmit,
}: ClueFormViewProps) {
  return (
    <FormProvider {...form}>
      <form
        className="space-y-4"
        onSubmit={form.handleSubmit(handleFormSubmit)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Digite o título da pista..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição (opcional)</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  placeholder="Descrição adicional da pista..."
                  rows={2}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Mídia</FormLabel>
              <Select defaultValue={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de mídia" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {clueTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          {type.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {renderTypeSpecificFields(watchedType)}

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </DialogClose>

          <Button type="submit">
            {isEditing ? "Salvar Alterações" : "Adicionar Pista"}
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
}
