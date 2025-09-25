import { useExportFlowButtonModel } from "./export-flow-button-model";
import { ExportFlowButtonView } from "./export-flow-button-view";

export function ExportFlowButton() {
  return <ExportFlowButtonView {...useExportFlowButtonModel()} />;
}
