import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

/**
 * The hydrateRoot method attaches React to the HTML
 * generated on the server. Hydration turns the server
 * generated HTML into a fully interactive app that runs
 * in the browser.
 */
// hydrateRoot(
//   document.getElementById('root'),
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
