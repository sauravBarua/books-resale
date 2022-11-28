import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategorySection = (props) => {
  const { category } = props;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> {} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
          <Link to="/category" state={{ category: `${category}` }}>
            Show all
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategorySection;
