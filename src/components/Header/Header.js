import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/logo.svg";
import { NavLink, Link } from "react-router-dom";
import "../../styles/header.css";
import { useSelector, useDispatch } from "react-redux";
import { cardUiActions } from "../../store/cardUiSlice";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "All-Food",
    path: "/allFood",
  },

  {
    display: "Card",
    path: "/card",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const { totalQuantity } = useSelector((state) => state.card);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
      return () => window.removeEventListener("scroll");
    });
  }, []);
  const toggleCard = () => {
    dispatch(cardUiActions.toggleCard());
  };
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div
          className="nav__wrapper d-flex align-items-center
        justify-content-between "
        >
          <div className="logo">
            <img src={logo} alt="logo" className="w-25" />
          </div>
          {/* // Mennu  */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* Nav right ICons */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCard}>
              <i className="ri-shopping-basket-line">
                <span className="cart__badge text-black">{totalQuantity}</span>
              </i>
            </span>
            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
