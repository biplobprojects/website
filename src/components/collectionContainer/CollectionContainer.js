import React, { useState } from 'react'
import saffron from "../../assets/images/Saffron.jpg";
import honey from "../../assets/images/honey.jpg";
import shilajit from "../../assets/images/shilajit.jpg";
import Vinegar from "../../assets/images/Vinegar.jpg";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CollectionCards from '../collectionCards/CollectionCards';
export default function CollectionContainer() {
 const  collectionCardData = [
        { image: honey, title: "Honey", path:'/collections/honey' },
        { image: saffron, title: "Saffron", path:'/collections/saffron' },
        { image: shilajit, title: "Shilajit", path:'/collections/Shilajit' },
        { image: Vinegar, title: "Vinegar", path:'/collections/Vinegar' },
      ];

      const[cardData, setCardData] = useState(collectionCardData)
  return (
    <Row>
            {cardData.map((e) => {
              return (
                <Col md={6} lg={3}>
                  <CollectionCards
                  path={e.path}
                    src={e.image}
                    src2={e.url}
                    cardTitle={e.title}
                  />
                </Col>
              );
            })}
          </Row>
  )
}
