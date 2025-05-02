// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer style={{ 
        padding: '1rem', 
        background: '#333', 
        color: 'white',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center'
      }}>
        © {new Date().getFullYear()} Pharmafast - All Rights Reserved
      </footer>
    );
  }