import * as React from "react";
import * as Scrivito from "scrivito";
import { HelmetProvider } from "react-helmet-async";
import CrispChat from "./Components/CrispChat";

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
    
  })

  function offsetTop(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop }
}

  /* Step content animation */
  const b = document.querySelector('body');
  window.addEventListener('scroll', event => {
    if (typeof b.dataset.scrollval === 'undefined') {
      b.dataset.scrollval = 0;
    }

    let fromTop = window.scrollY;
    let offset = 370;
    
    const steps = document.getElementsByClassName('content_step_section')
   
    for (let i = 0; i < steps.length; i++) {
      let elOffset = offsetTop(steps[i]);
      
      if (elOffset.top - offset <= fromTop && elOffset.top - offset + steps[i].offsetHeight > fromTop) {
        steps[i].classList.add('animate');
        if (window.scrollY > b.dataset.scrollval) {
          steps[i].classList.add('animation_reverse');
        }
        else if (window.scrollY < b.dataset.scrollval) {
          steps[i].classList.remove('animation_reverse');
        }
      }
      else {
        steps[i].classList.remove('animate');
        // setTimeout(function() {
        //     section.classList.remove('animation_reverse');
        // }, 2200)
      }
    }
  

    b.dataset.scrollval = window.scrollY;
  })
  
  return (
    <ErrorBoundary>
      <CookieConsentProvider>
        <HelmetProvider context={helmetContext}>
          <CrispChat />
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
