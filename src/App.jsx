import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SavedPasswords from "./Pages/SavedPasswords";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/savedPasswords" Component={SavedPasswords} />
        <Route path="*" element={<Navigate to="/" replace="true" />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
