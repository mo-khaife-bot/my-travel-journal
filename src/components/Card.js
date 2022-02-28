import React from "react";

/**
 * React aweseome icon pin location instead of emoji
 */

export default function Card(props) {
  let badgeText;
  if (props.item.startDate.split(" ").includes("2022")) {
    badgeText = "SOON";
  } else {
    badgeText = "PAST";
  }

  return (
    <section className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.item.imageUrl}`} className="card--img" />
      <div className="card--text">
        <h4 className="card-location">
          📍{props.item.location}
          <a href={props.item.googleMapsUrl} className="gray">
            View on Google Maps
          </a>
        </h4>
        <h1 className="card--title">{props.item.title}</h1>
        <p className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card-description">{props.item.description}</p>
      </div>
    </section>
  );
}
