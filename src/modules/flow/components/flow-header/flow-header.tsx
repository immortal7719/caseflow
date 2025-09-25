import { ExportFlowButton } from "../export-flow-button";
import { NodeList } from "../node-list";

export function FlowHeader() {
  return (
    <header className="border-gray-200 border-b bg-white px-4 py-3 shadow-sm sm:px-6 sm:py-4">
      <div className="hidden items-center justify-between sm:flex">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-gray-900 text-lg">
            Investigação Criminal
          </h1>
          <div className="h-6 border-gray-300 border-l" />
          <NodeList />
        </div>

        <ExportFlowButton />
      </div>

      <div className="sm:hidden">
        <div className="mb-3 flex items-center justify-between">
          <h1 className="font-semibold text-gray-900 text-lg">
            Investigação Criminal
          </h1>
          <ExportFlowButton />
        </div>

        <div className="flex justify-center">
          <NodeList />
        </div>
      </div>
    </header>
  );
}
