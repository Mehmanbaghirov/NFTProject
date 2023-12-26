import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

import { Link } from "react-router-dom";

const MY__ACCOUNT = [
  {
    display: "Author Profile",
    url: "https://www.instagram.com/mehman_bagirov_/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    display: "Create Item",
    url: "/create",
  },
  {
    display: "Collection",
    url: "/market",
  },
];

const RESOURCES = [
  {
    display: "Help Center",
    url: "https://github.com/Mehmanbaghirov",
  },
  {
    display: "Partner",
    url: "https://messi.com/en/",
  },
  {
    display: "Community",
    url: "https://www.reddit.com/r/NFT/?rdt=47293",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6" className="mb-4">
            <div className="logo">
              <h2 className=" d-flex gap-2 align-items-center ">
                <span>
                  <i class="ri-fire-fill"></i>
                </span>
                NFTs
              </h2>
              <p>
                "Empower Your Imagination, Own the Future: Your Gateway to
                Unique NFT Treasures!"
              </p>
            </div>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>My Account</h5>
            <ListGroup className="list__group">
              {MY__ACCOUNT.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Resources</h5>
            <ListGroup className="list__group">
              {RESOURCES.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" sm="6" className="mb-4">
            <h5>Newsletter</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social__links d-flex gap-3 align-items-center ">
              <span>
                <Link to="https://www.facebook.com/NFToken/">
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.instagram.com/nft_/">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://twitter.com/nftnow">
                  <i class="ri-twitter-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://t.me/binancenfts">
                  <i class="ri-telegram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://discord.com/invite/NPzgpKpUs3">
                  <i class="ri-discord-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
