import React, { useContext } from "react";
import Logo from "../logo/Logo.svg";
import { Link } from "react-router-dom";
import magazineContext from "../context/magazine/MagazineContext";

export default function Header() {
  const [state, dispatch] = useContext(magazineContext);
  console.log(state);
  return (
    <div className="row">
      <div className="col-lg-6">
        <header>
          <ul className="header">
            <li className="header__item">
              <Link to={"/"}>
                <img src={Logo} alt="logo" />
              </Link>
            </li>
            <li className="header__item">
              <Link to={"/CoffeePage"}> Our coffee </Link>
            </li>
            <li className="header__item">
              <Link to={"/GoodsPage"}> For your pleasure </Link>
            </li>
          </ul>
          <p>My count is: {state.count}</p>
          <p> My cart: {state.products.length} </p>
        </header>
      </div>
    </div>
  );
}
