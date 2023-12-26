import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: "Seamless Integration: Effortlessly Establish Your Digital Wallet for Endless Possibilities. ",
    icon: "ri-wallet-line",
  },

  {
    title: "Create your collection",
    desc: "Craft Your Digital Portfolio: Unleash Creativity and Build Your Unique NFT Collection ",
    icon: "ri-layout-masonry-line",
  },

  {
    title: "Add your NFTs",
    desc: "Showcase Your Artistry: Upload and Exhibit Your Exceptional NFTs to the World. ",
    icon: "ri-image-line",
  },

  {
    title: "List them for sale",
    desc: "Monetize Your Creativity: Showcase, Price, and List Your NFTs for Sale.",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
