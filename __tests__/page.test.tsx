import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import { categories } from "../src/app/_components/menu-data";

describe.each(categories)("Category: %s", (category) => {
  it(`should render ${category} category in at least one page`, async () => {
    const pages = ["1", "2", "3"] as const;
    let categoryFound = false;

    for (const pageNum of pages) {
      const mockSearchParams = Promise.resolve({ page: pageNum });
      const HomeComponent = await Home({ searchParams: mockSearchParams });
      const { container } = render(HomeComponent);

      // Check if category exists in this page
      const categoryElement = screen.queryByText(category);
      if (categoryElement) {
        categoryFound = true;
        break;
      }

      // Clean up the rendered component before rendering the next page
      container.remove();
    }

    expect(categoryFound).toBe(true);
  });
});
