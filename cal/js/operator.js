function add(){}
    const num = document.getElementById('display').value;
    if (num !== "" && !isNaN(num))
    document.getElementById('display2').value = num;
    document.getElementById('operator').value = "+";
    document.getElementById('display').value = 0; 

    if(display2 !== "") {
        let answer;
        if (operator == "+") {
            answer = Number(display2) + Number(display);
        }
    
    document.getElementById('display2').value = answer;
    document.getElementById('display').value = "0";
    }

    else {
        document.getElementById('display').value = "0";
        document.getElementById('display2').value = display;
    }

    document.getElementById('operator').value = "+";

   function minus(){
    const num = document.getElementById('display').value;
    if (num !== "" && !isNaN(num))
    document.getElementById('display2').value = num;
    document.getElementById('operator').value = "-";
    document.getElementById('display').value = 0;
   }
   function times(){
    const num = document.getElementById('display').value;
    if (num !== "" && !isNaN(num))
    document.getElementById('display2').value = num;
    document.getElementById('operator').value = "*";
    document.getElementById('display').value = 0;
   }
   function dot(){
    const num = document.getElementById('display').value;
    if (num !== "" && !isNaN(num))
    document.getElementById('display2').value = num;
    document.getElementById('operator').value = ".";
    document.getElementById('display').value = 0;
   }
   function equals(){
    const num = document.getElementById('display').value;
    if (num !== "" && !isNaN(num))
    document.getElementById('display2').value = num;
    document.getElementById('operator').value = "=";
    document.getElementById('display').value = 0;
   }
   function divide(){
    const num = document.getElementById('display').value;
    if (num !== "" && !isNaN(num))
    document.getElementById('display2').value = num;
    document.getElementById('operator').value = "/";
    document.getElementById('display').value = 0;
   
   }