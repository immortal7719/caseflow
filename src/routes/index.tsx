import { createFileRoute } from "@tanstack/react-router";
import { FlowScreen } from "@/modules/flow/screens/flow-screen";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return <FlowScreen />;
}
