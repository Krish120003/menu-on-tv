"use client";

import Container from "./container";
import Image from "next/image";
import { categoriesToItem } from "./menu-data";
import { CategoryTitle, MenuItem } from "./menu-components";

export default function Page1() {
  return (
    <>
      <Container className="col-span-1 row-span-12">
        <CategoryTitle category="Street Eats Cravings" />
        {categoriesToItem["Street Eats Cravings"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>

      <Container className="col-span-1 row-span-6">
        <CategoryTitle category="Momos Madness" />
        {categoriesToItem["Momos Madness"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>

      <Container className="col-span-1 row-span-6 col-start-3">
        <CategoryTitle category="Sides" />
        {categoriesToItem["Sides"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>
      <Container className="col-span-1 row-span-6 col-start-4">
        <CategoryTitle category="Extras" />
        {categoriesToItem["Extras"].map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </Container>
      <div className="col-span-3 row-span-6 col-start-2 row-start-7 flex items-center justify-between text-4xl font-bold relative ">
        <div className="h-full aspect-square bg-blue-500 relative">
          <Image
            src="/samosa.png"
            alt="Samosa"
            className="w-full h-full object-cover"
            fill
          />
        </div>
        <div className="flex-grow bg-lime-500 h-full flex flex-col items-end">
          <div>
            <h2 className="text-[100px] opacity-50 font-bold">
              Today's Special
            </h2>
            <p className="text-[200px]">Pav Bhaji</p>
          </div>
        </div>
        {/* <Image src="/todayspecial.png" alt="Today's Special" fill /> */}
      </div>
    </>
  );
}
