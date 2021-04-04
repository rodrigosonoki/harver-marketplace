export default function formatPrice(price) {
  return `R$ ${(price / 100).toFixed(2)}`;
}
