import React from "react";
import HeroProducts from "./HeroProducts";
import CarouselProducts from "./CarouselProducts";
import DraggableImages from "./DraggableImages";
import StepsHome from "../Home/StepsHome";
import PackageProducts from "./PackageProducts";

export default function Products() {
  return (
    <div>
      <HeroProducts />
      <CarouselProducts />
      <DraggableImages />
      <StepsHome />
      <PackageProducts />
    </div>
  );
}
