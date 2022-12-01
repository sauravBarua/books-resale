import React from 'react';
import { Card } from 'react-bootstrap';

const CategoriesCard = ({category}) => {
    const {img, title, price} = category;
    return (
        <div>
        <Card style={{ width: "18rem", margin: "10px" }}>
              <Card.Img variant="top" src={img} alt="" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {/* <Card.Text>{`${desc?.substring(0, 100)}...`} </Card.Text> */}
            <Card.Title>Price: $ {price} </Card.Title>
            {/* <Link to={`/services/${_id}`}>
              <Button variant="outline-dark">Details </Button>
            </Link>{" "} */}
          </Card.Body>
        </Card>
      </div>
    );
};

export default CategoriesCard;