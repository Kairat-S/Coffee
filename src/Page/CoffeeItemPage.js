import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import BeansLogoDark from "../logo/Beans_logo_dark.svg";

export default function CoffeeItemPage() {
  const { id } = useParams();
  const [oneCoffee, setOneCoffee] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getCoffeedata() {
      const res = await fetch(`http://localhost:4000/coffee/${id}`);
      const coffee = await res.json();
      console.log(coffee);
      setOneCoffee(coffee);
      setLoading(false);
    }
    getCoffeedata();
    return () => setOneCoffee([]);
  }, []);

  if (loading) {
    return "...Loading";
  } else {
    return (
      <div>
        <div className="banner">
          <div className="container">
            <Header></Header>
            <h1 className="title-big">Our Coffee</h1>
          </div>
        </div>
        <section className="shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-5_offset-1">
                <img
                  className="shop__girl"
                  src={oneCoffee.url}
                  alt="coffee_item"
                />
              </div>
              <div className="col-lg-4">
                <div className="title">About it</div>
                <img
                  className="beanslogo"
                  src={BeansLogoDark}
                  alt="Beans logo"
                />
                <div className="shop__point">
                  <span>Country:</span>
                  {oneCoffee.country}
                </div>
                <div className="shop__point">
                  <span>Description:</span>
                  {oneCoffee.description}
                </div>
                <div className="shop__point">
                  <span>Price:</span>
                  <span className="shop__point-price">{oneCoffee.price}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return <div>CoffeeItemPage{id}</div>;
}
