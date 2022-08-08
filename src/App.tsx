import { Suspense } from "react";
import RelayEnvironment from "RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import AppRouter from "routers/AppRouter";
import "globalStyles";

const App = () => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={"Loading..."}>
      <AppRouter />
    </Suspense>
  </RelayEnvironmentProvider>
);

export default App;
