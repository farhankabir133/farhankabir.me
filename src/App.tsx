import { lazy, Suspense } from "react";
import "./App.css";

const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import LazyCharacter from "./components/LazyCharacter";

function App() {
  return (
    <main>
      <LoadingProvider>
        <Suspense fallback={null}>
          <MainContainer>
            <ErrorBoundary fallback={<p>Something went wrong with the 3D model.</p>}>
              <LazyCharacter />
            </ErrorBoundary>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </main>
  );
}

export default App;
