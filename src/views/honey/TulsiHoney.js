import React, { useState } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import honey1 from "../../assets/images/tulsiHoney/Vinegar_01.webp";
import honey2 from "../../assets/images/tulsiHoney/Honey_500g_8.webp";
import honey3 from "../../assets/images/tulsiHoney/Honey-1kg_4.webp";

export default function TulsiHoney() {
  const images = [
    { id: 0, value: honey1, price: "349.00", size: "250 g" },
    { id: 1, value: honey2, price: "599.00", size: "500 g" },
    { id: 2, value: honey3, price: "979.00", size: "1 kg" },
  ];
  const benefits = [
    "Improves Blood Circulation",
    "Maintains Oral Health",
    "Aids Sinus Issues",
    "Combats Indigestion",
    "Boosts Immune System",
  ];
  const [img, setImg] = useState(images);
  return (
    <div>
      <ProductDetails
        productName="Tulsi Honey"
        imageArray={img}
        description="Loaded with vital nutrients, this unifloral honey is derived from the holy tulsi plants. It is 100% pure and free from harmful fertilizers and adulteration. It matches the international quality and is packed under stringent conditions to ensure natural aroma and flavor. It has therapeutic properties that help restore immunity and keep you away from seasonal allergies.
        "
        benefits={benefits}
      />
    </div>
  );
}
