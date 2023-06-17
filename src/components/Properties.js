import React from "react";
import PropertyCard from "./PropertyCard";
import properties from "../product";

const Properties = () => {
  return (
    <div>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Properties;
