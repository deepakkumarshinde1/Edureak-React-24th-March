import { useRef, forwardRef } from "react";

const MyInputComponent = (props, ref) => {
  return (
    <>
      <div className="input-group mb-2">
        <span className="input-group-text">{props.name}</span>
        <input ref={ref} type={props.type} className="form-control" />
      </div>
    </>
  );
};

export default forwardRef(MyInputComponent);
