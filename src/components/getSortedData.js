export const getSortedData = (prodArr, sortBy) => {
  switch (sortBy) {
    case "FEATURED":
      return prodArr.filter((e) => {
        return e.featured == true;
      });

    case "BESTSELLER":
      return prodArr.filter((e) => {
        return e.bestseller == true;
      });
    case "A_Z":
      return prodArr.sort((a, b) => a.title.localeCompare(b.title));

      case "Z_A":
      return prodArr.sort((a, b) => b.title.localeCompare(a.title));

    case "PRICE_LOW_TO_HIGH":
      return prodArr.sort((a, b) => a.Price - b.Price);

    case "PRICE_HIGH_TO_LOW":
      return prodArr.sort((a, b) => b.Price - a.Price);

    case "RATING_HIGH_TO_LOW":
      return prodArr.sort((a, b) => b.rating - a.rating);

      case "DATE_OLD_TO_NEW":
      return prodArr.sort((a,b) =>
        new Date(a.date) -new Date(b.date)
      );

      case "DATE_NEW_TO_OLD":
      return prodArr.sort((a,b) =>
        new Date(b.date) -new Date(a.date)
      );

    case "none":
      return prodArr;

    default:
      console.log("something is wrong with getSortedData...");
      return prodArr;
  }
};
