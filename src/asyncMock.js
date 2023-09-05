const products = [
  {
    id: "1",
    name: "Cheesecake",
    category: "cake",
    price: 100,
    image: "../src/images/cheesecake.jpg",
    description: "wild fruits cheescake",
  },
  {
    id: "2",
    name: "Chocolate Cake",
    category: "cake",
    price: 100,
    image: "../src/images/chocolate-cake.jpg",
    description: "Chocolate cake with chocolate mousse inside",
  },
  {
    id: "3",
    name: "Coconut Pie",
    category: "pie",
    price: 100,
    image: "../src/images/coconut-pie.jpg",
    description: "Classic coconut pie",
  },
  {
    id: "4",
    name: "Fruit Chocolate Cake",
    category: "cake",
    price: 100,
    image: "../src/images/fruit-chocolate-cake.jpg",
    description: "Dark chocolate cake with a fruit of your choice on top",
  },
  {
    id: "5",
    name: "Fruit Pie",
    category: "pie",
    price: 100,
    image: "../src/images/fruit-pie.jpg",
    description: "Delicious pie with the best fruits of the season",
  },
  {
    id: "6",
    name: "Lemon Pie",
    category: "pie",
    price: 100,
    image: "../src/images/lemon-pie.jpg",
    description: "Amazing lemon pie",
  },
  {
    id: "7",
    name: "Letter Cake",
    category: "cake",
    price: 100,
    image: "../src/images/letter-cake.jpg",
    description: "Letter-shaped cake of your choice",
  },
  {
    id: "8",
    name: "Toffee Pie",
    category: "pie",
    price: 100,
    image: "../src/images/toffee-pie.jpg",
    description: "Classic toffee pie",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};
