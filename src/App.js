import * as React from "react";
import * as Scrivito from "scrivito";
import { HelmetProvider } from "react-helmet-async";
import { Crisp } from "crisp-sdk-web";

import CurrentPageMetadata from "./Components/CurrentPageMetadata";
import ErrorBoundary from "./Components/ErrorBoundary";
import Footer from "./Components/Footer";
import Intercom from "./Components/Intercom";
import Navigation from "./Components/Navigation";
import NotFoundErrorPage from "./Components/NotFoundErrorPage";
import CookieConsentBanner from "./Components/CookieConsentBanner";
import Tracking from "./Components/Tracking";
import { CookieConsentProvider } from "./Components/CookieConsentContext";
import AOS from "aos";
import "aos/dist/aos.css";

export const helmetContext = {};

export default function App() {
  React.useEffect(() => {
    AOS.init();

    // Initialize Crisp chat widget
    Crisp.configure("1c98242d-1098-4be6-a8ad-8b5c27d2fe0a");
  }, []);

  return (
    <ErrorBoundary>
      <CookieConsentProvider>
        <HelmetProvider context={helmetContext}>
          <div>
            <div className="content-wrapper">
              <Navigation />
              <Scrivito.CurrentPage />
              <NotFoundErrorPage />
            </div>
            <Footer />
            <CurrentPageMetadata />
            <CookieConsentBanner />
            <Tracking />
            <Intercom />
          </div>
        </HelmetProvider>
      </CookieConsentProvider>
    </ErrorBoundary>
  );
}
