import React from "react";
import "../styles/delivery.css";
import DeliveryCollection from "./DeliveryCollection";
import Filters from "./Filters";
import { restaurants } from "./RestaurentData";
import TopBrands from "./TopBrands";
import ExploreSection from "./ExploreSection";

const deliveryFilter = [
  {
    id: 1,
    icon: <i class="fa-solid fa-timer"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Ratings 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygenic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i class="fa-regular fa-filter"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantsList = restaurants;
function Delivery() {
  return (
    <div>
      <div className="max-width">
        <Filters filterlist={deliveryFilter} />
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection
        list={restaurantsList}
        collectionName="Delivery Restaurants in Delhi"
      />
    </div>
  );
}

export default Delivery;
