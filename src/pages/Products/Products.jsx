import React from "react";
import HeroProducts from "./HeroProducts";
import CarouselProducts from "./CarouselProducts";
import DraggableImages from "./DraggableImagesProducts";
import PackageProducts from "./PackageProducts";
import Form from "../Home/Form";

export default function Products() {
  return (
    <div>
      <HeroProducts />
      <CarouselProducts />
      <DraggableImages/>
      <Form/>
      <PackageProducts />
    </div>
  );
}
