import React, { useState } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import honey1 from "../../assets/images/wildHoney/Honey_11.webp";
import honey2 from "../../assets/images/wildHoney/Honey_12.webp";
import honey3 from "../../assets/images/wildHoney/Honey_13.webp";

export default function WildHoney() {
  const images = [
    { id: 0, value: honey1, price: "330.00", size: "250 g" },
    { id: 1, value: honey2, price: "599.00", size: "500 g" },
    { id: 2, value: honey3, price: "1,099.00", size: "1 kg" },
  ];
  const benefits = [
    "Increases Oxygen Levels",
    "Treats Acne and Reduces Pigmentation",
    "Fosters Cardiovascular Health",
    "Promotes Wound Healing",
    "Boosts Immune System",
  ];
  const [img, setImg] = useState(images);
  return (
    <div>
      <ProductDetails
        productName="Wild Honey"
        imageArray={img}
        description="Obtained from the dense forests of India, Livasa naturals’ wild honey is exotic and rich in taste. The certified labs test every batch to validate its purity and vitality. They are free from pollution, pesticides, and other chemicals to let you consume them in their purest form. It’s a perfect natural sweetener for lime water and several beverages that helps build immunity and aids the respiratory system.
        "
        benefits={benefits}
      />
    </div>
  );
}
