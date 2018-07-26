import React from 'react';

const FormField = field => {
  const handleFocus = event => {
    event.target.select();
  }

  const { meta: { touched, error } } = field;
  const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
  return (
    <div className='form-group'>
      <label className='bmd-label-floating'>{field.label}</label>
      <input
        {...field.input}
        className={className}
        placeholder='Enter a movie title for details'
        autoComplete='off'
        onFocus={handleFocus}
      />
      <div className='invalid-feedback'>
        {touched ? error : ''}
      </div>
    </div>
  );
}

export default FormField;
