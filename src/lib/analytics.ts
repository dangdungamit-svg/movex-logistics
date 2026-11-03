declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Records a genuine quote request after the backend has accepted it.
 * This is the primary lead conversion used for future Google Ads optimisation.
 */
export function trackContactConversion() {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(new CustomEvent('movex:contact-conversion'));
  window.gtag?.('event', 'generate_lead');
  window.gtag?.('event', 'conversion', {
    send_to: 'AW-18477461376/lOT-CI_d0I8dEIDf3upE',
  });
}

/**
 * Records a contact-channel click separately from a completed quote request.
 * A click on a phone, WhatsApp or email link is intent, not a confirmed lead.
 */
export function trackContactIntent(method: 'phone' | 'whatsapp' | 'email') {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(new CustomEvent('movex:contact-intent', { detail: { method } }));
  window.gtag?.('event', 'contact_intent', { method });
}
