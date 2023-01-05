import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function ProductGallery(props) {
  console.log(props,"rftttttt")

  
// const list = props;
// console.log(list,"ccccccccccccccccccc")
// const [imgs, setImgs] = useState(list)
// console.log(imgs.value, "images")

// const newArray = list.map((e)=>{
//   return
// })
  const imgs=[
    {id:0,value:"https://wallpaperaccess.com/full/2637581.jpg"},
    {id:1,value:"https://source.unsplash.com/user/c_v_r/1900x800"},
    {id:2,value:"https://source.unsplash.com/user/c_v_r/100x100"},
  ]
  const [currentImage, setCurrentImage] = useState(imgs[0]);

  const imageSlideHandler = (index) => {
    console.log(index);
    const NewImage = imgs[index];
    console.log(NewImage);
    setCurrentImage(NewImage);
  };
  return (
    <div>
      {props.title}
      <img src={currentImage.value} />
      <div className="d-flex justify-content-between">
        {imgs.map((e, index) => {
          return (
            <img
            className= {currentImage.id === index ? "current" : " "}
              onClick={() => {
                imageSlideHandler(index);
              }}
              src={e.value}
              width="300"
            />
          );
        })}
      </div>
    </div>
  );
}
