const ProfileCard = (props) => {
  const  {image,name, proof } = props.art;
  console.log(name,proof);
  return (    
    <div className="profile-card d-flex flex-column">
      <img src={image} alt="" />
      <span className="name">{name}</span>
      <span>{proof}</span>
    </div>
  )
}

export default ProfileCard