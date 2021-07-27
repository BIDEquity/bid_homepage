import React, { useState } from "react";
import ReactiveButton from "reactive-button";

function SubmitButton(props) {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("idle");
    }, 1000);
  };

  return (
    <ReactiveButton
      buttonState={state}
      onClick={onClickHandler}
      idleText={props.label}
      loadingText={
        
          <span class="loader"></span>
        
      }
      successText={"Success"}
      errorText={"Error"}
      type={"submit"}
      className={"news_subscribe_bottom"}
      style={{
        borderRadius: "32px",
        backgroundColor: "#ff5650",
        boxShadow: "none",
        fontSize: "18px",
        fontWeight: "700",
      }}
      outline={false}
      shadow={false}
      rounded={true}
      size={"normal"}
      block={false}
      messageDuration={1000}
      disabled={false}
      buttonRef={null}
      width={"280px"}
      height={"64px"}
      animation={false}
    />
  );
}

export default SubmitButton;
