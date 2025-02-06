import { Route, Routes, HashRouter } from "react-router-dom";
import { routes } from "./constants/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Layout from "./components/Layout/Layout";
import NoteFound from "./components/NoteFound/NoteFound";
import PrivateRoute from "./constants/privateRoute";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="*" element={<NoteFound />} />
          <Route path="/" element={<Layout />}>
            <Route path={routes.login.path} element={routes.login.element} />
            <Route element={<PrivateRoute />}>
              {Object.values(routes)
                .filter((route) => route.path !== "/login") 
                .map(({ id, path, element }) => (
                  <Route key={id} path={path} element={element} />
                ))}
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
