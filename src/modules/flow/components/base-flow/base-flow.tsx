import { useBaseFlowModel } from "./base-flow-model";
import { BaseFlowView } from "./base-flow-view";

export function BaseFlow() {
  return <BaseFlowView {...useBaseFlowModel()} />;
}
