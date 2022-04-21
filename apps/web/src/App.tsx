import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import * as Loadable from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Loadable.LoadableHomePage />} />
          <Route path="/product" element={<Outlet />}>
            <Route
              path=":productId"
              element={<Loadable.LoadableProductPage />}
            />
          </Route>
          <Route path="/cart" element={<Outlet />}>
            <Route path=":productId" element={<Loadable.LoadableCartPage />} />
            <Route index element={<Loadable.LoadableCartPage />} />
          </Route>
          <Route path="*" element={<div>PAGE NOT FOUND</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
