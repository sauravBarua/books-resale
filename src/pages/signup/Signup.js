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
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    // console.log(name, email, password, type);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast("User Created Successfully!");
        const userInfo = {
          displayName: name,
          role,
        };
        updateUserProfile(userInfo)
          .then(() => {
            saveUser(name, email);
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
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
        <label>Enter account type </label>
        <select name="role" onChange={(e) => e.target.value}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
        <br />
        <Button variant="primary" type="submit">
          Signup
        </Button>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </div>
  );
};

export default Signup;
