import { Download } from "lucide-react";
import { Button } from "@/core/components/ui/button";
import type { useExportFlowButtonModel } from "./export-flow-button-model";

type ExportFlowButtonViewProps = ReturnType<typeof useExportFlowButtonModel>;

export function ExportFlowButtonView({
  handleExportFlow,
}: ExportFlowButtonViewProps) {
  return (
    <Button
      aria-label="Exportar fluxo de investigação no formato JSON"
      className="flex items-center gap-1 sm:gap-2"
      onClick={handleExportFlow}
      size="sm"
      variant="outline"
    >
      <Download aria-hidden="true" className="sm:hidden" size={14} />
      <Download aria-hidden="true" className="hidden sm:block" size={16} />
      <span className="text-xs sm:text-sm">Exportar JSON (Jey-San)</span>
    </Button>
  );
}
