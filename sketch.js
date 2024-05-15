function setup() {
    createCanvas(400, 400);
    background("#3AFF00")
  }
  
  function draw() {
    stroke("blue")
    fill("rgb(255,226,0)")
    
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
  }