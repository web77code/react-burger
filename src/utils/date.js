  export default function styledDate (data) {
    const orderDate = new Date(data);
    const now = new Date();

    let day = 'Сегодня';

    let distance = now.getTime() - orderDate.getTime();
    let dayDelay = Math.floor(distance / 86400000);

    let orderHour = orderDate.getHours();
    let orderMonutes = orderDate.getMinutes();
    let orderTimezone = -(orderDate.getTimezoneOffset()) / 60;

    let res = `${day}, ${orderHour}:${orderMonutes} i-GMT+${orderTimezone}`;
    
    // console.log({data, orderDate, now, distance, dayDelay, res});

    return res;
  }
