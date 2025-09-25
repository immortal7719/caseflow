import { type Edge, type Node, useReactFlow } from "@xyflow/react";
import { useCallback, useEffect, useState } from "react";

type UseUndoRedoProps = {
  maxHistorySize: number;
  enableShortcuts: boolean;
};

type UseUndoRedoReturn = {
  undo: () => void;
  redo: () => void;
  takeSnapshot: () => void;
  canUndo: boolean;
  canRedo: boolean;
};

type HistoryItem = {
  nodes: Node[];
  edges: Edge[];
};

const defaultOptions: UseUndoRedoProps = {
  maxHistorySize: 100,
  enableShortcuts: true,
};

export function useUndoRedo({
  maxHistorySize = defaultOptions.maxHistorySize,
  enableShortcuts = defaultOptions.enableShortcuts,
}: UseUndoRedoProps = defaultOptions): UseUndoRedoReturn {
  const [past, setPast] = useState<HistoryItem[]>([]);
  const [future, setFuture] = useState<HistoryItem[]>([]);

  const { setNodes, setEdges, getNodes, getEdges } = useReactFlow();

  const takeSnapshot = useCallback(() => {
    setPast((prevState) => [
      ...prevState.slice(
        prevState.length - maxHistorySize + 1,
        prevState.length
      ),
      { nodes: getNodes(), edges: getEdges() },
    ]);

    setFuture([]);
  }, [getNodes, getEdges, maxHistorySize]);

  const undo = useCallback(() => {
    const pastState = past.at(-1);

    if (pastState) {
      setPast((prevState) => prevState.slice(0, prevState.length - 1));
      setFuture((prevState) => [
        ...prevState,
        { nodes: getNodes(), edges: getEdges() },
      ]);

      setNodes(pastState.nodes);
      setEdges(pastState.edges);
    }
  }, [setNodes, setEdges, getNodes, getEdges, past]);

  const redo = useCallback(() => {
    const futureState = future.at(-1);

    if (futureState) {
      setFuture((prevState) => prevState.slice(0, prevState.length - 1));
      setPast((prevState) => [
        ...prevState,
        { nodes: getNodes(), edges: getEdges() },
      ]);

      setNodes(futureState.nodes);
      setEdges(futureState.edges);
    }
  }, [setNodes, setEdges, getNodes, getEdges, future]);

  useEffect(() => {
    if (!enableShortcuts) {
      return;
    }

    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "y" && (event.ctrlKey || event.metaKey)) {
        redo();
      } else if (event.key === "z" && (event.ctrlKey || event.metaKey)) {
        undo();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [undo, redo, enableShortcuts]);

  return {
    undo,
    redo,
    takeSnapshot,
    canUndo: !past.length,
    canRedo: !future.length,
  };
}
