import ProductCard from "../components/productCard";
import { Container, Section, Cards } from "./styles";

import formatPrice from "../helpers/formatPrice";

export default function Home({ products }) {
  return (
    <>
      <Container>
        <Section />
        <Cards>
          {products.map((product) => (
            <ProductCard
              name={product.name}
              img={product.img}
              price={formatPrice(product.price)}
              key={product.id}
              user={product.user}
            />
          ))}
        </Cards>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  const products = data.products;

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};
