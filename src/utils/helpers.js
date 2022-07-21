export function calculateOrderCost(orderIdList, ingredientsData) {
  const res = orderIdList.reduce((prev, item) => {
    const currentIngredient = ingredientsData.find((el) => el._id === item);

    return prev + currentIngredient.price;
  }, 0);

  return res;
};
