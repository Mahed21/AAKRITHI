import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import profileImg from '../assets/images/jacob.jpg'
import noImg from '../assets/images/noImage.jpg'
import { Link } from 'react-router-dom'
import ProfileBasic from '../components/ProfileBasic'
import Layout from '../components/Layout'
import LikeComponent from '../components/LikeComponent';

// data
const profileData = {
  id:"1",
  img: profileImg,
  name: "Abhinav Rai",
  prof: "Metal Art",
  desc: "Lorem i`psum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laboru numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiuoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit.",
  size: 160,
  price: 1700,
  likes: 22,
  title: "Lord Krosha Silver Sculpter",
}

const Art = () => {

  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like)
  }

  return (
    <Layout>
      <div className="main-img mx-auto mb-5 mt-3">
        <img src={noImg} alt="no image" />
      </div>
      <Row className="gradiant-box p-3 p-md-5 py-5 text-white flex-column-reverse gap-5 gap-lg-0 flex-lg-row">
        <Col lg={8}>
        <div className='art-detail'>
          <div className="d-flex flex-wrap-reverse gap-2 justify-content-between align-items-center justify-content-lg-start">                
            <h2>{profileData.title}</h2>
            <div className="d-flex ms-lg-5 ps-lg-5 flex-column">
              <LikeComponent showNum="true" num={profileData.likes} />
            </div>
          </div>
          <p className='title'>Description</p>
          <p>
            {profileData.desc}
          </p>
          <p className='size'>size: {profileData.size} inches height</p>
          <div className="d-flex align-items-center flex-wrap justify-content-between justify-content-lg-start">
            <p className='price'>Price: ₹{profileData.price}</p> 
            <button className='btn-white'>Buy</button>
          </div>
        </div>
        </Col>
        <Col lg={4}>
          <div className="profile-overview d-flex flex-column">
            <ProfileBasic img={profileData.img} name={profileData.name} prof={profileData.prof} />
            <Link to={`/profile/${profileData.id}`} className="btn-black">View Profile</Link>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default Art;