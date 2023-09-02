import React from "react";
import "./itemlist.css";

export default function  Frame () {
  return (
    <div className="frame1">
      <div>
        <h1>Item List</h1>
        <button className="search-button">Search</button>
      </div>
      <div className="table-header">
        <div className="table-cell div-2">View</div>
        <div className="table-cell div-wrapper">ItemCode</div>
        <div className="table-cell div-wrapper-2">Name</div>
        <div className="table-cell div-wrapper-3">Description</div>
        <div className="table-cell div-wrapper-4">Quantity</div>
        <div className="table-cell div-wrapper-5">Min.Quantity</div>
      </div>
      {/* Add ten rows */}
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="table-row" key={index}>
          <div className="table-cell div-2">View</div>
          <div className="table-cell div-wrapper">ItemCode</div>
          <div className="table-cell div-wrapper-2">Name</div>
          <div className="table-cell div-wrapper-3">Description</div>
          <div className="table-cell div-wrapper-4">Quantity</div>
          <div className="table-cell div-wrapper-5">Min.Quantity</div>
        </div>
      ))}
    </div>
  );
}
