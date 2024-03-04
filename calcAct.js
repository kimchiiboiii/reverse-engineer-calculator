



function getOp(tag) {
        if (tag.value == "div") {
          return "/";
        } else if (tag.value == "times") {
            return "X";
        } else if (tag.value == "subtract") {
            return "-";
        } else if (tag.value == "addition") {
            return "+"
        } else if (tag.value == "equals") {
            


        }



}






function clearInput() {

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

                console.log("Error");


            }


          }


































// function getOp(operator){

  // if(operator) ==     {




   // }


// }