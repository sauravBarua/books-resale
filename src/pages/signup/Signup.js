import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast("User Created Successfully!")
        handleUpdatUserProfile(name, photoURL);
        navigate("/", { replace: true });
      })
      .catch((e) => console.error(e));
  };

  const handleUpdatUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="w-50 mx-auto">
      <h3 className="text-dark mb-4 ">Please Signup</h3>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3">
          <Form.Control
            name="photoURL"
            type="text"
            placeholder="Enter photoURL"
          />
        </Form.Group>
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
