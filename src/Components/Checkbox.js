import * as React from "react";

function Checkbox ({ label, value, onChange, className }) {
  return (
    <label className="label-container">
      <input type="checkbox" checked={value} onChange={onChange} className={className} />
      {label}
      <span class="checkmark"></span>
    </label>
  );
}

export default Checkbox;