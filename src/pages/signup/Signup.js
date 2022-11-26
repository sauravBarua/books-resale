import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="w-50 mx-auto">
      <h3 className="text-dark mb-4 ">Please Signup</h3>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3">
          <Form.Control name="name" type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Signup
        </Button>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </div>
  );
};

export default Signup;
