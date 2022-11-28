// ************************************ OBJECTIVE ONE ******************************************************

// Comment my skeleton code! You need to tell me what all the major parts are doing! If you get lost, you can watch the class recording, google different functions you see, ask a friend, or come talk to me :)

// I'm looking for at least 8 - 10 RELEVANT comments! You MUST use both single line AND multiline comments!

//---------------------------------------------------------------------------------------------

//Just declaring the variables, not initializing them
let g1, g2, g3, g4, g5;
let w1, w2, w3, w4, w5;
let compute;

/*function setup just sets up the basic 
canvas for use, with some input textboxes, and a
"compute" button
*/
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  background(255, 204, 100);
  describe('canvas with royal blue background');  
  
  //Creates the textboxes under "Grade"
  g1 = createInput("", "number");
  g1.position(100, 100);
  g1.size(50, 15);
  g2 = createInput("", "number");
  g2.position(100, 125);
  g2.size(50, 15);
  g3 = createInput("", "number");
  g3.position(100, 150);
  g3.size(50, 15);
  g4 = createInput("", "number");
  g4.position(100, 175);
  g4.size(50, 15);
  g5 = createInput("", "number");
  g5.position(100, 200);
  g5.size(50, 15);
  
  //Creates the textboxes under "Weight"
  w1 = createInput("", "number");
  w1.position(200, 100);
  w1.size(50, 15);
  w2 = createInput("", "number");
  w2.position(200, 125);
  w2.size(50, 15);
  w3 = createInput("", "number");
  w3.position(200, 150);
  w3.size(50, 15);
  w4 = createInput("", "number");
  w4.position(200, 175);
  w4.size(50, 15);
  w5 = createInput("", "number");
  w5.position(200, 200);
  w5.size(50, 15);
  
  compute = createButton("Compute");
  compute.position(150, 250);
  //When the mouse is pressed, the calculate function is called
  compute.mousePressed(calculate);
  //It gets everything as a percentage, and converts it to a letter grade
  
  
}

//Makes a grey background
function draw() {
  background("grey");
  //The text above the box says "grade", and another one with "weight"
  text("Grade", 110, 90);
  text("Weight", 210, 90);
  
}

//Calculates the values
function calculate() {
  
  var finalGrade = 
      /*Gets ur grade in a certain field, and multiplies that with 
      the weight / 100, then adds them up
      */
      (g1.value() * (w1.value()/100)) + 
      (g2.value() * (w2.value()/100)) + 
      (g3.value() * (w3.value()/100)) + 
      (g4.value() * (w4.value()/100)) + 
      (g5.value() * (w5.value()/100));
  
    //   ************************************ OBJECTIVE TWO ******************************************************
    
    //   The calculation above will calculate the grade and store it as a PERCENT! so for example, your grade might be an 85 or a 92.7 or (probably) a 100 :)
    
    //   The next step is to take that number and figure out what LETTER GRADE it is! You can use a grading scheme for any of your classes! 
    
    //   For example: A: 90 - 100, B: 80 - 89, C: 70 - 79, D: 60 - 69, F: 0 - 59
    
    //   Your job is to use the finalGrade and display the letter grade! You can display it to the console, to the canvas, or as an alert - that's up to you!
    
    //   Hint: use conditionals and place in function :) 
  
  if (finalGrade >= 90) {
    
    alert("You got an A!");
    console.log(finalGrade);
    
  } else if (finalGrade >= 80 && finalGrade < 90) {
    
    alert("You got a B! ");
    console.log(finalGrade);
    
  } else if (finalGrade >= 70 && finalGrade < 80) {
    
    alert("You got a C! ");
    
  } else if (finalGrade >= 60 && finalGrade < 70) {
    
    alert("You got a D! ");
    
  } else if (finalGrade >= 0 && finalGrade < 60) {
    
    alert("You got an F! ");
    
  }
  

  
  

}















