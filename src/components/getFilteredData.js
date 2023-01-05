const OutStockProduct = (prodArr, OutStock) => {
  switch (OutStock) {
    case true:
      const bufferArr = [...prodArr];
      return bufferArr.filter((item) => item.instock == false);
    case false:
      return prodArr;
    default:
      console.log("delivery filter is broken...");
      break;
  }
};
export const getFilteredData = (
  prodArr,
  OutStock,
  InStock
) => {
  const bufferArr = OutStockProduct(prodArr, OutStock);
  switch (InStock) {
    case true:
      return bufferArr.filter((item) => item.instock == true);
    case false:
      return bufferArr;
    default:
      break;
  }
};
