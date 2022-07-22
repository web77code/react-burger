export function calculateOrderCost(orderIdList, ingredientsData) {
  const res = orderIdList.reduce((prev, item) => {
    const currentIngredient = ingredientsData.find((el) => el._id === item);

    return prev + currentIngredient.price;
  }, 0);

  return res;
};

export function compareOrdersDate(a, b) {

  const x = new Date(a.updatedAt);
  const y = new Date(b.updatedAt);

  if (x.getTime() > y.getTime()) return -1;
  if (x.getTime() === y.getTime()) return 0;
  if (x.getTime() < y.getTime()) return 1;
}
