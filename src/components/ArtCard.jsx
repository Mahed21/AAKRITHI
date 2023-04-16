import LikeComponent from './LikeComponent'
import NoImage from '../assets/images/noImage.jpg'
import { Link } from 'react-router-dom';

const ArtCard = ({img, title, price, id}) => {
  return (    
    <div className="art-card">
      <Link to={`/art/${id}`} style={{textDecoration: "none"}}>
        <img src={img} alt="Art" />
      </Link>
      <div className="d-flex justify-content-between px-1 pt-3 align-items-center">
        <Link to={`/art/${id}`} style={{textDecoration: "none"}}>
          <span className="title">{title}</span>
        </Link>
        <div>
          <LikeComponent showNum={false} />
          <span className="ms-2 ms-sm-3"><b>₹</b>{price}</span>
        </div>
      </div>
    </div>
  )
}

export default ArtCard