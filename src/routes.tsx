import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Component de template
import { Layout } from './components/Layout';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { TermsOfUse } from './pages/Terms-of-use';
import { PrivacyPolicy } from './pages/Privacy-Policy';
import { NotFound } from './pages/Not-Found';

export function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
