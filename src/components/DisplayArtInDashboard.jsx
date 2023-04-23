import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DisplayArtInDashboard = (props) => {
  const { afterUpdate } = props;
  let navigate = useNavigate();
  const { email, id, image, price, prodcutName, availableQty, description } =
    props.value;
  const deleteArt = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/art/${id}`);
      afterUpdate();
    } catch (error) {
      console.log(error);
    }
  };

  const editArt = (id) => {
    navigate("/editArt", {
      state: {
        email: email,
        id: id,
        image: image,
        price: price,
        description: description,
        prodcutName: prodcutName,
        availableQty: availableQty,
      },
    });
  };
  return (
    <div className="art_in_dashboard p-3">
      <div className="d-flex justify-content-between mb-2">
        <button
          type="button"
          style={{ color: "black" }}
          onClick={() => deleteArt(id)}
        >
          Delete
        </button>
        <button
          type="button"
          style={{ color: "black" }}
          onClick={() => editArt(id)}
        >
          Edit
        </button>
      </div>
      <img src={image} alt="" className="img-fluid" />
      <div className="d-flex justify-content-between mt-2">
        <h5>{prodcutName}</h5>
        <h5>{price}</h5>
      </div>
    </div>
  );
};

export default DisplayArtInDashboard;
