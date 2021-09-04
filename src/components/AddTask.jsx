import React from 'react';
import { Form, Field } from 'react-final-form';

const AddTask = ({ onAdd }) => {
  const onSubmit = (e) => {
    const newId = Math.floor(Math.random() * 10000) + 1;
    onAdd({ ...e, id: newId, coments: [] });
  };

  const validate = (e) => {
    const errors = {};

    if (e.name && e.name.length < 5) {
      errors.name = 'Too short';
    }
    if (e.count && e.count < 1) {
      errors.count = 'Too small';
    }
    if (e.imageUrl && e.imageUrl.length < 5) {
      errors.imageUrl = 'Too short';
    }
    if (e.weight && e.weight < 1) {
      errors.weight = 'Too short';
    }
    if (e.description && e.description.length < 5) {
      errors.description = 'Too short';
    }

    return errors;
  };
  return (
    <div className="wrapper_form">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
              {({ input, meta }) => (
                <span className="error_wrapper">
                  <input
                    required
                    className={meta.error ? 'input_error' : ''}
                    type="text"
                    {...input}
                    placeholder="Name"
                  />
                  {meta.touched && meta.error && <span className="error_name">{meta.error}</span>}
                </span>
              )}
            </Field>

            <Field name="count" className="input">
              {({ input, meta }) => (
                <span className="error_wrapper">
                  <input
                    required
                    className={meta.error ? 'input_error' : ''}
                    type="number"
                    {...input}
                    placeholder="Count"
                  />
                  {meta.touched && meta.error && <span className="error_count">{meta.error}</span>}
                </span>
              )}
            </Field>

            <Field name="imageUrl" className="input">
              {({ input, meta }) => (
                <span className="error_wrapper">
                  <input
                    required
                    className={meta.error ? 'input_error' : ''}
                    type="text"
                    {...input}
                    placeholder="ImageUrl"
                  />
                  {meta.touched && meta.error && (
                    <span className="error_imageUrl">{meta.error}</span>
                  )}
                </span>
              )}
            </Field>

            <Field name="weight" className="input">
              {({ input, meta }) => (
                <span className="error_wrapper">
                  <input
                    required
                    className={meta.error ? 'input_error' : ''}
                    type="number"
                    {...input}
                    placeholder="Weight"
                  />
                  {meta.touched && meta.error && <span className="error_weight">{meta.error}</span>}
                </span>
              )}
            </Field>

            <div className="field">
              <Field
                placeholder="Description"
                name="description"
                render={({ input, meta }) => (
                  <span>
                    <textarea required {...input} className={meta.error ? 'input_error' : ''} />
                    {meta.touched && meta.error && <span className="desc_error">{meta.error}</span>}
                  </span>
                )}
              />
            </div>

            <div className="field">
              <button className="button_form " type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                className="button_form "
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}>
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default AddTask;
