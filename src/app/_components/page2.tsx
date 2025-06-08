"use client";

import Container from "./container";
import { categoriesToItem } from "./menu-data";
import { CategoryTitle, MenuItem } from "./menu-components";

export default function Page2() {
  return (
    <>
      <Container className="col-span-1 row-span-6">
        <CategoryTitle category="Chatpatta Chaat" />
        {categoriesToItem["Chatpatta Chaat"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>
      <Container className="col-span-1 row-span-6">
        <CategoryTitle category="Sweets" />
        {categoriesToItem["Sweets"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>
      <Container className="col-span-1 row-span-12">
        <CategoryTitle category="Burgers & Wraps" />
        {categoriesToItem["Burgers & Wraps"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}

        <CategoryTitle category="Pakora Junction" />
        {categoriesToItem["Pakora Junction"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>
      <Container className="col-span-1 row-span-12">
        <CategoryTitle category="Tandoori Vibes" />
        {categoriesToItem["Tandoori Vibes"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>
      <Container className="col-span-1 row-span-12">
        <CategoryTitle category="Drinks" />
        {categoriesToItem["Drinks"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>
    </>
  );
}
