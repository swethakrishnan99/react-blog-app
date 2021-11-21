import React from "react";
import { useParams } from "react-router";

export default function AddBox() {
  const { category } = useParams();

  return (
    <div className={category !== undefined ? "add-box" : "add-box margin-top"}>
      <p>Advertisement</p>
    </div>
  );
}
