import React from "react";
import './style.css'

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0, 0.8)',
  zIndex: 1000,

}
export default function Modal({open, children, onClose}) {
  if (!open )return null
  return (
    <div style={OVERLAY_STYLES}>
      <div className="OVERLAY_STYLES">{children}</div>
    </div>
  );
}

