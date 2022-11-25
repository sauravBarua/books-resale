import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const AddProduct = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const condition = form.condition.value;
    const mobile = form.mobile.value;
    const location = form.location.value;
    const category = form.category.value;
    const desc = form.desc.value;
    const product = {
      title,
      img,
      price,
      condition,
      mobile,
      location,
      category,
      desc,
    };
    console.log(product);

    fetch("http://localhost:5000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newProduct = [...products, data];
        setProducts(newProduct);
        alert("Add Product");
      })
      .catch((error) => {
        console.error(error);
      });
    // e.target.reset();
  };
  return (
    <div>
      <Container>
        <Form onSubmit={handleAddProduct}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="img"
              placeholder="Enter Photo URL"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" name="title" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" name="price" placeholder="Enter Price" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="condition"
              placeholder="Enter Condition type"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="mobile"
              placeholder="Enter Mobile number"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="location"
              placeholder="Enter Location"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="YearOfPurchase"
              placeholder="Enter year of purchase"
            />
          </Form.Group>
          <Form.Control
            as="textarea"
            name="desc"
            placeholder="Enter description"
            style={{ height: "100px" }}
          />
          <label>Enter category </label>
          <select name="category" onChange={(e) => e.target.value}>
            <option value="computer">Computer programming Books</option>
            <option value="comic">Comic Books</option>
            <option value="music">Music Books</option>
          </select>

          <Button className="mt-3" variant="outline-dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddProduct;
