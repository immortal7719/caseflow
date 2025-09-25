import { createContext, type ReactNode, useContext, useMemo } from "react";
import type { ReorderCluesParams } from "../types/reorder";

export type ClueReorderContextType = {
  handleGlobalReorderClues: (params: ReorderCluesParams) => void;
};

export const ClueReorderContext = createContext<ClueReorderContextType | null>(
  null
);

export type ClueReorderProviderProps = {
  children: ReactNode;
  handleGlobalReorderClues: ClueReorderContextType["handleGlobalReorderClues"];
};

export function ClueReorderProvider({
  children,
  handleGlobalReorderClues,
}: ClueReorderProviderProps) {
  const contextValue = useMemo(
    () => ({ handleGlobalReorderClues }),
    [handleGlobalReorderClues]
  );

  return (
    <ClueReorderContext.Provider value={contextValue}>
      {children}
    </ClueReorderContext.Provider>
  );
}

export function useClueReorder() {
  const context = useContext(ClueReorderContext);

  if (!context) {
    throw new Error("useClueReorder must be used within a ClueReorderProvider");
  }

  return context;
}
