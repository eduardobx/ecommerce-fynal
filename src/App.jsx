import { useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nabvar from "./components/Nabvar";
import ProtectedRoutes from "./components/ProtectRoutes";
import Spiners from "./components/Spiners";

import Login from "./componentsPag/Login";
import MyCompras from "./componentsPag/MyCompras";
import ProductDetail from "./componentsPag/ProductDetail";
import Products from "./componentsPag/Products";

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <HashRouter>
      <Nabvar />
      {isLoading && <Spiners />}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/misCompras" element={<MyCompras />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
