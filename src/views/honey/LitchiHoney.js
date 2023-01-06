import React, { useState } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import honey1 from "../../assets/images/litchiHoney/Honey_250g_5.webp";
import honey2 from "../../assets/images/litchiHoney/Honey_500g_5.webp";
import honey3 from "../../assets/images/litchiHoney/Honey-1kg_5.webp";

export default function LitchiHoney() {
  const images = [
    { id: 0, value: honey1, price: "249.00", size: "250 g" },
    { id: 1, value: honey2, price: "389.00", size: "500 g" },
    { id: 2, value: honey3, price: "569.00", size: "1 kg" },
  ];
  const benefits = [
    "Aids in Gastrointestinal Diseases",
    "Rich in Antioxidants",
    "Boosts Immunity System",
    "Antibacterial Properties",
    "Aids in Weight Management",
  ];
  const [img, setImg] = useState(images);
  return (
    <div>
      <ProductDetails
        productName="Litchi Honey"
        imageArray={img}
        description="Our bee colonies make it; this unifloral honey from the nectar of the Litchi plant standby for purity and quality. It doesn’t undergo a pasteurization process; hence it doesn’t taste good, but it does good. Litchi honey is a good substitute for sweeteners in desserts and juices.
        "
        benefits={benefits}
      />
    </div>
  );
}
