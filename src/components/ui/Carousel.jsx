import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CustomCarousel() {
  return (
    <Carousel fade data-bs-theme="dark">
      <Carousel.Item>
        <video className="d-block w-100" autoPlay loop muted>
          <source
            src="https://storage.googleapis.com/ethernity-nft/mainnet%2Fnft%2F0xA041Df3cccC9E0B2061511a0a1f91b544434E3f5%2Fnft.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <video className="d-block w-100" autoPlay loop muted>
          <source
            src="https://storage.googleapis.com/ethernity-nft/mainnet%2Fnft%2F0x13e9968eD3BeF3D86Dba94421BaD6bA258a98561%2Fnft.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <video className="d-block w-100" autoPlay loop muted>
          <source
            src="https://storage.googleapis.com/ethernity-nft/mainnet%2Fnft%2F0xD33B8AbF52dF4a32299e05F032D0979B9Dd9dC15%2Fnft.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
