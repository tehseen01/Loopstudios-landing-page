import React from "react";
import {
  deepEarthImg,
  deepEarthImgDesktop,
  nightArcadeImg,
  nightArcadeImgDesktop,
  fisheyeImg,
  fisheyeImgDesktop,
  curiosityImg,
  curiosityImgDesktop,
  theGridImg,
  theGridImgDesktop,
  fromAboveImg,
  fromAboveImgDesktop,
  pocketBorealisImg,
  pocketBorealisImgDesktop,
  soccerTeamImg,
  soccerTeamImgDesktop,
} from "./index";
import "../SASS/product.scss";

const Product = () => {
  return (
    <section>
      <article>
        <h2 className="heading">Our creations</h2>
        <div className="product-container">
          {productList.map((item) => {
            return (
              <div key={item.id} className="product-item">
                <picture>
                  <source media="(min-width: 800px)" srcSet={item.imgDesktop} />
                  <img src={item.img} alt="" />
                </picture>
                <h3>{item.title}</h3>
              </div>
            );
          })}
        </div>
        <div className="button-box">
          <button>See all</button>
        </div>
      </article>
    </section>
  );
};

export default Product;

const productList = [
  {
    id: 1,
    img: deepEarthImg,
    imgDesktop: deepEarthImgDesktop,
    title: "Deep earth",
  },
  {
    id: 2,
    img: nightArcadeImg,
    imgDesktop: nightArcadeImgDesktop,
    title: "Night arcade",
  },
  {
    id: 3,
    img: soccerTeamImg,
    imgDesktop: soccerTeamImgDesktop,
    title: "Soccer team VR",
  },
  {
    id: 4,
    img: theGridImg,
    imgDesktop: theGridImgDesktop,
    title: "The grid",
  },
  {
    id: 5,
    img: fromAboveImg,
    imgDesktop: fromAboveImgDesktop,
    title: "From up above VR",
  },
  {
    id: 6,
    img: pocketBorealisImg,
    imgDesktop: pocketBorealisImgDesktop,
    title: "Pocket borealis",
  },
  {
    id: 7,
    img: curiosityImg,
    imgDesktop: curiosityImgDesktop,
    title: "The curiosity",
  },
  {
    id: 8,
    img: fisheyeImg,
    imgDesktop: fisheyeImgDesktop,
    title: "Make it fisheye",
  },
];
