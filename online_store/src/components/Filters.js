import React from "react";
import { Button, Form } from "react-bootstrap";
// import { CartState } from "./context/Context";
import Rating from "./Rating";

const Filters = () => {
  // const {
    // productState: { byStock, byFastDelivery, byRatings, sort },
    // productDispatch,
  // } = CartState();
  // console.log(byStock, byFastDelivery, byRatings, sort, );
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="Checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="Checkbox"
          id={`inline-4`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
        />
      </span>
      <Button
        variant="light"
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
