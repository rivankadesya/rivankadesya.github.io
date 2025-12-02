import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

// Base path untuk GitHub Pages - harus sesuai dengan base di vite.config.js
// Basename tidak menggunakan trailing slash, berbeda dengan base di vite.config.js
const repoName = import.meta.env.VITE_REPO_NAME || "website-portofolio";
const basename = repoName ? `/${repoName}` : "";

// Error boundary component
const ErrorFallback = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-4 text-picto-primary">
        Something went wrong
      </h2>
      <pre className="text-red-400 text-sm mb-4">
        {error?.message || "Unknown error"}
      </pre>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-picto-primary text-gray-900 rounded hover:bg-picto-primary/80"
      >
        Reload Page
      </button>
    </div>
  );
};

const Home = lazy(() =>
  import("../pages/Home").catch((error) => {
    console.error("Failed to load Home component:", error);
    throw error;
  })
);

const Main = lazy(() =>
  import("../layouts/Main").catch((error) => {
    console.error("Failed to load Main component:", error);
    throw error;
  })
);

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      errorElement: <ErrorFallback />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
      ],
    },
  ],
  { basename: basename }
);
