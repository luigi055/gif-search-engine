import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/actions';
// handleSubmit function comes from reduxForm

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  return errors;
};

class Login extends React.Component {

  handleFormSubmit = (values) => {
    this.props.signInUser(values);
  };

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    // this is a custom field. the argument is destructuring Field
    // touch mean if somebody has already click or touch the current input
    // {...input} inherit all the Field.input values
    // better to use bootstrap. here i'm using bootstrap validation classes and helpers
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} className="form-control" type={type} />
        {touched && error && <div className="help-block">{error}</div>}
      </div>
    </fieldset>
  );

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className="alert alert-danger">{this.props.authenticationError}</div>;
    }
    return <div></div>;
  }

  render() {
    return (
      <div className="row">
        <div className="column medium-6 medium-offset-3">
          <h2 className="text-center">Log In</h2>

          {this.renderAuthenticationError()}

          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field name="email" component={this.renderField} className="form-control" type="text" label="Email" />
            <Field name="password" component={this.renderField} className="form-control" type="password" label="Password" />

            <button action="submit" className="button button-primary">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error,
  }
}

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'login',
  validate
})(Login));
