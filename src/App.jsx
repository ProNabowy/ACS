import { Fragment, Suspense } from "react";
import "./assets/styles/App.css";
import useHandleRoutes from "./routes/routes";
import { Footer, Header } from "./layouts";
import { useAppHooks } from "./hooks/AppHooks";
import { Loader } from "./components";

function App() {
  const { routes } = useHandleRoutes();

  const { useSetLogo } = useAppHooks();

  useSetLogo();

  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Header />

        <main className="flex-1">{routes}</main>

        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default App;
