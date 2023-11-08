export function transformPrice(itemPrice, rate) {
  let res = (itemPrice / rate).toFixed(2)
  return parseFloat(res)
}