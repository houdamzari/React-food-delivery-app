import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/product-card.css";
import { useDispatch } from "react-redux";
import { cardActions } from "../../../store/cardSlice";
const ProductCard = ({ item }) => {
  const { id, title, image01, price } = item;
  const dispatch = useDispatch();

  const addToCard = () => {
    dispatch(
      cardActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
    console.log();
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img
          src={image01}
          alt="Product"
          className="w-50
        "
        />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/allFood/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">MAD {price}</span>
          <button className="addTOCart__btn" onClick={addToCard}>
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
