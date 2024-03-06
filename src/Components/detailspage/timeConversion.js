export default function convertTo24(time12h) {
  const [time, period] = time12h.split(' ');
  const [hours, minutes] = time.split(':');

  let hours24 = parseInt(hours, 10);

  if (period === 'PM' && hours24 !== 12) {
    hours24 += 12;
  } else if (period === 'AM' && hours24 === 12) {
    hours24 = 0;
  }

  const formattedHours = hours24.toString().padStart(2, '0');
  const formattedMinutes = minutes.padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

// // Example usage
// const time12h = '02:30 PM';
// const time24h = convert12to24(time12h);
// console.log(time24h); // Output: "14:30"
