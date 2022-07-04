import React from "react";

import Card from "./Card";

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card
              cardTitle="Laptop"
              cardText=" Some quick example text to build on the card title and make up
              the bulk of the card's content."
              buttonText="Buy Laptop"
            />
          </div>
          <div className="col-4">
            <Card
              cardTitle="Mobile"
              cardText=" Some quick example text to build on the card title and make up
              the bulk of the card's content."
              buttonText="Buy mobile "
            />
          </div>
          <div className="col-4">
          <Card
            cardTitle="Headphones"
            cardText=" Some quick example text to build on the card title and make up
            the bulk of the card's content."
            buttonText="Buy Headphones"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
