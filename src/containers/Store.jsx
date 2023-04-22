import React, { useEffect, useState } from "react";
import user1 from "../assets/images/a1.jpg";
import user2 from "../assets/images/a2.jpg";
import user3 from "../assets/images/a3.jpg";
import { Col, Row } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard";
import ArtCard from "../components/ArtCard";
import NoImage from "../assets/images/noImage.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Layout from "../components/Layout";

const tabs = [
  {
    title: "GOLD SCULPTURE",
    key: "gold_sculpture",
    profiles: [
      { img: user1, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user2, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user3, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
    ],
    art: [
      { id: 1, img: NoImage, title: "Clay Pottery", price: 500 },
      { id: 2, img: NoImage, title: "Clay Pottery", price: 500 },
      { id: 3, img: NoImage, title: "Clay Pottery", price: 500 },
    ],
  },
  {
    key: "stone_sculpture",
    title: "STONE SCULPTURE",
    profiles: [
      { img: user1, name: "ABC Dennis", prof: "ABC Artist", id: 1 },
      { img: user2, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user3, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
    ],
    art: [
      { id: 1, img: NoImage, title: "Stone Pottery", price: 500 },
      { id: 2, img: NoImage, title: "Stone Pottery", price: 500 },
      { id: 3, img: NoImage, title: "Stone Pottery", price: 500 },
    ],
  },
  {
    key: "clay_sculpture",
    title: "CLAY SCULPTURE",
    profiles: [
      { img: user1, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user2, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user3, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
    ],
    art: [
      { id: 1, img: NoImage, title: "Clay Pottery", price: 500 },
      { id: 2, img: NoImage, title: "Clay Pottery", price: 500 },
      { id: 3, img: NoImage, title: "Clay Pottery", price: 500 },
    ],
  },
  {
    key: "fabric_art",
    title: "FABRIC ART",
    profiles: [
      { img: user1, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user2, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user3, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
    ],
    art: [
      { id: 1, img: NoImage, title: "Fabric Pottery", price: 500 },
      { id: 2, img: NoImage, title: "Fabric Pottery", price: 500 },
      { id: 3, img: NoImage, title: "Fabric Pottery", price: 500 },
    ],
  },
  {
    key: "bamboo_art",
    title: "BAMBOO ART",
    profiles: [
      { img: user1, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user2, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user3, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
    ],
    art: [
      { id: 1, img: NoImage, title: "Clay Pottery", price: 500 },
      { id: 2, img: NoImage, title: "Clay Pottery", price: 500 },
      { id: 3, img: NoImage, title: "Clay Pottery", price: 500 },
    ],
  },
  {
    key: "fabric_art1",
    title: "FABRIC ART",
    profiles: [
      { img: user1, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user2, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user3, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
    ],
    art: [
      { id: 1, img: NoImage, title: "Clay Pottery", price: 500 },
      { id: 2, img: NoImage, title: "Clay Pottery", price: 500 },
      { id: 3, img: NoImage, title: "Clay Pottery", price: 500 },
    ],
  },
  {
    key: "bamboo_art1",
    title: "BAMBOO ART",
    profiles: [
      { img: user1, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user2, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
      { img: user3, name: "Jacob Dennis", prof: "ABC Artist", id: 1 },
    ],
    art: [
      { id: 1, img: NoImage, title: "Clay Pottery", price: 500 },
      { id: 2, img: NoImage, title: "Clay Pottery", price: 500 },
      { id: 3, img: NoImage, title: "Clay Pottery", price: 500 },
    ],
  },
];

const Store = () => {
  const [data, setData] = useState([]);
  const [art, setArt] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/becomeArtist")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);


  useEffect(() => {
    fetch("http://localhost:5000/art")
      .then((res) => res.json())
      .then((data) => setArt(data))
      .catch((error) => console.error(error));
  }, []);
  

  return (
    <Layout>
      <Tabs defaultActiveKey="gold_sculpture" className="mb-3 gap-4">
        {tabs &&
          tabs.map((tab) => (
            <Tab eventKey={tab.key} title={tab.title} id={tab.id}>
              <div className="d-flex  flex-wrap">
                <Row className="w-100 m-0" style={{ gap: "20px 0px" }}>
                  {data.length > 0 ? (
                   
                 data.map((art) => (
                      <Col sm={6} md={3} lg={2} key={art.id}>
                        <ProfileCard
                          art={art}
                        
                        />
                      </Col>
                    ))
                  ) : (
                    <p>Loading data...</p>
                  )}
                </Row>
              </div>
              <Row className="flex-wrap mt-5" style={{ gap: "30px 0" }}>
                {art.length > 0 ?art.map((a) => (
                    <Col md={6} lg={4} key={a.id}>
                      <ArtCard value={a} />
                    </Col>
                  )): (
                    <p>Loading data...</p>
                  )}
              </Row>
            </Tab>
          ))}
      </Tabs>
    </Layout>
  );
};

export default Store;
