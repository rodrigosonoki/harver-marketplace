import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { Container, Cards } from "./styles";

import formatPrice from "../helpers/formatPrice";

export default function Home({ products }) {
  return (
    <>
      <Container>
        <Header />
        <Cards>
          {products.map((product) => (
            <a href={`http://localhost:3000/${product.user}/${product.id}`}>
              <ProductCard
                name={product.name}
                img={product.img[0]}
                price={formatPrice(product.price)}
                key={product.id}
                user={product.user}
              />
            </a>
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
