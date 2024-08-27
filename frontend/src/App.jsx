import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/home";
import { LoginPage, SignupPage } from "./pages/authentication";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<SignupPage />} path="/signup" />
    </Routes>
  );
}

export default App;
