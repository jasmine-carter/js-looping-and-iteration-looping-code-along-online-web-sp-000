// Code your solutions in this file
const names =['Lisa', 'Kaitlin', 'Jan']
let event = 'Surprise'


function writeCards(names, event) {
  let thankYouCards = []
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouCards;
}

writeCards(names, event );

let integer = 10
function countDown(integer) {
  while (integer > 0) {
    console.log(integer--);
  }
}
