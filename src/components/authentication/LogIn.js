import React from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";
import { usernameChanged, passwordChanged } from "../../actions";

const LoginForm = (props) => {
  const onUsernameChange = ({ target }) => {
    props.usernameChanged(target.value);
  };

  const onPasswordChange = ({ target }) => {
    props.passwordChanged(target.value);
  };
  console.log(props.password, props.username);
  return (
    <div className="container" style={{ marginTop: "200px" }}>
      <Jumbotron>
        <h1 className="mb-4">Login</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={onUsernameChange}
              type="text"
              placeholder="Username"
              value={props.username}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={onPasswordChange}
              type="password"
              placeholder="Password"
              value={props.password}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  username: auth.username,
  password: auth.password,
});

export default connect(mapStateToProps, { usernameChanged, passwordChanged })(
  LoginForm
);
