import React from "react";
import styles from "./Home.module.scss";
import computerImg from "../home/computerImg.svg";
import HeadPhones from "../home/headphonesIm.svg";
import justImage from "../home/justImage.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate()
  
  const handleProduct = () =>{
    navigate("/products")
     const Toast = Swal.mixin({
       toast: true,
       position: "top-end",
       showConfirmButton: false,
       timer: 2000,
       timerProgressBar: true,
       didOpen: (toast) => {
         toast.onmouseenter = Swal.stopTimer;
         toast.onmouseleave = Swal.resumeTimer;
       },
     });
     Toast.fire({
       icon: "success",
       title: "We are in products page",
     });
  }
  return (
    <>
      <div style={{ background: "#0D2612",maxWidth:"1280px",margin:"auto"}}>
        <div className={styles.container}>
          <h1 className={styles.h1style}>Start your game with the best</h1>
          <button onClick={handleProduct} className={styles.shop}>Shop</button>
        </div>
        <h2>Discover news and innovations</h2>
        <div className={styles.ImageContainer}>
          <div>
            <img src={computerImg} alt="computerImg" />
            <h3 style={{ color: "white" }}>Always in the Game</h3>
            <h5 style={{ color: "white" }}>
              Stay ahead of the latest and greatest gaming tech, featuring new
              releases, exclusive deals, and exciting pre-orders.
            </h5>
          </div>
          <div>
            <img src={HeadPhones} alt="HeadPhones" />
            <h3 style={{ color: "white" }}>Enhance Your Experience</h3>
            <h5 style={{ color: "white" }}>
              Upgrade Your World by Elevating your setup and personalize your
              space with our collection of stylish and functional gaming
              accessories.
            </h5>
          </div>
          <div>
            <img src={justImage} alt="justImage" />
            <h3 style={{ color: "white" }}>Command the Battle!</h3>
            <h5 style={{ color: "white" }}>
              Take control with our diverse range of gaming keyboards, featuring
              mechanical switches for tactile feedback etc..
            </h5>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Home;
