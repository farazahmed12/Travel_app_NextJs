// app/payment-success/page.js (for App Router) OR pages/payment-success.js (for Pages Router)
'use client'; // Add this if using App Router

import { useEffect, useState } from 'react';

export default function PaymentSuccess() {
  const [countdown, setCountdown] = useState(3);
  const [showManualButton, setShowManualButton] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};
    urlParams.forEach((value, key) => {
      params[key] = value;
    });
    setQueryParams(params);

    // Build query string for deep link
    const deepLinkParams = new URLSearchParams({
      payment_status: 'success',
      transaction_id: params.transaction_id || 'unknown',
      amount: params.amount || '0',
      timestamp: Date.now(),
      ...params
    });

    // Build deep link with custom scheme
    const deepLink = `awesomeproject://payment-success?${deepLinkParams.toString()}`;
    
    console.log('Redirecting to app:', deepLink);

    // Start countdown
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Attempt to open app after countdown
    const redirectTimer = setTimeout(() => {
      window.location.href = deepLink;
      
      // Show manual button after 2 seconds if app didn't open
      setTimeout(() => {
        setShowManualButton(true);
      }, 2000);
    }, 3000);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(redirectTimer);
    };
  }, []);

  const manualRedirect = () => {
    const params = new URLSearchParams({
      payment_status: 'success',
      transaction_id: queryParams.transaction_id || 'unknown',
      amount: queryParams.amount || '0',
      timestamp: Date.now(),
    });
    const deepLink = `awesomeproject://payment-success?${params.toString()}`;
    window.location.href = deepLink;
  };

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spinner {
          animation: spin 1s linear infinite;
        }
      `}</style>
      
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.checkmark}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="28" fill="#4CAF50" />
              <path 
                d="M20 30 L27 37 L40 23" 
                stroke="white" 
                strokeWidth="4" 
                fill="none" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 style={styles.title}>Payment Successful!</h1>
          <p style={styles.subtitle}>Your transaction has been completed</p>

          {queryParams.transaction_id && (
            <div style={styles.details}>
              <div style={styles.detailRow}>
                <span style={styles.label}>Transaction ID:</span>
                <span style={styles.value}>{queryParams.transaction_id}</span>
              </div>
              {queryParams.amount && (
                <div style={styles.detailRow}>
                  <span style={styles.label}>Amount:</span>
                  <span style={styles.value}>${queryParams.amount}</span>
                </div>
              )}
            </div>
          )}

          <div style={styles.redirectInfo}>
            {countdown > 0 ? (
              <>
                <div className="spinner" style={styles.spinner}></div>
                <p style={styles.redirectText}>
                  Redirecting to app in {countdown}...
                </p>
              </>
            ) : showManualButton ? (
              <>
                <button onClick={manualRedirect} style={styles.button}>
                  Open in App
                </button>
                <p style={styles.hint}>
                  App didn't open? Make sure it's installed on your device.
                </p>
              </>
            ) : (
              <>
                <div className="spinner" style={styles.spinner}></div>
                <p style={styles.redirectText}>Opening app...</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    padding: '20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '440px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
  },
  checkmark: {
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 12px',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    margin: '0 0 24px',
  },
  details: {
    backgroundColor: '#f9fafb',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '24px',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
  },
  label: {
    fontSize: '14px',
    color: '#666',
    fontWeight: '500',
  },
  value: {
    fontSize: '14px',
    color: '#1a1a1a',
    fontWeight: '600',
  },
  redirectInfo: {
    marginTop: '32px',
  },
  spinner: {
    width: '40px',
    height: '40px',
    margin: '0 auto 16px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #007AFF',
    borderRadius: '50%',
  },
  redirectText: {
    fontSize: '15px',
    color: '#666',
    margin: '0',
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
    marginBottom: '12px',
    transition: 'background-color 0.2s',
  },
  hint: {
    fontSize: '13px',
    color: '#999',
    margin: '0',
  },
};