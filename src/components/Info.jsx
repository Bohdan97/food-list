import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

function Info({ findArray }) {
  const { value } = useParams();

  const item = findArray(value);

  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      <Link to="/">
        <button className="btn btn-secondary">Back</button>
      </Link>
      <div className="list_info">
        <img src={item[0].imageUrl} alt={item[0].name} height="200px" width="200px" />
        <h1>{item[0].name}</h1>
        <h4>Count: {item[0].count}</h4>
        <h4>Weight: {item[0].weight}</h4>
        <p>{item[0].description}</p>
        <h5>Comments:</h5>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <div className="field_info">
                <Field
                  placeholder="comment"
                  name="comment"
                  render={({ input, meta }) => (
                    <span>
                      <textarea required {...input} className={meta.error ? 'input_error' : ''} />
                      {meta.touched && meta.error && (
                        <span className="com_error">{meta.error}</span>
                      )}
                    </span>
                  )}
                />
              </div>

              <div className="field">
                <button className="button_form_info " type="submit" disabled={submitting}>
                  Add Comment
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </>
  );
}

export default Info;
