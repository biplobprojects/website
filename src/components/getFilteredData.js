export const getFilteredData = (
  prodArr,
  InStock,
  OutStock,
  startPrice,
  endPrice,
  priceRange
) => {
  let priceArray = prodArr.filter((product) => {
    return product.Price;
  });

  let priceRangeArray = priceArray.filter((e) => {
    return e.Price >= startPrice && e.Price <= endPrice;
  });
  let filteredArr = prodArr.filter((product) => {
    if ((OutStock && InStock) || (!OutStock && !InStock)) {
      return product;
    }
    if (OutStock) {
      return product.instock == false;
    }
    if (InStock) {
      return product.instock == true;
    }
  });

  if (priceRangeArray.length) {
    let filteredPriceArray = filteredArr.filter(function (e) {
      return priceRangeArray.indexOf(e) > -1;
    });
    return filteredPriceArray;
  } else {
    return filteredArr;
  }
};
