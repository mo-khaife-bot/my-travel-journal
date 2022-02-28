import React from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

import data from "./data";
export default function App() {
  const cardElements = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Navbar />
      <section className="card--list">{cardElements}</section>
    </div>
  );
}
