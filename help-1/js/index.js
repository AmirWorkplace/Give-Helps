function products(productWeight, productPrice) {
  const totalPrice = productWeight * productPrice;

  return totalPrice;
}

const productTotal = products(5, 115);
console.log(productTotal);
