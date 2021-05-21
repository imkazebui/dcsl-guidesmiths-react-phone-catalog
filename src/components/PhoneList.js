import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import Loader from "react-loader-spinner";
import { getPhones } from "../services/phone.service";
import PhoneCreate from "./PhoneCreate";

const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        let phoneData = await getPhones();
        setPhones(phoneData.data);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => setPhones([]);
  }, []);

  const handleClick = () => setOpen(true);
  const onClose = () => setOpen(false);
  const addDevice = device => {
    onClose();
    setPhones([...phones, { ...device }]);
  };

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
  }
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        center
      >
        <PhoneCreate addDevice={addDevice}></PhoneCreate>
      </Modal>
      <div className="phone-list-header">
        <h1>Phone Catalog</h1>
        <button className="button-custom button-add" onClick={handleClick}>
          Add Device
        </button>
      </div>

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
};

export default PhoneList;
