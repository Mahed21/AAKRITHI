import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ExploreBox = ({img, text, id}) => {
  return (
    <Link to={`/art/${id}`} style={{textDecoration: "none"}}>
      <Row className="explore-box">
        <Col md={3} className="img p-0">
          <img src={img} alt="explore" />
        </Col>
        <Col md={9} className="text-center py-3">
          <h4>{text}</h4>
        </Col>
      </Row>
    </Link>
  )
}

export default ExploreBox