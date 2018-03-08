import React from "react";

const FormField = field => {
  const { meta: { touched, error } } = field;
  const className = `form-control ${touched && error ? "is-invalid" : ""}`;
  return (
    <div className="form-group">
      <label className="bmd-label-floating">{field.label}</label>
      <input
        className={className}
        type="input"
        {...field.input}
        autoComplete="off"
      />
      <div className="invalid-feedback">
        {touched ? error : ""}
      </div>
    </div>
  );
}

export default FormField;
