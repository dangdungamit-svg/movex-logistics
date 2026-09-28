import { renderToString } from 'react-dom/server';
import App from './App';

export function render(pathname: string): string {
  const origin = 'https://movex-logistics-webs-zpae.bolt.host';
  (globalThis as Record<string, unknown>).window = {
    location: {
      pathname,
      origin,
      href: `${origin}${pathname}`,
    },
  };

  return renderToString(<App />);
}
