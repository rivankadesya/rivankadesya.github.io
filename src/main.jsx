import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import "../index.css";

// Debug logging

// Error boundary wrapper
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("❌ Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            background: "#0f0f1e",
            color: "white",
            padding: "20px",
          }}
        >
          <h2 style={{ color: "#00d9ff", marginBottom: "20px" }}>
            ❌ Application Error
          </h2>
          <pre
            style={{
              color: "#ff4444",
              background: "#1a1a2e",
              padding: "15px",
              borderRadius: "8px",
              overflow: "auto",
              maxWidth: "800px",
            }}
          >
            {this.state.error?.message ||
              this.state.error?.toString() ||
              "Unknown error"}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#00d9ff",
              color: "#0f0f1e",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            🔄 Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

try {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Root element not found!");
  }

  ReactDOM.createRoot(root).render(
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
} catch (error) {
  console.error("❌ Failed to render app:", error);
  document.body.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; background: #0f0f1e; color: white; padding: 20px;">
      <h2 style="color: #00d9ff; margin-bottom: 20px;">❌ Failed to Load Application</h2>
      <pre style="color: #ff4444; background: #1a1a2e; padding: 15px; border-radius: 8px; overflow: auto; max-width: 800px;">${
        error.message || error.toString()
      }</pre>
      <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #00d9ff; color: #0f0f1e; border: none; border-radius: 5px; cursor: pointer;">🔄 Reload Page</button>
    </div>
  `;
}
