function setup() {
    createCanvas(1900, 200); 
    colorMode(HSB);
    slider = createSlider(0, 360, 100) ;
    sliderS = createSlider(0, 100, 50);
    sliderB = createSlider(0, 100, 50);
  }
  function draw() {
    background(slider.value(),sliderS.value(), sliderB.value());
   
    textSize(80);
    text("HUAHHHHH", 210, 100);
  }