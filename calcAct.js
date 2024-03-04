



function getOp(button) {
        
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


        } else {

            console.log("Error: getOp()");

        }



}

function getNumAndClearInput() {

    let firstNum = document.getElementById("num-field");
    let inputValue = firstNum.value;
    console.log(inputValue); 
    firstNum.value = "";
    return inputValue;
}




function doMath(number1, getOp, number2){

  if (getOp == "/")   {

            answer = (number1 / number2);
            console.log(`${number1} divided by ${number2} equals ${answer}`);
            return answer;
            
  } else if (getOp == "X") {

            answer = (number1 * number2);
            console.log(`${number1} multiplied by ${number2} equals ${answer}`);
            return answer;
            
  } else if (getOp == "+") {

            answer = (number1 + number2);
            console.log(`${number1} plus ${number2} equals ${answer}`);
            return answer;


  } else if (getOp == "-") {

            answer = (number1 - number2) 
            console.log(`${number1} minus ${number2} = ${answer}`);
            return answer;



    } else {

                console.log("Error: doMath()");

            }

          }