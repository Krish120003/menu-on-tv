export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface MenuItem {
  name: string;
  price: number;
}

export const menuData = [
  {
    category: "Chatpatta Chaat",
    items: [
      { name: "Bhalla Papdi Chaat", price: 8.99 },
      { name: "Chat Papdi", price: 8.99 },
      { name: "Dahi Puri", price: 8.99 },
      { name: "Pani Puri", price: 8.99 },
      { name: "Samosa Chana Chaat", price: 8.99 },
      { name: "Dahi Bhalla", price: 8.99 },
      { name: "Desi Ghee Tawa Aloo Tikki", price: 9.99 },
    ],
  },
  {
    category: "Street Eats Cravings",
    items: [
      { name: "Rajma Rice", price: 7.99 },
      { name: "Chana Rice", price: 7.99 },
      { name: "Chana Bhatura", price: 9.99 },
      { name: "Matar Paneer", price: 13.99 },
      { name: "Mix Veg", price: 13.99 },
      { name: "Pav Bhaji", price: 8.99 },
      { name: "Chana Kulcha", price: 9.99 },
      { name: "Kadhi Rice", price: 7.99 },
      { name: "Stuffed Chana Kulcha", price: 5.99 },
      { name: "Tava Soya Chaap w/ Kulcha", price: 11.99 },
      { name: "Makki di Roti & Sarson da Saag", price: 14.99 },
      { name: "Biryani", price: 12.99 },
      { name: "Bedmi Poori", price: 9.99 },
    ],
  },
  {
    category: "Burgers & Wraps",
    items: [
      { name: "Aloo Tikki Burger", price: 8.99 },
      { name: "Noodle Burger", price: 8.99 },
      { name: "Mushroom Wrap", price: 9.99 },
      { name: "Paneer Wrap", price: 9.99 },
      { name: "Soya Chaap Wrap", price: 9.99 },
    ],
  },
  {
    category: "Tandoori Vibes",
    items: [
      { name: "Achari Chaap", price: 13.99 },
      { name: "Achari Paneer Tikka", price: 13.99 },
      { name: "Hariyali Chaap", price: 13.99 },
      { name: "Hariyali Paneer Tikka", price: 13.99 },
      { name: "Malai Chaap", price: 13.99 },
      { name: "Tandoori Chaap", price: 13.99 },
      { name: "Tandoori Paneer Tikka", price: 13.99 },
    ],
  },
  {
    category: "Indo-Chinese",
    items: [
      { name: "Honey Chilli Potato", price: 11.99 },
      { name: "Honey Chilli Gobi", price: 11.99 },
      { name: "Manchurian", price: 11.99 },
      { name: "Veg Noodles", price: 11.99 },
      { name: "Spring Rolls", price: 11.99 },
    ],
  },
  {
    category: "Momos Madness",
    items: [
      { name: "Steamed Momos", price: 11.99 },
      { name: "Fried Momos", price: 11.99 },
      { name: "Chilli Tossed Momos", price: 11.99 },
      { name: "Kurkure Momos", price: 12.99 },
      { name: "Tandoori Momos", price: 13.99 },
      { name: "Malai Momos", price: 13.99 },
    ],
  },
  {
    category: "Paranthas & Kulchas",
    items: [
      { name: "Aloo Kulcha", price: 12.99 },
      { name: "Onion Kulcha", price: 12.99 },
      { name: "Mix Kulcha", price: 12.99 },
      { name: "Amritsari Kulcha", price: 13.99 },
      { name: "Paneer Kulcha", price: 13.99 },
      { name: "Plain Tawa Parantha", price: 9.99 },
      { name: "Aloo Pyaz Parantha", price: 11.99 },
      { name: "Gobi Parantha", price: 11.99 },
      { name: "Paneer Paratha", price: 12.99 },
      { name: "Tandoori Aloo Parantha", price: 12.99 },
      { name: "Tandoori Gobi Parantha", price: 12.99 },
      { name: "Tandoori Mix Parantha", price: 12.99 },
      { name: "Tandoori Paneer Parantha", price: 13.99 },
    ],
  },
  {
    category: "Pakora Junction",
    items: [
      { name: "Bread Pakora", price: 7.99 },
      { name: "Mix Pakora", price: 7.99 },
      { name: "Paneer Pakora", price: 9.99 },
      { name: "Gobi Pakora", price: 8.99 },
      { name: "Pakora Platter", price: 11.99 },
    ],
  },
  {
    category: "Swad-e-Gravy (Sabjis)",
    items: [
      { name: "Aloo Gobi", price: 12.99 },
      { name: "Baingan Bharta", price: 12.99 },
      { name: "Bhindi Do Pyaza", price: 13.99 },
      { name: "Chana Masala", price: 12.99 },
      { name: "Dal Makhani", price: 12.99 },
      { name: "Kadhai Paneer", price: 13.99 },
      { name: "Mushroom Do Pyaza", price: 13.99 },
      { name: "Paneer Bhurji", price: 14.99 },
      { name: "Shahi Paneer", price: 13.99 },
      { name: "Soya Chaap Gravy", price: 13.99 },
      { name: "Yellow Dal Tadka", price: 12.99 },
      { name: "Methi Malai Paneer", price: 13.99 },
      { name: "Malai Kofta", price: 14.99 },
      { name: "Palak Paneer", price: 14.99 },
      { name: "Paneer Chilli", price: 13.99 },
      { name: "Paneer Pasanda", price: 10.99 },
      { name: "Paneer Tikka Butter Masala", price: 11.99 },
      { name: "Methi Malai Mutter", price: 13.99 },
    ],
  },
  {
    category: "Roti & Naan Corner",
    items: [
      { name: "Butter Naan", price: 2.99 },
      { name: "Garlic Naan", price: 3.99 },
      { name: "Garlic Chilli Naan", price: 3.99 },
      { name: "Missi Roti", price: 3.99 },
      { name: "Plain Naan", price: 2.99 },
      { name: "Bhature", price: 2.99 },
      { name: "Tawa Roti", price: 1.0 },
      { name: "Tandoori Roti", price: 1.99 },
      { name: "Plain Parantha", price: 2.99 },
      { name: "Lachha Parantha", price: 3.99 },
      { name: "Poori", price: 1.29 },
    ],
  },
  {
    category: "Drinks",
    items: [
      //   { name: "Coffee Shake", price: 5.99 },
      { name: "Tea", price: 2.99 },
      { name: "Coffee", price: 2.99 },
      { name: "Fresh Orange Juice", price: 5.99 },
      { name: "Mixed Fruit Juice", price: 5.99 },
      { name: "Pop", price: 1.99 },
      { name: "Kesar Badam Milk", price: 6.99 },
      { name: "Lemon Soda", price: 3.99 },
      { name: "Cold Coffee", price: 4.99 },
      { name: "Roohafza Shake", price: 5.99 },
      { name: "Mango Lassi", price: 5.99 },
      { name: "Salted Lassi", price: 5.99 },
      { name: "Sweet Lassi", price: 6.99 },
      { name: "Falooda", price: 9.99 },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "Fries", price: 5.99 },
      { name: "Green Salad", price: 4.99 },
      { name: "Macaroni Salad", price: 4.99 },
      { name: "Raita", price: 3.99 },
      { name: "White Butter", price: 1.99 },
      { name: "Papad", price: 0.99 },
      { name: "Mint Chutney", price: 0.99 },
      { name: "Sweet Chutney", price: 0.99 },
    ],
  },
  {
    category: "Sweets",
    items: [
      { name: "Kheer", price: 5.99 },
      { name: "Ras Malai", price: 5.49 },
      { name: "Gulab Jamun (2 pcs)", price: 3.99 },
      { name: "Gajar Halwa", price: 4.99 },
      { name: "Ice Cream", price: 5.99 },
      { name: "Sooji Halwa", price: 4.99 },
      { name: "Moong Dal Halwa", price: 4.99 },
    ],
  },
  {
    category: "Thali",
    items: [
      { name: "Takeout Tiffin", price: 8.99 },
      { name: "Takeout Thali", price: 11.99 },
      { name: "Dine-in Thali", price: 12.99 },
    ],
  },
  {
    category: "Extras",
    items: [
      { name: "Extra Pav", price: 1.0 },
      { name: "Extra Kulcha", price: 2.99 },
      { name: "White Butter", price: 1.99 },
    ],
  },
] as const satisfies MenuCategory[];

export const categories = menuData.map((category) => category.category);

export type CategoryName = (typeof categories)[number];

export const categoriesToItem: Record<CategoryName, MenuItem[]> =
  menuData.reduce((acc, category) => {
    acc[category.category] = category.items;
    return acc;
  }, {} as Record<string, MenuItem[]>);
