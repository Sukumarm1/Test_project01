// alert("hello ");

// console.log("Hello ! All learning JavaScript");


// -------------------- Object ---------------------------\\

let person = {
    name : "Sukumar",
    age : 25,
    address : "Chennai",
    salary : 12000,
    sibling : {
        brother : "Anna",
        sister : "Akka"
    }
}

console.log(person.sibling.brother)

// -------------------- Array ---------------------------\\

let favColors = ["Red", "Yellow" , "Blue"]

favColors[6] = 56
console.log(favColors.length);


// -------------------- Function ---------------------------\\

function welcomeCard(firstName , lastName){

    let msg = "Hello " + firstName + " " + lastName + " I'm Started to learn JavaScript !!!";
    console.log(msg);
}

welcomeCard("Ragnar" ,"Lothbrok")

welcomeCard("Ivar" ,"Floki")

welcomeCard("Bjorn" ,"IronSide")


function addition(num1,num2){
    console.log(num1 + num2);
}

addition(20,20)



// -------------------- Operators ---------------------------\\

let x = 10;
x++
console.log(x);

let y = 10;
y--
console.log(y);

let a =10;
let b =12;

//increment

// console.log(++a);   //--- One way
console.log(a++)       //--- Second way
console.log(a);

//decrement

// console.log(--b);   //--- One way
console.log(b--)       //--- Second way
console.log(b);



// --------------------------------------------- Operators --------------------------------------------\\

let xx = 5;
// -- Equality Operators
console.log(xx === 5);
console.log(xx !== 5);

// -- relational Operators

console.log(x < 5);
console.log(x <= 5);
console.log(x >5);
console.log(x >= 5);

// -- String comparison

console.log('Alen' > 'Anbu'); // Dictionary type (It Will Check A - A , L - N --> FALSE)

//-- Comparison of different type

console.log('1' < 5); // Here, JS play's smart role --> Check inside the string it as alphabet or number and it return's the boolean value

console.log(true == 1); // Here, 1 - true & 0 - false --> Truth table format

//-- Strict Equality Operator (DataType + Value)
console.log(1 === 1); // Number === Number -> TRUE
console.log( '1' === 1 ); //String == Number -> FALSE

//-- Lose Equality Operator
console.log(1 == 1); //Number === Number -> TRUE
console.log('1' == 1); //String == number ->TRUE
console.log( true == 1); //boolean == number -> TRUE 


//-- Ternary Operator

let age =16;
let type = age > 18 ? "Adult" : "child"
console.log(type);

//-- logical operators

// AND- (&&) --> returns TRUE if both are true
console.log(true && true);

//OR-(||) --> returns TRUE if anyone is true
console.log(false || true);

// NOT (!)
console.log(true);

//--> Small finance application
let highIncome = true;
let CIBILScore = true;

// let eligiblePerson = highIncome && CIBILScore
let eligiblePerson = highIncome || CIBILScore

let applicationStatus = !eligiblePerson

console.log(eligiblePerson);
console.log(applicationStatus);

// Logical Operator with non-boolean values :

/*
Falsy (fasle) -> true || "Blue" -> it will return {blue} as a O/P
undefined
null
0
false
' ' -> " "
NaN
*/

// Example :
let userColor="Blue";
let defaultColor = "red";
let currentColor = userColor || defaultColor
console.log("Selected color " + currentColor);

/*
truty -> Anything that is not falsy is ---> Truthy
*/

// Example :
let userColor1=null;
let defaultColor1 = "red";
let currentColor1 = userColor1 || defaultColor1
console.log("Selected color " + currentColor1);

//-- BitWise Operator

//Human Code -> Machine code (0,1)
/*
1 -> 00000001 -> 1
2 -> 00000010 -> 2
R -> 00000011 -> 3
*/ 
console.log(1 | 2 ); //BitWise OR  [ 3 ] -> truth table
console.log (1 & 2); //BitWise AND [ 0 ] -> truth table

//Example :

/* 
W -> 00000100 -> Write
R -> 00000010 -> Read
E -> 00000001 -> Execute
*/

const readPermission = 4;
const writePermission = 2;
const executePermission =1;

let myPermission=0;
myPermission = myPermission | writePermission | readPermission ;
let message = (myPermission & readPermission) ? 'YES' : 'NO'
console.log(message);

//-- Operator Precedence

//reference - https://www.dummies.com/article/technology/programming-web-design/general-programming-web-design/javascript-operator-precedence-254119/

let x1 = 2 + 5 * 10; //--> Here, JS Assume right to left -> So, it returns [ 52 ]

let x2 =  (2 + 5) * 10; //--> Now, it can't understand it should be in order [ 70 ]

console.log(x1);
console.log(x2);


