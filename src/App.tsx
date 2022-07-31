import { Suspense } from "react";
import RelayEnvironment from "./RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import AppRouter from "./components/routers/AppRouter";

export default function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <AppRouter />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
