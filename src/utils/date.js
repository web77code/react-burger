export default function styledDate(data) {
  const orderDate = new Date(data);
  const currentDate = new Date();

  let day;
  const dayDelay = Math.abs(currentDate.getDay() - orderDate.getDay());

  switch (dayDelay) {
    case 0:
      day = "Сегодня";
      break;
    case 1:
      day = "Вчера";
      break;
    default:
      day = `${dayDelay} дня назад`;
  }

  const orderTimezone = -orderDate.getTimezoneOffset() / 60;
  const orderTime = orderDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${day}, ${orderTime} i-GMT+${orderTimezone}`;
}
