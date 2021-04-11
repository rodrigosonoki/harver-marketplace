import { useState } from "react";
import { Container, MainImage, MiniatureImages } from "./styles";

export default function ProductImages({ img }) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <Container>
      <MiniatureImages>
        {img.map((image) => (
          <img
            src={image}
            key={image}
            onClick={() => setImageIndex(img.indexOf(image))}
          />
        ))}
      </MiniatureImages>
      <MainImage>
        <img src={img[imageIndex]} />
      </MainImage>
    </Container>
  );
}
