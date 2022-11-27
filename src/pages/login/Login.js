import React, { useContext } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        navigate("/", { replace: true });
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="w-50 mx-auto">
      <h3 className="text-dark  mb-4 ">Login</h3>
      <Form onSubmit={handleSignin}>
        <Form.Group className="mb-3 ">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
      <ButtonGroup vertical className="mt-2">
        <Button variant="primary">
          <FaGoogle className="m-2"></FaGoogle>
          Login With Google
        </Button>
      </ButtonGroup>
      <Form.Label className="m-2">Already have an account?</Form.Label>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Login;
