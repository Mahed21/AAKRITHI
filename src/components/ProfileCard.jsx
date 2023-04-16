const ProfileCard = ({img, name, prof}) => {
  return (    
    <div className="profile-card d-flex flex-column">
      <img src={img} alt="artist-profile" />
      <span className="name">{name}</span>
      <span>{prof}</span>
    </div>
  )
}

export default ProfileCard