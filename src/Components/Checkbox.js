import * as React from "react";

function Checkbox ({ label, value, onChange, className, required }) {
  return (
    <label className="label-container">
      <input type="checkbox" checked={value} required={required} onChange={onChange} className={className} />
      {label}
      <span class="checkmark"></span>
    </label>
  );
}

export default Checkbox;