declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackContactConversion() {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(new CustomEvent('movex:contact-conversion'));
  window.gtag?.('event', 'generate_lead');
}
