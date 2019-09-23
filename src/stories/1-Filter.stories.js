import React from "react";
import Filter from "../components/Filter";

export default {
  title: "Filter"
};

export const Distance = () => (
  <Filter
    filter={{
      name: "distance",
      options: ["< 2min", "< 5min", "< 10min"]
    }}
    selectFilter="< 5min"
    onChange={() => {}}
  />
);
