export function formatNumberWithCommas (str) {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
