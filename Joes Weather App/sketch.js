let url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=rain&daily=uv_index_max'
let rain;
let uv;

let plantAffirmations = [
  "You are thriving and growing in perfect harmony with nature.",
  "Your leaves are vibrant, and your roots run deep, connecting you to the Earth's energy.",
  "Each day brings new sunlight and nourishment for your growth.",
  "You are a unique and beautiful expression of life.",
  "Your presence brings joy and calm to the space around you.",
  "You absorb and transmute energy, promoting a positive environment.",
  "Your connection to the Earth is strong, grounding you in stability.",
  "You are resilient, adapting to changes in your environment.",
  "You are in perfect balance, giving and receiving in harmony.",
  "Your existence is a vital part of the ecosystem, contributing to the beauty of life.",
  "Your stems are strong and flexible, allowing you to sway gracefully in the breeze.",
  "You are a beacon of natural beauty, radiating positive energy to those around you.",
  "Each leaf is a symbol of your vitality and connection to the cycles of growth.",
  "Your presence adds a touch of serenity and calmness to the environment.",
  "As you absorb sunlight, you are filled with the energy needed for vibrant life.",
  "Your roots delve deep into the soil, providing stability and nourishment.",
  "You are a living testament to the wonders of nature, constantly renewing and rejuvenating.",
  "Rain or shine, you embrace the elements, thriving in the diversity of weather.",
  "Your existence is a testament to the interconnected web of life, contributing to the ecosystem.",
  "You are a green ambassador, reminding us of the importance of nurturing and respecting all living things."
];

// You can access individual affirmations using array indexing, for example:
// let firstAffirmation = plantAffirmations[0];
// console.log(firstAffirmation);


function preload(){
  loadJSON(url,gotData);
}

function gotData(data){
  console.log(data);
  rain = data.hourly.rain[0];
  console.log(data.hourly.rain[0]);
  uv = data.daily.uv_index_max[0];
  console.log(data.daily.uv_index_max[0]);

}

function checkRain(){
  if(rain === 0)
  {
    rainNotFalling()
  }
  else if (rain > 0 && rain < 2){
    rainFalling()
  }
  else {
    rainFallingHard()
  }
}

function checkRays (){
  if(uv === 0){
    sunNotShining()
  }
  else if (uv > 0 && uv < 2) {
    sunIsLow();
  }
  else if (uv >= 2 && uv < 5){
    sunIsModerate();
  }
  else if (uv >= 5 && uv < 8){
    sunIsHigh();
  }
  else if (uv >= 8 && uv < 10) {
    sunIsVeryHigh();
  }
  else{
    sunIsExtreme
  }
}
function rainNotFalling(){
  textSize(16);
  textAlign(CENTER);
  text('🌈 Enjoy your rain free day',width/2, 150);
}
function rainFalling(){
  textSize(16);
  textAlign(CENTER);
  text('☔️ Collect some water for our Joe',width/2, 150);
}
function rainFallingHard(){
  textSize(16);
  textAlign(CENTER);
  text('🌧 Its raining shit tonnes today',width/2, 150);
}
function sunNotShining(){
  textSize(16);
  textAlign(CENTER);
  text('🌕 Its definitely Joes bed-time',width/2, 200);
}
function sunIsLow (){
  textSize(16);
  textAlign(CENTER);
  text('🌥 Enjoy the rays, move Joe to the window',width/2, 200);
}
function sunIsModerate(){
  textSize(16);
  textAlign(CENTER);
  text('⛅️ Show Joe some sunny love',width/2, 200);
}
function sunIsHigh(){
  textSize(16);
  textAlign(CENTER);
  text('🌤 Keep Joe out of sunlight today, hes sensitive',width/2, 200);
}
function sunIsVeryHigh(){
  textSize(16);
  textAlign(CENTER);
  text('☀️ Is this even English Weather?!',width/2, 200);
}
function sunIsExtreme(){
  textSize(16);
  textAlign(CENTER);
  text('🌞 Do not go outside youll burn!',width/2, 200);
}

function setup() {
  createCanvas(400, 300);
  textAlign (CENTER,CENTER);
  displayRandomAffirmation();
}


function displayRandomAffirmation() {
  // Randomly select an index from the array
  let randomIndex = floor(random(plantAffirmations.length));
  console.log(plantAffirmations[randomIndex]);
}

function draw() {
  background(135, 206, 235);
  textSize(20);
  frameRate(0.1);
  text ("Joe's Lifeline:",width/2, 100);
  checkRain();
  checkRays();
  let randomIndex = floor(random(plantAffirmations.length));
  textSize(10);
  fill(8, 24, 168)
  text(plantAffirmations[randomIndex],width/2,40);
  text(plantAffirmations[randomIndex],width/2,260);

}
