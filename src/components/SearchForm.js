import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import * as actions from "../actions";
import { connect } from "react-redux";
// import axios from "axios";

class SearchForm extends Component {
  render() {
    const { errors, touched, isSubmitting } = this.props;

    return (
      <Form>
        <div className="container">
          <div>
            <label htmlFor="title">Movie Title</label>
            <div className="form-group">
              {touched.title && errors.title && <small className="text-danger">{errors.title}</small>}
              <Field className="form-control" type="text" name="title" autoComplete="off"/>
            </div>
          </div>
          <div className="text-right">
            <button
              className="btn btn-raised btn-primary"
              disabled={isSubmitting}
            >
              <i className="mr-1 fas fa-search"/> Search
            </button>
          </div>
        </div>
      </Form>
    );
  }
}

export default withFormik({
  mapPropsToValues({ title = '' }) {
    return { title };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Movie title is required'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    // const request = axios.get(`https://www.omdbapi.com/?apikey=ac19108c&t=${values.title}`);
    // console.log(request);
    resetForm();
    setSubmitting(false);
  },
})(connect(null, actions)(SearchForm));
