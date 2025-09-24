import { createFileRoute } from "@tanstack/react-router";
import { Flow } from "@/modules/flow/components/flow";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center">
      <Flow />
    </div>
  );
}
