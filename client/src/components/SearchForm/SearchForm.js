import React, { Component } from 'react';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import { withRouter, Link } from 'react-router-dom';

class SearchForm extends Component {
  formSubmit = ({ title }) => {
    const { history } = this.props;
    history.push(`/movie/title/${title}`);
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
            <Link
              className='btn btn-raised btn-danger ml-1'
              to='/'
            >
              <i className='mr-1 fas fa-home'/> Home
            </Link>
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

export default withRouter(
  reduxForm({
    validate,
    form: 'title'
  })(SearchForm)
);
