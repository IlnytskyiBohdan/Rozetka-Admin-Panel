import Login from "../pages/Login";
import ProductsPreiew from "../pages/ProductsPreview";
import ProductsTable from "../pages/ProductsTable";

export const routes = {
  login: {
    element: <Login />,
    path: "/login",
    id: 1,
  },
  products_table: {
    element: <ProductsPreiew />,
    path: "/products-preview",
    id: 2,
  },
  products_previe: {
    element: <ProductsTable />,
    path: "/products-table",
    id: 3,
  },
};
