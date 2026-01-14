'use client';

export default function ConnectPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1.5rem',
      backgroundColor: '#ffffff'
    }}>
      <div style={{
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        {/* Header */}
        <h1 style={{
          fontSize: 'clamp(1.875rem, 6vw, 2.75rem)',
          fontWeight: 700,
          margin: '0 0 0.75rem 0',
          lineHeight: 1.15,
          color: '#000000',
          letterSpacing: '-0.03em'
        }}>
          Lahari Karrotu
        </h1>
        <p style={{
          fontSize: 'clamp(1.0625rem, 3.5vw, 1.25rem)',
          fontWeight: 500,
          margin: '0 0 0.5rem 0',
          color: '#4a4a4a',
          letterSpacing: '-0.01em'
        }}>
          AI / Full-Stack Engineer
        </p>
        <p style={{
          fontSize: 'clamp(0.875rem, 2.5vw, 0.9375rem)',
          fontWeight: 400,
          margin: '0 0 2.5rem 0',
          color: '#888888',
          lineHeight: 1.5
        }}>
          4+ years • Production AI systems • LLM agents • Real-time ML pipelines
        </p>

        {/* One-line value statement */}
        <p style={{
          fontSize: 'clamp(0.9375rem, 2.5vw, 1.0625rem)',
          fontWeight: 400,
          margin: '0 0 3rem 0',
          lineHeight: 1.65,
          color: '#2a2a2a',
          maxWidth: '480px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          I build production-ready AI systems and agentic platforms that integrate into real workflows, with a focus on reliable backend services and maintainable full-stack solutions.
        </p>

        {/* Primary actions - Mobile-optimized, thumb-friendly */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '2.5rem',
          maxWidth: '400px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          {/* LinkedIn - Primary action for career events */}
          <a
            href="https://www.linkedin.com/in/laharikarrotu/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              padding: '1.125rem 1.5rem',
              backgroundColor: '#0077B5',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              textAlign: 'center',
              borderRadius: '10px',
              cursor: 'pointer',
              minHeight: '56px',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#006399';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0077B5';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Connect on LinkedIn
          </a>
          
          {/* Resume Download - Important for career events */}
          <a
            href="/projects/LahariKarrotuSE.pdf"
            download="Lahari_Karrotu_Software_Engineer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              padding: '1.125rem 1.5rem',
              backgroundColor: '#000000',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              textAlign: 'center',
              borderRadius: '10px',
              cursor: 'pointer',
              minHeight: '56px',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Download Resume
          </a>
          
          {/* Portfolio */}
          <a
            href="https://laharikarrotuportfolio.site"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              padding: '1.125rem 1.5rem',
              backgroundColor: '#000000',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              textAlign: 'center',
              borderRadius: '10px',
              cursor: 'pointer',
              minHeight: '56px',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View Portfolio
          </a>
        </div>

        {/* Contact - Smaller, less prominent */}
        <p style={{
          fontSize: '0.875rem',
          fontWeight: 400,
          margin: 0,
          color: '#666666'
        }}>
          <a 
            href="mailto:laharikarrotu24@gmail.com" 
            style={{ 
              color: '#000000', 
              textDecoration: 'underline',
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            laharikarrotu24@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