// --------------------------------------------- Conditional Statement --------------------------------------------\\
//-- IF , ELSE-IF, ELSE

// let hour = 14;
let hour = new Date().getHours();

if(hour >= 0 && hour <=13)
console.log("Good Morning");

else if(hour >=13 && hour <=17)
console.log("Good Afternoon");

else
console.log("Good Evening");

//-- Switch case

//Example: 1
let grade ="A";
switch(grade){
    case "S" :
        console.log("Super Grade");
        case "A" :
            case "B" :
            console.log("Excellent Garde");
            case "E" :
                console.log("Just Pass !");
                case "U" :
                    console.log("Fail Grade !");
                    default :
                    console.log("Unknown Grade");


 //Example: 2

 let marks =95;
 switch(true) {

    case marks > 50:
        console.log("Super Grade");
        break;

        case marks > 50:
        console.log("Pass");
        break;

        case marks < 50:
            console.log("Failed !");
            break;

            default:
                console.log("Unknown Maek ! ");
 }

 // --------------------------------------------- Loops --------------------------------------------\\

//  -- For loop:
//  for(let i =0 ; i <5 ; i++){
//     if(i % 2 !== 0){
//     console.log("Number #" , i);
// }
//  }

//--While

// let j =20;

// while(j >=1){
// if(j %2 !== 0){
//     console.log("Odd Numbers ---> #" , j);
// }
// j--;
// }


/*
We can compare both While and Do-while to see the differents
*/


//-- Do - While

// let k =10;
// do{
//     if(k %2 !== 0){
//         console.log("Odd Number's in Do-While " + k);
//     }
//     k++;
// } while(k <=20);

//-- For-in

const person ={ //---> Object
    name :'Hali',
    series: 'Vikings',
    theme: 'Kings'
};

for(let key in person){
    console.log(key + ":" , person[key]);
}

let color = ['Blue','Yellow','Black'];
for(let key in color){
    console.log(key);
    // console.log(color[key]);
}

//-- For-of 

// for(let colors of color){
//     console.log("Color : " + color);
// }



 // --------------------------------------------- OOP --------------------------------------------\\

let person1 ={
name:'Hvitserk',
series : 'Vikings',
interest : ['Kingdoms'],
isAlive :true,
RagnarSons :{
    elder :'Bjron ironside'
},

greeting:function(){
    let msg =`my name is ${this.name}, I love ${this.series}`;
    console.log(msg);
}
};
person1.greeting();
}

 // --------------------------------------------- Factory Function --------------------------------------------\\

 function createPerson(name){  //--> CamelCase 
return {
    name,
    greeting(){
        let msg = `my name is ${this.name}`;
        console.log(msg);
    }
};
}

let ivar = createPerson("Ivar the boneless")
let ragnar = createPerson("Ragnar Larthbork")
ivar.greeting();
ragnar.greeting();


 // --------------------------------------------- Constructor Function --------------------------------------------\\

function Person(name) {  //--> Pascal
    this.name = name;
    this.greeting = function(){
        console.log(`My name is ${this.name}`);
    } 
}

const person12 = new Person("Hvitserk");
person12.greeting();


 // --------------------------------------------- Dynamic Object --------------------------------------------\\

 // -- We can read, write , update, delete 

 const person11 = {
    name : 'Rollo'
 }

 person11.age =36
 person11.series ='Vikings'

 delete person11.age;

 console.log(person11);


  // --------------------------------------------- Constructor Property --------------------------------------------\\

  //--> Each and every object constructor will be in default{Need to know create one object and open the console use the object.constructor--> You can understand easyly}


  /*

let name = 'Lagertha';          //-- StringLiterals -> new String('Lagertha');
let age1 = 50;                  //-- NumberLiterals -> new Number(24);
let isAlive = true;             //-- BooleanLiterals -> new Boolean(true);

console.log(name, age1 , isAlive);

*/  

let name = new String('Lagertha');

let age1 = new Number(24);

let isAlive =new Boolean(true);

console.log(name , age1, isAlive);



  // --------------------------------------------- Function are Object --------------------------------------------\\

  /*

  function Person (name ) {
    this.name = name;
    this.greeting = function(){
        console.log(`My name is ${this.name}`);
    }
  }
  
  |

  |     -----------     person.constructor ->returns below code   --------------

  |

  let person10 = new Function(`name` , `
  this.name = name;
    this.greeting = function(){
        console.log(Hello);`)
  */


        function Person (name ) {
            this.name = name;
            this.greeting = function(){
                console.log(`My name is ${this.name}`);
            }
          }

          Person.call({}, "Ragnar"); // Here, {} -> Whole Object (Above Code)
          Person.apply({}, [ "Ragnar"])