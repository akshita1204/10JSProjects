
const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The only way to do great work is to love what you do.",
  "Dream big and dare to fail.",
  "Don’t stop when you're tired. Stop when you're done.",
  "Your limitation—it’s only your imagination.",
  "It always seems impossible until it is done.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Sometimes later becomes never. Do it now.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Little things make big days.",
  "If you can dream it, you can do it.",
  "Stay positive. Work hard. Make it happen."
];


const button = document.querySelector("button");
const quote=document.querySelector("h1");
button.addEventListener("click", ()=>{
   const idx=Math.floor(Math.random()*quotes.length);
   quote.textContent=quotes[idx];
});