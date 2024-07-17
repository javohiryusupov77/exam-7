import React from "react";
import styles from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    const handleOfNotFound = () => {
        navigate("/products")
    }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <button onClick={handleOfNotFound} className={styles.homeLink}>
        Go back to the ProductsPage
      </button>
    </div>
  );
};

export default NotFound;
