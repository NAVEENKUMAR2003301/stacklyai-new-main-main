import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import FormDataContextProvider from "./context/FormDataContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <FormDataContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormDataContextProvider>
  </UserContextProvider>
);
