import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Outlet />}>
            <Route path=":productId" element={<ProductPage />} />
          </Route>
          <Route path="/cart" element={<Outlet />}>
            <Route path=":productId" element={<div>cart home</div>} />
            <Route index element={<div>cart home s</div>} />
          </Route>
          <Route path="*" element={<div>PAGE NOT FOUND</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
