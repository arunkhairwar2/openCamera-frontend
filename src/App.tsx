import { RouterProvider } from "react-router";
import "./App.css";
import { routes } from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={routes} />;
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
