import * as React from "react";

function ScrollToNextSectionLink({ heightClassName }) {
  if (heightClassName !== "full-height") {
    return null;
  }

  return (
    <a
      href="#mainContent"
      className="scroll_anchor top_scroll"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="33.19" height="77" viewBox="0 0 33.19 77"><g transform="translate(-172.194 -79.278)"><g transform="translate(181.783 148.625)"><path d="M217.54,364.283a.7.7,0,0,1-.5-.206c-2.339-2.339-5.9-5.885-6.231-6.191a.7.7,0,0,1,.754-1.182c.133.067.191.1,5.977,5.881l5.815-5.751a.7.7,0,0,1,.991,1l-6.313,6.244A.7.7,0,0,1,217.54,364.283Z" transform="translate(-210.546 -356.629)" fill="#ff5650"/></g><g transform="translate(187.847 145.701)"><path d="M235.741,344.937a.942.942,0,1,1-.942.942A.942.942,0,0,1,235.741,344.937Z" transform="translate(-234.799 -344.937)" fill="#ff5650"/></g><g transform="translate(187.847 141.95)"><circle cx="0.942" cy="0.942" r="0.942" transform="translate(0)" fill="#ff5650"/></g><g transform="translate(187.847 149.517)"><path d="M235.741,360.2a.942.942,0,1,1-.942.942A.942.942,0,0,1,235.741,360.2Z" transform="translate(-234.799 -360.199)" fill="#ff5650"/></g><g transform="translate(172.194 79.278)"><path d="M188.789,137.2a16.614,16.614,0,0,1-16.6-16.6V95.873a16.6,16.6,0,1,1,33.19,0V120.6A16.614,16.614,0,0,1,188.789,137.2Zm0-56.511A15.2,15.2,0,0,0,173.6,95.873V120.6a15.2,15.2,0,0,0,15.186,15.186h0A15.2,15.2,0,0,0,203.975,120.6V95.873A15.2,15.2,0,0,0,188.789,80.687Z" transform="translate(-172.194 -79.278)" fill="#ff5650"/></g><g transform="translate(185.654 88.185)"><path d="M228.949,128.07a2.925,2.925,0,0,1-2.922-2.922v-7.326a2.922,2.922,0,0,1,5.843,0v7.326A2.925,2.925,0,0,1,228.949,128.07Zm0-11.761a1.514,1.514,0,0,0-1.512,1.513v7.326a1.513,1.513,0,1,0,3.025,0v-7.326A1.514,1.514,0,0,0,228.949,116.309Z" transform="translate(-226.027 -114.9)" fill="#ff5650"/></g><g transform="translate(187.871 90.595)"><path d="M235.6,128.22a.7.7,0,0,1-.7-.7v-2.27a.7.7,0,0,1,1.409,0v2.27A.7.7,0,0,1,235.6,128.22Z" transform="translate(-234.895 -124.542)" fill="#ff5650"/></g></g></svg>
    </a>
  );
}

export default ScrollToNextSectionLink;
