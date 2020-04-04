import React from 'react';
import "./Backdrop.css";

export default function Backdrop(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="backdrop" onClick={props.click} />
  )
}