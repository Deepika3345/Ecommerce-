export const fetchItems = async () => {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json()
  return data

}
export const fetchCategoryProducts = async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await response.json();
  return data;
};

// Search

