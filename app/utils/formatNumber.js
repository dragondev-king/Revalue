export function formatNumber(x) {
  let number;
  // Round Number
  try {
    number = x.toFixed();
  } catch (e) {
    number = x;
  }
  // Add spaces
  try {
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
  } catch (e) {
    return number;
  }
}
