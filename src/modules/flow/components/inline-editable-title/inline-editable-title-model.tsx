import { type ChangeEvent, type KeyboardEvent, useRef, useState } from "react";

type InlineEditableTitleModelProps = {
  value: string;
  placeholder?: string;
  onSave: (newValue: string) => void;
};

export function useInlineEditableTitleModel({
  value,
  onSave,
  placeholder = "Digite o título...",
}: InlineEditableTitleModelProps) {
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const trimmedValue = editValue.trim();

    if (trimmedValue !== value) {
      onSave(trimmedValue);
    }
  };

  const handleCancel = () => {
    setEditValue(value);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
      inputRef.current?.blur();
    }

    if (e.key === "Escape") {
      e.preventDefault();
      handleCancel();
      inputRef.current?.blur();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  return {
    inputRef,
    editValue,
    handleSave,
    placeholder,
    handleChange,
    handleKeyDown,
  };
}
