import { ExportFlowButton } from "../export-flow-button";
import { NodeList } from "../node-list";

export function FlowHeader() {
  return (
    <header className="border-gray-200 border-b bg-white px-4 py-3 shadow-sm sm:px-6 sm:py-4">
      <div className="hidden items-center justify-between sm:flex">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-gray-900 text-lg" id="main-heading">
            Investigação Criminal
          </h1>
          <hr className="h-6 w-px border-0 border-gray-300 border-l" />
          <nav aria-label="Ferramentas de evidência">
            <NodeList />
          </nav>
        </div>

        <div aria-label="Ações do fluxo" role="toolbar">
          <ExportFlowButton />
        </div>
      </div>

      <div className="sm:hidden">
        <div className="mb-3 flex items-center justify-between">
          <h1
            className="font-semibold text-gray-900 text-lg"
            id="main-heading-mobile"
          >
            Investigação Criminal
          </h1>
          <div aria-label="Ações do fluxo" role="toolbar">
            <ExportFlowButton />
          </div>
        </div>

        <nav
          aria-label="Ferramentas de evidência"
          className="flex justify-center"
        >
          <NodeList />
        </nav>
      </div>
    </header>
  );
}
