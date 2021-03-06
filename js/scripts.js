let numberValue1 = '';
let numberValue2 = '';
let operatorValue = '';

initialize();

function add(a, b) {
   return a + b;
}

function subtract(a, b) {
   return a - b;
}

function multiply(a, b){
   return a * b;
}

function divide(a, b){
   return a / b;
}

function operate(operator, num1, num2){
   let finalValue = 0;
   num1 = parseFloat(num1);
   num2 = parseFloat(num2);
   switch (operator) {
      case '+':
         finalValue = add(num1, num2);
         break;
      case '-':
         finalValue = subtract(num1, num2);
         break;
      case '*':
         finalValue = multiply(num1, num2);
         break;
      case '/':
         if (num2 == 0){
            return "GAME OVER";
         }
         finalValue = divide(num1, num2);
         break;
   };
   numberValue1 = finalValue;
   numberValue2 = '';
   return finalValue;
}

function displayValue(value){
   const display = document.querySelector('.display-content');
   display.textContent = value;
}

function initialize(){
   const btns = document.querySelectorAll('.btn');
   const btnArray = Array.from(btns);

   for(const btn of btnArray){
      switch(btn.textContent){
         case '*':
         case '/':
         case '+':
         case '-':
            btn.addEventListener('click', () => {
               if (!isNaN(parseFloat(numberValue1)) && !isNaN(parseFloat(numberValue2))){
                  displayValue(operate(operatorValue, numberValue1, numberValue2));
               }
               operatorValue = btn.textContent;
            });
         break;
         case '1':
         case '2':
         case '3': 
         case '4': 
         case '5': 
         case '6': 
         case '7': 
         case '8': 
         case '9': 
         case '0':
            btn.addEventListener('click', () => {
               if(operatorValue != ''){
                  numberValue2 += btn.textContent;
                  displayValue(numberValue2);
               }
               else {
               numberValue1 += btn.textContent;
               displayValue(numberValue1);
               }
            });
         break;
         case '.':
            btn.addEventListener('click', () => {
               const display = document.querySelector('.display-content');
               if(!display.textContent.includes('.')){
                  if(operatorValue != ''){
                     numberValue2 += btn.textContent;
                     displayValue(numberValue2);
                  }
                  else {
                     numberValue1 += btn.textContent;
                     displayValue(numberValue1);
                  }
               }
            });
         break;
         case 'C':
         case 'CE':
            btn.addEventListener('click', () => {
               displayValue(0);
               numberValue1 = '';
               numberValue2 = '';
               operatorValue = '';
            });
         break;
         case '=':
            btn.addEventListener('click', () => {
               if(operatorValue != '' && numberValue1 != '' && numberValue2 != ''){
                  displayValue(operate(operatorValue, numberValue1, numberValue2));
               }
            });
      }
   }
}