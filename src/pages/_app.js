import "../styles/global.css";

import { CartProvider } from "../contexts/cart";

function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />;
    </CartProvider>
  );
}

export default App;
