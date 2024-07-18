import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Product.module.scss";
import Swal from "sweetalert2";

const baseURL = import.meta.env.VITE_BASE_URL;

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProductById() {
      const response = await fetch(`${baseURL}/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    }

    fetchProductById();
  }, [productId]);
  const handleBack = () => {
    navigate("/");
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
  };

  return (
    <>
      <button className={styles.backButton} onClick={() => handleBack()}>
        back products
      </button>
      <div className={styles.product}>
        {product && (
          <>
            <h2>{product.name}</h2>
            <img src={product.image_url} alt={product.name} />
            <p>{product.description}</p>
            <p className={styles.price}>Price: ${product.price}</p>
            <p className={styles.category}> Brand{product.brand_name}</p>
            <div className={styles.productDetails}>
              <strong>{product.description}</strong>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
