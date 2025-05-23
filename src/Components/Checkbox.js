import * as React from "react";

function Checkbox ({ label, value, onChange, className, required, name }) {
  return (
    <label className="label-container">
      <input type="checkbox" checked={value} required={required} name="name" onChange={onChange} className={className} />
      {label}
      <span className="checkmark"></span>
    </label>
  );
}

export default Checkbox;