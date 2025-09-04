import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import { BookingsProvider } from "./components/Bookings.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <BookingsProvider>
            <App />
        </BookingsProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
