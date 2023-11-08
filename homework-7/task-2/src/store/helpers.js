export function transformPrice(itemPrice, rate) {
  return (itemPrice / rate).toFixed(2)
}