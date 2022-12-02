import React from "react";
import { Card } from "react-bootstrap";

const Quotescard = ({ track }) => {
  const { content, author } = track;
  return (
    <div>
      <Card style={{ width: "990px" }}>
        <Card.Body>
          <Card.Title>"{content}" </Card.Title>
          <Card.Text>By {author}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Quotescard;
