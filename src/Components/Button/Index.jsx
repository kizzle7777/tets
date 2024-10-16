import React from "react";
import "./index.css";
import classname from "classname";
export const Button = (props) => {
  return (
    <button
      {...props}
      disabled={props.isDisabled ? true : false}
      className={classname(
        props.isDisabled ? "disabled-button" : "button",
        props.small ? "small-button" : "",
        props.color && !props.isDisabled ? props.color : "",
        props.className
      )}
      style={props.style}
      {...props.rest}
    >
      <div className="d-flex align-items-center justify-content-center">
        {props.icon && <img src={props.icon} className="pr-2" />}
        {props.loading ? (
          <div class="spinner-border" role="status" style={{ width: '1.5rem', height: '1.5rem', color: '#fff' }}>
            <span class="visually-hidden"></span>
          </div>
        ) : (
          props.text
        )}
      </div>
    </button>
  );
};
