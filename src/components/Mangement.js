import React from "react";
import { Button } from "react-bootstrap";

const Mangementcmp = () => {
  return (
    <div className="d-grid gap-2">
      
      <br></br>
      <Button variant="primary" size="lg" href="/collection">
        Go To Collection Data Page
      </Button>
      <br></br>
      <Button variant="primary" size="lg" href="/delivery">
        Go To Delivery Data Page
      </Button>
      <br></br>

      <Button variant="primary" size="lg" href="/service">
        Go To Service Data Page
      </Button>
    </div>
  );
};

export default Mangementcmp;
