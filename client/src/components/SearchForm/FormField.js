import React from 'react';

const FormField = field => {
  const { meta: { touched, error } } = field;
  const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
  return (
    <div className='form-group'>
      <label className='bmd-label-floating'>{field.label}</label>
      <input
        {...field.input}
        className={className}
        placeholder={touched ? error : 'Please enter the movie title'}
        autoComplete='off'
      />
    </div>
  );
}

export default FormField;
