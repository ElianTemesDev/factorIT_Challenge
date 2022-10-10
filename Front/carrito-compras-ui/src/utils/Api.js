
export const getProducts = async () => {
  const response = await fetch('/products')
  return response.json();
}
