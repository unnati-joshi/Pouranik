// TourOverlay.jsx - Custom tour guide overlay
import React, { useEffect, useState } from 'react';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.4)',
  zIndex: 9999,
  pointerEvents: 'auto',
};

const tooltipStyle = {
  position: 'absolute',
  background: 'rgba(30,41,59,0.7)', // semi-transparent dark background
  borderRadius: '12px',
  boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)',
  padding: '1.5rem',
  minWidth: '280px',
  maxWidth: '340px',
  minHeight: '120px',
  zIndex: 10000,
  color: '#fff', // white text for contrast
  fontSize: '1.08rem',
  border: '2px solid #0ea5e9',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const buttonStyle = {
  padding: '0.7em 2em',
  borderRadius: '8px',
  border: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  background: '#222',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background 0.2s',
};
const buttonDisabledStyle = {
  ...buttonStyle,
  opacity: 0.5,
  cursor: 'not-allowed',
};

function getTargetRect(selector) {
  const el = document.querySelector(`[data-tour="${selector}"]`);
  if (!el) return null;
  return el.getBoundingClientRect();
}

export default function TourOverlay({ step, totalSteps, onNext, onPrev, onClose, visible }) {
  const [tooltipPos, setTooltipPos] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    if (!visible) return;
    const rect = getTargetRect(step.selector);
    if (rect) {
      // Position tooltip below or above the element
      const top = rect.bottom + 12;
      const left = rect.left + rect.width / 2;
      setTooltipPos({
        top: Math.min(top, window.innerHeight - 120),
        left: Math.max(24, Math.min(left, window.innerWidth - 340)),
      });
    } else {
      setTooltipPos({ top: '50%', left: '50%' });
    }
  }, [step, visible]);

  if (!visible) return null;

  // Highlight box
  const rect = getTargetRect(step.selector);
  let highlight = {};
  if (rect) {
    if (
      step.selector === 'footer-section' ||
      step.selector === 'powered-by-google-books-section' ||
      step.selector === 'browse-genre-section' ||
      step.selector === 'why-choose-pouranik-section' ||
      step.selector === 'find-next-books-section'
    ) {
      // No highlight/glow for these steps
      highlight = {};
    } else {
      // Glow for all other steps
      highlight = {
        position: 'fixed',
        top: rect.top - 10,
        left: rect.left - 10,
        width: rect.width + 20,
        height: rect.height + 20,
        border: '4px solid #38bdf8',
        borderRadius: '16px',
        boxShadow: '0 0 32px 12px #38bdf8, 0 0 0 9999px rgba(0,0,0,0.3)',
        pointerEvents: 'none',
        zIndex: 10001,
        transition: 'all 0.2s',
      };
    }
  }

  // For special steps, show overlay as floating modal in center
  const floatingModalSelectors = [
    'why-choose-pouranik-section',
    'powered-by-google-books-section',
    'find-next-books-section',
    'footer-section',
  ];
  const isFloatingModal = floatingModalSelectors.includes(step.selector);

  return (
    <div style={overlayStyle}>
      {rect && <div style={highlight} />}
      <div
        style={{
          ...tooltipStyle,
          ...(isFloatingModal
            ? { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
            : { top: tooltipPos.top, left: tooltipPos.left, transform: 'translate(-50%, 0)' }
          ),
        }}
      >
        {rect ? (
          <>
            <div style={{ fontWeight: 700, marginBottom: 10, fontSize: '1.15rem', color: '#38bdf8' }}>{step.title}</div>
            <div style={{ marginBottom: 18, color: '#fff', lineHeight: 1.5 }}>{step.content}</div>
          </>
        ) : (
          <div style={{ color: '#f87171', fontWeight: 600, textAlign: 'center', margin: '20px 0' }}>
            Step not available on this page.<br />Try navigating to a different section or page.
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginTop: 10 }}>
          <button onClick={onPrev} disabled={step.index === 0} style={step.index === 0 ? buttonDisabledStyle : buttonStyle}>Prev</button>
          <span style={{ fontSize: 14, color: '#888', alignSelf: 'center' }}>{step.index + 1} / {totalSteps}</span>
          {step.index === totalSteps - 1 ? (
            <button onClick={onClose} style={buttonStyle}>Finish</button>
          ) : (
            <button onClick={onNext} style={buttonStyle}>Next</button>
          )}
        </div>
        <button onClick={onClose} style={{ position: 'absolute', top: 8, right: 12, background: 'none', border: 'none', fontSize: 22, color: '#888', cursor: 'pointer', fontWeight: 700 }} aria-label="Close tour">×</button>
        <button onClick={onClose} style={{ position: 'absolute', top: 8, right: 48, background: 'rgba(30,41,59,0.7)', border: '2px solid #0ea5e9', borderRadius: 6, color: '#38bdf8', fontWeight: 600, fontSize: 15, padding: '2px 16px', cursor: 'pointer' }}>Skip</button>
      </div>
    </div>
  );
} 