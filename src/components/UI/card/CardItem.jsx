import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/cart-item.css";
import { useDispatch } from "react-redux";
import { cardActions } from "../../../store/cardSlice";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, price, image01, quantity, totalPrice } = item;
  const increaseQuantity = () => {
    dispatch(
      cardActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };
  const decreaseQuantity = () => {
    dispatch(cardActions.removeItem(id));
  };
  const deleteItem = () => {
    dispatch(cardActions.deleteItem(id));
  };
  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="ProductImage" className="bg-black" />
        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-center">
          <div>
            <h6 className="cart__product-title"> {title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity} x <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center  justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={increaseQuantity}>
                <i className="ri-add-line"></i>
              </span>
              <span>{quantity}</span>
              <span className="decrease__btn" onClick={decreaseQuantity}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CardItem;
