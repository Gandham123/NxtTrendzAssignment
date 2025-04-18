import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomeEl from './Components/Home';
import ProductsEl from './Components/Products';
import CartEl from './Components/Cart';
import LoginEl from './Components/Login';
import ProtectedRoute from './Components/Protected';
import FullProductDetailsEl from './Components/FullProductDetails';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/login" element={<LoginEl />} />
        <Route exact path="/" element={<ProtectedRoute><HomeEl /></ProtectedRoute>} />
        <Route exact path="/products" element={<ProtectedRoute><ProductsEl /></ProtectedRoute>} />
        <Route exact path="/products/:id" element={<ProtectedRoute><FullProductDetailsEl /></ProtectedRoute>} />
        <Route exact path="/cart" element={<ProtectedRoute><CartEl /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
