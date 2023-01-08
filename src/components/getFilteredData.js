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
  InStock,
  OutStock,
  highestPrice
) => {
  // const bufferArr = OutStockProduct(prodArr, OutStock);
  // switch (InStock) {
  //   case true:
  //     return bufferArr.filter((item) => item.instock == true);
  //   case false:
  //     return bufferArr;
  //   default:
  //     break;
  // }
  // for() To Fetch highrst price of each product array
// for(i=0;i<prodArr.len; i++){
//   return 
// }
  // For i = 0 ; i<prodArr.len i++{
    // if(starpp>=prodArr.p && endP<pr){
    //   se
    // }
  //   let AllPrice = prodArr.map(e=>{
  //     return e.Price
  //   });
  //   console.log(AllPrice,"aaaaaaaaaaaaaaaaaa")
  //  highestPrice = Math.max.apply(null,AllPrice)
  // setHighestPrice(price)
  // console.log(price,"price")
  
  let filteredArr = prodArr.filter((product) => {
    if((OutStock && InStock) || (!OutStock && !InStock)){
      return product
    }
    if(OutStock){
      return product.instock == false;
    }
    if(InStock){
      return product.instock == true;
    }
    
  })
  // console.log(OutStock,InStock," bbbbbbbbbbbbbbb",filteredArr);

  return filteredArr
};
