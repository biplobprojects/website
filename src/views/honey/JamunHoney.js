import React, { useState } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import honey1 from "../../assets/images/jamunHoney/Honey_250g_4.webp";
import honey2 from "../../assets/images/jamunHoney/Honey_500g_4.webp";
import honey3 from "../../assets/images/jamunHoney/Honey-1kg_8.webp";


export default function JamunHoney() {
  const images = [
    { id: 0, value: honey1, price: "269.00", size: "250 g" },
    { id: 1, value: honey2, price: "479.00", size: "500 g" },
    { id: 2, value: honey3, price: "889.00", size: "1 kg" },
  ];
  const benefits = [
    "Maintains Oral Health",
    "Improves Digestive System",
    "Relieves Cough, Cold and Sore Throat",
    "Antibacterial and Antifungal Properties",
    "Helps in Weight Loss",
  ];
  const [img, setImg] = useState(images);
  return (
    <div>
      <ProductDetails
        productName="Jamun Honey"
        imageArray={img}
        description="100% pure and natural, this unifloral Jamun Honey is an infinite blend of health and taste. It is procured directly from the farms and delivered fresh to your doorstep without adding any artificial flavors and preservatives. Full of antioxidants, vitamins, minerals, amino acids, and many other micronutrients. This honey is exceptionally healthy for your body and fosters holistic wellness."
        benefits={benefits}
      />
    </div>
  );
}
