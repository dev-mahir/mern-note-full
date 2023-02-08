/**
 *
 * @param {*} regular_price
 * @param {*} discount
 * @returns
 */
export const discountCal = (regular_price, discount) => {
  return regular_price - (regular_price * discount) / 100;
};
