import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import { toast } from "sonner";

export function useExportFlowButtonModel() {
  const { toObject } = useReactFlow();

  const handleExportFlow = useCallback(() => {
    const flowData = toObject();
    const dataStr = JSON.stringify(flowData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;

    const exportFileDefaultName = `flow-${new Date().toISOString().split("T")[0]}.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
    linkElement.remove();

    toast.success("Fluxo exportado com sucesso!");
  }, [toObject]);

  return {
    handleExportFlow,
  };
}
