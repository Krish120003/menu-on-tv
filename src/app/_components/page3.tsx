"use client";

import Container from "./container";
import { categoriesToItem } from "./menu-data";
import { CategoryTitle, MenuItem } from "./menu-components";

export default function Page3() {
  return (
    <>
      <Container className="col-span-1 row-span-12">
        <CategoryTitle category="Paranthas & Kulchas" />
        {categoriesToItem["Paranthas & Kulchas"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>

      <Container className="row-span-12">
        <CategoryTitle category="Swad-e-Gravy (Sabjis)" />
        {categoriesToItem["Swad-e-Gravy (Sabjis)"].slice(0, 14).map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>

      <Container className="row-span-4">
        {/* <CategoryTitle category="Swad-e-Gravy (Sabjis)" /> */}
        {categoriesToItem["Swad-e-Gravy (Sabjis)"].slice(14).map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>
      <Container className="col-span-1 row-span-3">
        <CategoryTitle category="Thali" />
        {categoriesToItem["Thali"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>
      <Container className="col-span-1 row-span-5">
        <CategoryTitle category="Indo-Chinese" />
        {categoriesToItem["Indo-Chinese"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>

      <Container className="col-span-1 row-span-8">
        <CategoryTitle category="Roti & Naan Corner" />
        {categoriesToItem["Roti & Naan Corner"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>
    </>
  );
}
