



function getOp(button) {
        
        // function gets called on button click
        // conditional on the value attribute of the buttons
        // probably could just use getElementbyId  

    
        if (button == "div") {
            
            console.log("/");
            return "/";
        
        }  else if (button == "times") {
            
            console.log("X");
            return "X";
           
        }  else if (button == "subtract") {
            
            console.log("-");
            return "-";
        
        }  else if (button == "addition") {
            
            console.log("+");
            return "+"             
        
        }  else if (button == "equals") {
            
            doMath();
            
            // should just get rid of this and have the equal sign button itself call doMath on click
            
            // this is a problem, its just always going to return equals when u use the calculator
            // how do i send the return of this function as a parameter and also call doMath when equal sign is clicked
            

        } else {

            console.log("Error with getOp()");

        }



}

function getNumAndClearInput() {

    // this gets called every time they click one of the operations buttons
    
    let firstNum = document.getElementById("num-field");
    let inputValue = firstNum.value;
    console.log(inputValue); 
    firstNum.value = "";
    return inputValue; // how do i pass 2 seperate returns of this function as doMath parameters?
}




function doMath(number1, operator, number2){

  // number1 and number2 = returns of getNumandClearInput
  // operator = return of getOp
  // kind of confused on when i should call this function
  // and do i just do "doMath(getNumandClearInput(), getOp(), getNumAndClearInput())" ?
  // ^ probably should just have the equal sign button call this function w those parameters on click
  
  
  
    if (operator == "/")   {

            answer = (number1 / number2);
            console.log(`${number1} divided by ${number2} equals ${answer}`);
            return answer;
            
  } else if (operator == "X") {

            answer = (number1 * number2);
            console.log(`${number1} multiplied by ${number2} equals ${answer}`);
            return answer;
            
  } else if (operator == "+") {

            answer = (number1 + number2);
            console.log(`${number1} plus ${number2} equals ${answer}`);
            return answer;


  } else if (operator == "-") {

            answer = (number1 - number2) 
            console.log(`${number1} minus ${number2} = ${answer}`);
            return answer;



    } else {

                console.log("Error with doMath()");

            }

          }