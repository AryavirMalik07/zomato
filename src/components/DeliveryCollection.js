import React from "react";
import Slider from "react-slick";
import "../styles/DeliveryCollection.css";
import NextArrow from "./carousel/NextArrow";
import PrevArrow from "./carousel/PrevArrow";
import DeliveryItem from "./DeliveryItem";

const deliveryItems = [
  {
    id: 1,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 2,
    title: "Dosa",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
  },
  {
    id: 3,
    title: "Chole bhature",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/1/308111/02f9243909514bfacabfef356f3bbf23_o2_featured_v2.jpg",
  },
  {
    id: 4,
    title: "Paratha",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/8/301718/8bde7f4ff647468625f392f7778f3608_o2_featured_v2.jpg",
  },
  {
    id: 5,
    title: "Ladoo",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/2/3322/474f9c810235650d9bf23221cc79addd_o2_featured_v2.jpg",
  },
  {
    id: 6,
    title: "Dosa",
    cover:
      "https://b.zmtcdn.com/data/pictures/6/9126/c4f33b6a221b0d92ef6382032efef858_o2_featured_v2.jpg",
  },
  {
    id: 7,
    title: "Thali",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/7/147/c249b8f80da4d40d2d5771ae201edc32_o2_featured_v2.jpg",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryCollection = () => {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <DeliveryItem item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollection;
