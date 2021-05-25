import * as React from "react";
import * as Scrivito from "scrivito";
import { useCookieConsent } from "./CookieConsentContext";
import cookieConsentIcon from "../assets/images/cookie_consent_icon.svg";

function CookieConsentBanner() {
  const consentUrl = cookieConsentUrl();
  const [visible, setVisible] = React.useState(false);
  const {
    cookieConsentChoice,
    acceptCookieConsent,
    declineCookieConsent,
  } = useCookieConsent();
  console.log(cookieConsentChoice)
  React.useEffect(() => {
    setVisible(cookieConsentChoice === "accepted");
  }, [cookieConsentChoice]);
  
  if (!visible || !consentUrl) {
    return null;
  }
  
  return (
    <CookieBanner
      url={consentUrl.url}
      title={consentUrl.title}
      onAccept={acceptCookieConsent}
      onDecline={declineCookieConsent}
    />
  );
}

function CookieBanner(props) {
  
  return (
    <div className="popup_cookies">
      <div className="container">
        <div className="popup_cookies_inner">
          <div className="popup_cookies_left">
            <div className="popup_cookies_text">
              <p>
                Cookies help us deliver our services. By using our services, you
                agree to our use of cookies.
              </p>
            </div>
          </div>
          <div className="popup_cookies_right">
            <a className="more_link" href={props.url} rel="noopener noreferrer">
              {props.title}
            </a>
            <button className="btn btn-primary" onClick={props.onAccept}>
              Accept
            </button>
          </div>
          <button className="popup_cookies_close">
            <div onClick={props.onDecline}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="red"
                width="18.121"
                height="18.121"
                viewBox="0 0 18.121 18.121"
                fill="none"
                strokeWidth="1.5"
              >
                <g transform="translate(-478.939 -846.939)">
                  <line
                    x1="16"
                    y2="16"
                    transform="translate(480 848)"
                    strokeLinecap="round"
                  />
                  <line
                    x1="16"
                    y1="16"
                    transform="translate(480 848)"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function cookieConsentUrl() {
  const root = Scrivito.Obj.root();

  if (!root) {
    return null;
  }

  const cookieConsentLink = root.get("cookieConsentLink");
  

  if (!cookieConsentLink) {
    return null;
  }

  return {
    url: Scrivito.urlFor(cookieConsentLink),
    title: cookieConsentLink.title() || "Learn more",
  };
}

export default Scrivito.connect(CookieConsentBanner);
