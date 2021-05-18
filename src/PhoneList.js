import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
const { getPhones } = require("./service");
const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let phoneData = await getPhones();
        console.log(phoneData.data);
        setPhones(phoneData.data);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => setPhones([]);
  }, []);
  if (phones.length === 0) {
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
      <div>
        <h1 className="app-title">Phone Retail</h1>
        <div className="phone-card-wrapper">
          {phones.map(phone => {
            return (
              <div key={phone.id} className="phone-card">
                <Link
                  to={`/${phone.id}`}
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <img src={phone.imageFileName} alt="Phone"></img>
                  <h2>{phone.name}</h2>
                  <p>Description: {phone.description}</p>
                  <p>Price: {phone.price}$</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default PhoneList;
