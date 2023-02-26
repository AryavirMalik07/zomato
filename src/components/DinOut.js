import React from "react";
import "../styles/dinin.css";
import Collection from "./Collection";
import Filters from "./Filters";
import ExploreSection from "./ExploreSection";
import { diningOut } from "./DiningData";
const collectionList = [
  {
    id: 1,
    title: "trending this week",
    cover:
      "https://b.zmtcdn.com/data/collections/8dd5adbf91d78c8d11796c6b230539ef_1674568824.jpg",
    places: "12 places",
  },
  {
    id: 2,
    title: "trending this week",
    cover:
      "https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252614.jpg",
    places: "12 places",
  },
  {
    id: 3,
    title: "trending this week",
    cover:
      "https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
    places: "12 places",
  },
  {
    id: 4,
    title: "trending this week",
    cover:
      "https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg",
    places: "12 places",
  },
  {
    id: 5,
    title: "trending this week",
    cover:
      "https://b.zmtcdn.com/data/collections/ace6a36e46e20a93c1dd062cac4c8216_1676456116.jpg",
    places: "12 places",
  },
  {
    id: 6,
    title: "trending this week",
    cover:
      "https://b.zmtcdn.com/data/collections/902ab00320f06e611d5118c61f1c6918_1675332681.jpg",
    places: "12 places",
  },
  {
    id: 7,
    title: "trending this week",
    cover:
      "https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg",
    places: "12 places",
  },
];

const diningFilters = [
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

const diningList = diningOut;

function DinOut() {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterlist={diningFilters} />
      </div>
      <div>
        <ExploreSection list={diningList} />
      </div>
    </div>
  );
}

export default DinOut;
