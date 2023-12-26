import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";
import { NFT__DATA } from "../assets/data/data";
import "../styles/create-item.css";

const Create = () => {
  const [newNFT, setNewNFT] = useState({
    id: "",
    title: "",
    desc: "",
    imgUrl: "",
    creator: "",
    creatorImg: "",
    currentBid: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNFT((prevNFT) => ({ ...prevNFT, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setNewNFT((prevNFT) => ({ ...prevNFT, imgUrl: reader.result }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCreateNFT = (e) => {
    e.preventDefault();

    NFT__DATA.push(newNFT);

    setNewNFT({
      id: "",
      title: "",
      desc: "",
      imgUrl: "",
      creator: "",
      creatorImg: "",
      currentBid: 0,
    });
  };

  return (
    <>
      <CommonSection title="Create Item" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={newNFT} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form onSubmit={handleCreateNFT}>
                  <div className="form__input">
                    <label htmlFor="uploadInput">Upload File</label>
                    <input
                      type="file"
                      id="uploadInput"
                      className="upload__input"
                      onChange={handleFileUpload}
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      placeholder="Enter price for one item (ETH)"
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder="Enter minimum bid" />
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="form__input">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={newNFT.title}
                      onChange={handleInputChange}
                      placeholder="Enter title"
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Enter description"
                      className="w-100"
                    ></textarea>
                  </div>

                  <div className="form__input">
                    <button type="submit" className="btn btn-primary">
                      Create NFT
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
