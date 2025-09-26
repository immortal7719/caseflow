import { type ComponentProps, memo } from "react";
import { useDropPlaceholderModel } from "./drop-placeholder-model";
import { DropPlaceholderView } from "./drop-placeholder-view";

type DropPlaceholderProps = Omit<
  Parameters<typeof useDropPlaceholderModel>[0],
  keyof ReturnType<typeof useDropPlaceholderModel>
> &
  Omit<ComponentProps<"div">, "onDrop" | "ref">;

function DropPlaceholderComponent({
  onDrop,
  groupId,
  insertIndex,
  ...props
}: DropPlaceholderProps) {
  return (
    <DropPlaceholderView
      {...props}
      {...useDropPlaceholderModel({
        onDrop,
        groupId,
        insertIndex,
      })}
    />
  );
}

export const DropPlaceholder = memo(DropPlaceholderComponent);
