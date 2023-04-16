import { Col, Row } from 'react-bootstrap'
import ArtCard from '../components/ArtCard'
import Layout from '../components/Layout'
import whatsApp from '../assets/images/whatsapp.png'
import gmail from '../assets/images/gmail.png'
import profileImg from '../assets/images/jacob.jpg'
import ProfileBasic from '../components/ProfileBasic'
import noImg from '../assets/images/noImage.jpg'

const profileData = {
  img: profileImg,
  name: "Abhinav Rai",
  prof: "Metal Art",
  about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam consequatur consequuntur, dignissimos sunt sequi nemo repellendus libero adipisci ut laudantium architecto. Quos  beatae porro qui ad sint nihil sed distinctio mollitia voluptates quod animi dolores  suscipit optio tenetur, culpa, sunt, dolorum autem. Tenetur eligendi nihil omnis repellat culpa laudantium voluptatibus.",
  email:"#",
  whatsApp: "#",
  products: [
    { id:1, img: noImg, title: "Krishna Silver Sculpter", price: '500'},
    { id:2, img: noImg, title: "Lord Krishna Gold", price: '700'},
    { id:3, img: noImg, title: "Ganisha Silver Sculpter", price: '400'},
    { id:4, img: noImg, title: "Mahalakshmi Silver Scuplter", price: '600'},
    { id:5, img: noImg, title: "Shiva Silver sculpter", price: '500'},
    { id:6, img: noImg, title: "Lakshmi Silver Sculpter", price: '800'},
  ]
}

const Profile = () => {
  return (
    <Layout>
      <Row>
        <Col md={3} lg={2} className="pt-4 mb-4 mb-md-0">                
          <ProfileBasic img={profileData.img} name={profileData.name} prof={profileData.prof} />
        </Col>
        <Col md={9} lg={10}>
          <div className="gradiant-box description p-4 text-white">
            <p>
              {
                profileData.about
              }
            </p>
            <h5 className='text-center mt-5 mb-3'>CONTACT</h5>
            <div className='d-flex justify-content-center gap-4 contact-op align-items-center'>
              <a href={profileData.email}><img src={whatsApp} alt="whatsapp" /></a>     
              <a href={profileData.whatsApp}><img src={gmail} alt="whatsapp" /></a>   
            </div>
          </div>
        </Col>
      </Row>
      <section className="py-5">
        <h2 className='pb-5 pt-5 text-center'>Products</h2>
        <Row style={{gap: "20px 0"}}>
          {
            profileData.products &&
            profileData.products.map(prod => 
              <Col md={6} lg={4} key={prod.id}>
                <ArtCard img={prod.img} title={prod.title} price={prod.price} id={prod.id} />
              </Col>
          )}
        </Row>
      </section>
    </Layout>
  )
}

export default Profile