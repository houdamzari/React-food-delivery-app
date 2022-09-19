import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";
import Cards from "../UI/card/Cards";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCard = useSelector((state) => state.cardUi.cardIsVisible);
  return (
    <div>
      <Header />
      {showCard && <Cards />}
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
