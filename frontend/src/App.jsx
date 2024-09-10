import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/home";
import { LoginPage, SignupPage } from "./pages/authentication";
import { Layout } from "./components/Layout";
import { MensPage, WomensPage } from "./pages/products";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<HomePage />} path="/" />
        <Route element={<MensPage />} path="/mens" />
        <Route element={<WomensPage />} path="/womens" />
      </Route>
      <Route element={<LoginPage />} path="/login" />
      <Route element={<SignupPage />} path="/signup" />
    </Routes>
  );
}

export default App;
