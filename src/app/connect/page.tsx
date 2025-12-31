'use client';

export default function ConnectPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        textAlign: 'left'
      }}>
        {/* Header */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 600,
          margin: '0 0 0.5rem 0',
          lineHeight: 1.2,
          color: '#000000'
        }}>
          Lahari Karrotu
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          fontWeight: 400,
          margin: '0 0 3rem 0',
          color: '#000000'
        }}>
          AI / Full-Stack Engineer
        </p>

        {/* One-line value statement */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          fontWeight: 400,
          margin: '0 0 3rem 0',
          lineHeight: 1.6,
          color: '#000000'
        }}>
          I build production-ready AI systems and agentic platforms that integrate into real workflows, with a focus on reliable backend services and maintainable full-stack solutions.
        </p>

        {/* Primary actions */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <a
            href="https://www.linkedin.com/in/lahari-karrotu"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '1rem 1.5rem',
              backgroundColor: '#000000',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              textAlign: 'center',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Connect on LinkedIn
          </a>
          <a
            href="https://github.com/laharikarrotu/ScanToActionAI-SCANX"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '1rem 1.5rem',
              backgroundColor: '#000000',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              textAlign: 'center',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            View ScanX on GitHub
          </a>
          <a
            href="https://laharikarrotuportfolio.site"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '1rem 1.5rem',
              backgroundColor: '#000000',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              textAlign: 'center',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            View Portfolio
          </a>
        </div>

        {/* Contact */}
        <p style={{
          fontSize: '0.875rem',
          fontWeight: 400,
          margin: 0,
          color: '#000000'
        }}>
          Contact: <a href="mailto:laharikarrotu24@gmail.com" style={{ color: '#000000', textDecoration: 'underline' }}>laharikarrotu24@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

