import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/Historico";
import DefaultLayout from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/historico" element={<History />} />
      </Route>
    </Routes>
  );
}
