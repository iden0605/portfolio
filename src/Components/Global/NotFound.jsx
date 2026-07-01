import { Link } from 'react-router-dom';
import '../../App.css';

function NotFound() {
  return (
    <main className="main-content" style={{ display: 'flex', justifyContent: 'center', paddingTop: '4rem' }}>
      <div className="section" style={{ maxWidth: '480px', textAlign: 'center', padding: '2.5rem 2rem' }}>
        <div style={{ fontFamily: 'monospace', marginBottom: '1rem' }}>
          <span style={{ color: '#a6da95', fontSize: '1rem' }}>❯ </span>
          <span style={{ color: '#cad3f5', fontSize: '1rem' }}>cat 404.md</span>
        </div>
        <h1 style={{ color: '#a6da95', fontFamily: 'monospace', fontSize: '3rem', margin: '0 0 0.5rem' }}>404</h1>
        <p style={{ color: '#cad3f5', fontFamily: 'monospace', marginBottom: '2rem' }}>
          Page not found.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            fontFamily: 'monospace',
            color: '#8aadf4',
            textDecoration: 'none',
            border: '1px solid #8aadf4',
            padding: '0.5rem 1.25rem',
            borderRadius: '4px',
          }}
        >
          ← go home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
