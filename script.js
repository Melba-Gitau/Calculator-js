function addBy(){
            number1 = parseFloat(document.getElementById("num1").value);
            number2 = parseFloat(document.getElementById("num2").value);
            document.getElementById("result").innerHTML ="Answer is: " +  (number1+number2);
        }
        function subtractBy(){
            number1 = document.getElementById("num1").value;
            number2 = document.getElementById("num2").value;
            document.getElementById("result").innerHTML = "Answer is: " + (number1-number2);
        }
        function multiplyBy(){
            number1 = document.getElementById("num1").value;
            number2 = document.getElementById("num2").value;
            document.getElementById("result").innerHTML = "Answer is: " + (number1*number2);
        }
        function divideBy(){
            number1 = document.getElementById("num1").value;
            number2 = document.getElementById("num2").value;
            document.getElementById("result").innerHTML = "Answer is: " + (number2/number1);
        }