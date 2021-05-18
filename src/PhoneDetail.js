import React, { useEffect, useState } from "react";
import { getPhoneById } from "./service";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

function PhoneDetail(props) {
  let history = useHistory();
  const [phone, setPhone] = useState({});
  const phoneID = props.match.params.id;
  useEffect(() => {
    (async () => {
      try {
        let phoneData = await getPhoneById(phoneID);
        setPhone(phoneData.data);
      } catch (error) {
        console.log(error)
      }
    })();
    return () => setPhone({});
  }, [phoneID]);
  const handleClick = () => history.push("/");
  if (!phone.name) {
    return (
      <div className="spinner">
        <Loader
          type="Circles"
          color="#34c6d3"
          timeout={150000}
          width={300}
          height={300}
        ></Loader>
      </div>
    );
  } else {
    return (
      <div className="phone-detail">
        <div className="phone-detail-title">
          <h2>{phone.name}</h2>
          <button onClick={handleClick}>Back</button>
        </div>
        <div className="phone-detail-info">
          <img src={phone.imageFileName} alt="Phone"></img>
          <div className="phone-detail-detail">
            <p>
              <strong>Color:</strong> {phone.color}
            </p>
            <p>
              <strong>Description:</strong> {phone.description}
            </p>
            <p>
              <strong>Manufacturer:</strong> {phone.manufacturer}
            </p>
            <p>
              <strong>Price:</strong> {phone.price}
            </p>
            <p>
              <strong>Processor:</strong> {phone.processor}
            </p>
            <p>
              <strong>Ram:</strong> {phone.ram}
            </p>
            <p>
              <strong>Screen:</strong> {phone.screen}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneDetail;
