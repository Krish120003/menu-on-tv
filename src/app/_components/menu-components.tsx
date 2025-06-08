import type { CategoryName, MenuItem as MenuItemType } from "./menu-data";

export function CategoryTitle({ category }: { category: CategoryName }) {
  return (
    <div className="flex flex-col gap-2 pb-2">
      <h1 className="text-4xl font-bold">{category}</h1>
      <hr className="border-white" />
    </div>
  );
}

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <div
      className="flex justify-between items-center gap-8 text-4xl"
      style={{
        fontFamily: "Alike",
      }}
    >
      <div>{item.name}</div>
      <div>${item.price.toFixed(2)}</div>
    </div>
  );
}
