import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import HelmetImage from "../assets/images/Helmet-image.svg";
import "../styles/hero-section.css";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import ProductCard from "../components/UI/product/ProductCard";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import whyImg from "../assets/images/why-us.svg";
import networkingImg from "../assets/images/network.svg";
import products from "../assets/fake-data/products.js";
import TestemonialSlider from "../components/UI/slider/TestemonialSlider";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "lorem ipsum dolor sit amet, consectetur",
  },
];
const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter(
      (product) => product.category === "Pizza"
    );
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);
  console.log(hotPizza);
  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (product) => product.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (product) => product.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (product) => product.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span>Just wait food at<span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestiae minima itaque deserunt provident alias.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/allFood">See All Food</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charges
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="hero__image">
                <img src={HelmetImage} alt="hero" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title"> Just sit back at home</h2>
              <h2 className="feature__title">
                we will
                <span> take care of it</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, nulla explicabo quasi quibusdam dolorum magnam iusto.
              </p>

              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                magnam nobis neque numquam facilis? Eos nobis animi voluptate
                vero.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg={4} md={6} sm={6} key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img src={item.imgUrl} alt="feature" className="w-25 mb-3" />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
            <Col lg={4} md={4}></Col>
            <Col lg={4} md={4}></Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2>Popular Food</h2>
            </Col>
            <Col lg={12}>
              <div
                className="food__category d-flex align-items-center justify-content-center
                gap-4
              "
              >
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2
                  ${category === "BURGER" ? "foodBtnActive" : ""}
                  `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="categoryImg01" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2  ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="categoryImg" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2  ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="categoryImg" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg={3} md={4} sm={6} xs={6} key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <img src={whyImg} alt="why-img" className="w-100" />
            </Col>
            <Col lg={6} md={6}>
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why<span>Tasty Treat ?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti rerum recusandae iste quod doloribus itaque maxime.
                  Quas porro quo perferendis ut consectetur sed inventore beatae
                  quos incidunt est. Recusandae, fugiat!
                </p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p
                      className="choose__us-title d-flex align-items-center
                    gap-2"
                    >
                      <i className="ri-checkbox-circle-line"></i>
                      Fresh and tasty Food
                    </p>
                    <p className="choose__us-desc">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat fugit quisquam aperiam, odio est accusamus quos
                      magnam pariatur obcaecati aut eos maxime quis? Ad
                      veritatis placeat, quae non iusto earum.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p
                      className="choose__us-title d-flex align-items-center
                    gap-2"
                    >
                      <i className="ri-checkbox-circle-line"></i>
                      Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat fugit quisquam aperiam, odio est accusamus quos
                      magnam pariatur obcaecati aut eos maxime quis? Ad
                      veritatis placeat, quae non iusto earum.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p
                      className="choose__us-title d-flex align-items-center
                    gap-2"
                    >
                      <i className="ri-checkbox-circle-line"></i>
                      Order from any location
                    </p>
                    <p className="choose__us-desc">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat fugit quisquam aperiam, odio est accusamus quos
                      magnam pariatur obcaecati aut eos maxime quis? Ad
                      veritatis placeat, quae non iusto earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h3> Hot Pizza </h3>
            </Col>
            {hotPizza.map((item) => (
              <Col lg={3} md={4} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className="testimonial">
                <h5 className="testimonial__subtitle">Testemonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>Customers </span>are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  quod saepe accusamus, molestias veritatis unde iure quidem
                  odio libero. Accusantium eius enim aspernatur quaerat natus
                  explicabo aperiam sequi earum similique!
                </p>
                <TestemonialSlider />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <img src={networkingImg} alt="product" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
