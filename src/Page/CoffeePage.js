import React, { useContext, useState } from "react";
import CoffePage from "../Components/CoffePage";
import Input from "../Components/Input";
import ButtonBox from "../Components/ButtonBox";
import BeansLogoDark from "../logo/Beans_logo_dark.svg";
import CoffeeGirl from "../img/coffee_girl.jpg";
import magazineContext from "../context/magazine/MagazineContext";
import { INCREASE_COUNT, DECREASE_COUNT } from "../context/Types";

const CoffeePage = () => {
  const [state, dispatch] = useContext(magazineContext);

  // const increaser = (price) => {
  //   dispatch({ type: INCREASE_COUNT, payload: price });
  // };

  // const decreaser = (price) => {
  //   dispatch({ type: DECREASE_COUNT, payload: price });
  // };

  // const addProduct = (name, price, country) => {
  //   dispatch({
  //     type: ADD_PRODUCT,
  //     payload: {
  //       name,
  //       country,
  //       price,
  //     },
  //   });
  // };

  // const removeProduct = (id) => {
  //   dispatch({ type: REMOVE_PRODUCT, payload: id });
  // };

  const [searchValue, setSearchValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState([]);
  return (
    <div>
      <div className="banner">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-6"><Header></Header></div>
          </div> */}
          <h1 className="title-big">Our Coffee</h1>
        </div>
      </div>
      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-2">
              <img className="shop__girl" src={CoffeeGirl} alt="girl" />
            </div>
            <div className="col-lg-4">
              <div className="title">About our beans</div>
              <img className="beanslogo" src={BeansLogoDark} alt="Beans logo" />
              <div className="shop__text">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible.
                <br />
                <br />
                Afraid at highly months do things on at. Situation recommend
                objection do intention
                <br />
                so questions.
                <br />
                As greatly removed calling pleased improve an. Last ask him cold
                feel
                <br />
                met spot shy want. Children me laughing we prospect answered
                followed. At it went
                <br />
                is song that held help face.
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="row">
            <div className="col-lg-4 offset-2">
              <form action="#" className="shop__search">
                <label className="shop__search-label" for="filter">
                  Looking for
                </label>
                <Input value={searchValue} setValue={setSearchValue}></Input>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="shop__filter">
                <div className="shop__filter-label">Or filter</div>
                <div className="shop__filter-group">
                  <ButtonBox
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                  ></ButtonBox>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <CoffePage
                searchValue={searchValue}
                selectedCountry={selectedCountry}
              ></CoffePage>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeePage;
