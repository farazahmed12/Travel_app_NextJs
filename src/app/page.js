'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [attempted, setAttempted] = useState(false);

  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);

    if (checkMobile && !attempted) {
      attemptOpenApp();
    }
  }, [attempted]);

  const attemptOpenApp = () => {
    setAttempted(true);
    const currentPath = window.location.pathname;
    const queryString = window.location.search;
    const deepLink = `awesomeproject://${currentPath}${queryString}`;
    
    console.log('Attempting to open:', deepLink);
    window.location.href = deepLink;
  };

  const handleOpenApp = () => {
    attemptOpenApp();
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Travel App</h1>
        
        {isMobile ? (
          <>
            <p style={styles.subtitle}>Opening the app...</p>
            <button onClick={handleOpenApp} style={styles.button}>
              Open in App
            </button>
            <p style={styles.hint}>
              Don't have the app? <a href="#" style={styles.link}>Download now</a>
            </p>
          </>
        ) : (
          <>
            <p style={styles.subtitle}>
              Download our mobile app for the best experience
            </p>
            <div style={styles.badges}>
              <a href="#" style={styles.badge}>📱 Download on iOS</a>
              <a href="#" style={styles.badge}>🤖 Download on Android</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f2f5',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    padding: '20px',
  },
  content: {
    textAlign: 'center',
    maxWidth: '400px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#007AFF',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '15px',
    boxShadow: '0 2px 8px rgba(0,122,255,0.3)',
  },
  hint: {
    fontSize: '14px',
    color: '#999',
  },
  link: {
    color: '#007AFF',
    textDecoration: 'none',
  },
  badges: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  badge: {
    display: 'block',
    padding: '12px 24px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '14px',
  },
};