import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductForm from "../../components/ProductForm";
import ProductImages from "../../components/ProductImages";
import ProductData from "../../components/ProductData";

import { Container, Content, Box, ProductBox } from "./styles";

export default function Product({ products }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  if (products.length == 0) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Header />
      <Content>
        <Box>
          <ProductImages img={products.img} />
          <ProductBox>
            <ProductData
              name={products.name}
              price={products.price}
              model={products.model}
            />
            <ProductForm productDescription={products.description} />
          </ProductBox>
        </Box>
      </Content>
      <Footer />
    </Container>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  const products = await data.products;

  const paths = products.map((product) => {
    return { params: { id: product.id.toString(), user: product.user } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id, user } = context.params;

  const response = await fetch(`http://localhost:3333/products/${user}/${id}`);

  let products;

  if (response.status == 404) products = [];
  if (response.status == 200) products = await response.json();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};
