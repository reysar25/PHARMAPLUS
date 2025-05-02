// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/products" style={{ marginRight: '1rem' }}>Products</Link>
      <Link to="/cart" style={{ marginRight: '1rem' }}>Cart</Link>
      <Link to="/checkout" style={{ marginRight: '1rem' }}>Checkout</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}