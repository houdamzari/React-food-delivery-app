import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import "../../../styles/shopping-cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cardUiActions } from "../../../store/cardUiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cards = () => {
  const dispatch = useDispatch();
  const notify = () => toast.info("DEMO ENDED !");
  const toggleCard = () => {
    dispatch(cardUiActions.toggleCard());
  };
  const cardProducts = useSelector((state) => state.card.cardItems);
  const totalAmount = useSelector((state) => state.card.totalAmount);
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCard}>
            <i className="ri-close-fill"></i>
          </span>
        </div>
        <div className="cart__item-list">
          {cardProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the card</h6>
          ) : (
            cardProducts.map((item, index) => (
              <CardItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal amount: <span>${totalAmount}</span>
          </h6>

          <button onClick={notify}>Checkout !</button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </ListGroup>
    </div>
  );
};

export default Cards;
