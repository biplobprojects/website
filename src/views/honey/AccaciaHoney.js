import React, { useState } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import honey1 from "../../assets/images/accacia-honey/Honey_1.webp";
import honey2 from "../../assets/images/accacia-honey/Honey_2.webp";
import honey3 from "../../assets/images/accacia-honey/Honey_3.webp";

export default function AccaciaHoney() {
  const images = [
    { id: 0, value: honey1, price: "340.00", size: "250 g" },
    { id: 1, value: honey2, price: "649.00", size: "500 g" },
    { id: 2, value: honey3, price: "1,199.00", size: "1 kg" },
  ];
  const benefits = [
    "Improves Blood Circulation",
    "Maintains Digestive Health",
    "Strong Antiseptic Effect",
    "Anti-Inflammatory Properties",
    "Instant Energy Booster",
  ];
  const [img, setImg] = useState(images);
  return (
    <div>
      <ProductDetails
        productName="Acacia Honey"
        imageArray={img}
        description="Enriched in antioxidants with a low Glycemic Index (GI) ranking, this unifloral honey 
        from the nectar of the Acacia plant is a complete natural source of energy. It doesn’t go through 
        the pasteurization process and hence retains the original taste and nutrition of raw honey. 
        It is a powerhouse of antioxidants that makes you feel energetic and rejuvenates your overall 
        well-being."
        benefits ={benefits}
      />
    </div>
  );
}
