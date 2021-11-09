import * as React from "react";
import * as Scrivito from "scrivito";

import "./PopupLinkWidget.scss";

Scrivito.provideComponent("PopupLinkWidget", ({ widget }) => {
  const linkText = widget.get("linkText");
  
  
  const [popup, setPopup] = React.useState("");

  //const onClick = () => setShowPopUp(!showPopup);
  
  return (
        <>
        <div
          className="we_do_more more_link"
          onClick={() => setPopup("popup")}
        >
          {linkText}
        </div>
        
        {popup === "popup" && (
          <div className="info-popup-wrapper">
            <svg
              onClick={() => setPopup("")}
              xmlns="http://www.w3.org/2000/svg"
              width="18.121"
              height="18.121"
              viewBox="0 0 18.121 18.121"
              fill="red"
              stroke="red"
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
            <Scrivito.ContentTag
              content={widget}
              attribute="body"
              className="info-popup"
            />
          </div>
        )}
     </> 
  );
});
