// function setup() {
//     createCanvas(windowWidth, windowHeight)
//     background('red')
//     createP("I can Nae Nae")
//     createElement('h1', 'my lucky numbers below');
//   createElement('p', 'my lucky number is 263');
// }


// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     let titleText = createElement('h1', 'My lucky number is...');
//     let numText = createElement('p', '284663628');
//     console.log(numText) // Find out what is inside of this newly created numText objects
//   }


//   function mousePressed(){
//       let newp = 
//       createP("My lucky mumber is 231" + random(0, 10));
//   }

let button
let greeting
function setup() {
  createCanvas(windowWidth, windowHeight)
  button = createButton('Click to say hello!');
  button.position(width / 2, height / 2)
  button.mousePressed(greet)
  greeting = createElement('h2', 'Say Hello!')
  greeting.position(width / 2, height / 3)
  textAlign(CENTER)
  textSize(50)
}
function greet() {
  greeting.html('Nae Nae')
  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height))
    rotate(random(2 * PI));
    text('Nae Nae', 0, 0);
    pop();
  }
}