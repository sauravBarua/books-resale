import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategorySection = (props) => {
  const { category } = props;
  return (
    <div style={{ margin: "10px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> {} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Category {category} books.
          </Card.Subtitle>
          <Link to="/category" state={{ category: `${category}` }}>
            <button className="btn btn-outline-primary"> Show all</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategorySection;
