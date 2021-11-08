import * as React from "react";
import * as Scrivito from "scrivito";


Scrivito.provideComponent("BidWhatWeDoRowWidget", ({ widget }) => {
  const link = widget.get("link");
  let linktext = link && link.title();
  const showAsPopup = widget.get("showPopup") || "no";
  const [showPopup, setShowPopUp] = React.useState(false);
  const [popup, setPopup] = React.useState("");

  //const onClick = () => setShowPopUp(!showPopup);
  
  return (
    <div
      className={`we_do_row ${widget.get("reverse") === "yes" && "reverse"}`}
    >
      <div className="we_do_img">
        <Scrivito.ImageTag content={widget} attribute="image" alt="" />
      </div>
      <div className="we_do_info">
        <Scrivito.ContentTag
          content={widget}
          attribute="headline"
          className="we_do_title"
          tag="h2"
        />

        <Scrivito.ContentTag
          content={widget}
          attribute="description"
          className="we_do_description"
          tag="p"
        />
        <div className="we_do_text">
          <Scrivito.ContentTag content={widget} attribute="text" tag="p" />
        </div>
        {showAsPopup === "no" &&
        <Scrivito.LinkTag to={link} className="we_do_more more_link">
          {linktext}
        </Scrivito.LinkTag>
        }
        {showAsPopup === "yes" &&
        <Scrivito.LinkTag
          className="we_do_more more_link"
          onClick={() => setPopup("popup1")}
        >
          {linktext}
        </Scrivito.LinkTag>
        }
        {popup === "popup1" && (
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
              attribute="popup1"
              className="info-popup"
            />
          </div>
        )}
      </div>
    </div>
  );
});
