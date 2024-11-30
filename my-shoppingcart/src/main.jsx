import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartProvider'; 
import routes from './routes';

const Main = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {routes.map(({ path, element }, idx) => (
            <Route key={idx} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </CartProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);

export default Main;
