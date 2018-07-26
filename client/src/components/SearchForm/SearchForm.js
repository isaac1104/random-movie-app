import React, { Component } from 'react';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class SearchForm extends Component {
  formSubmit = ({ title }) => {
    this.props.fetchMovieData(title);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className='container'>
        <form onSubmit={handleSubmit(this.formSubmit)}>
          <Field
            label='Movie Title'
            name='title'
            component={FormField}
          />
          <div className='text-right'>
            <button
              className='btn btn-raised btn-primary'
              type='submit'
            >
              <i className='mr-1 fas fa-search'/> Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.title) {
    errors.title = 'Please the movie title';
  }
  return errors;
}

export default reduxForm({ form: 'location', validate })(connect(null, actions)(SearchForm));
