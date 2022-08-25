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


          
  // -----------------------------------Primitive value types VS reference types   --------------------------------------------\\

  // ---------------------------Primitive types--------------------------- :

let xxx = 10;  //return - 10
let yyy = xxx;  // return - 10  

xxx =20;


/*
Both xxx and yyy variables are independent

It doesn't care what you do with x variables
*/


//  Example :

let cart =10;

function updateCart(cart){
    cart++;
}
updateCart(cart);
console.log("Carts available : " + cart);  //---> Because it is primitive type it won't add the value.


// ---------------------- Reference type ---------------------------------:

let ii = {
    value :10    //return -20
};

let jj = ii;  //return -20

ii.value = 20;

/*
let ii = {value : 10} ; --> It will create one reference memory #1526

let y = reference memory #1526 ==>> { value :10 };
*/

//Example :

let cartObj ={
    value :20
};

function update(cart){
    cart.value++;
}

update(cartObj);

console.log(cartObj);


 // ----------------------------------Enumerating Properties of an Object --------------------------------------------\\

 const user = {
    name : "King Harld",
    getFullName() {
        console.log(`My Name is ${this.name}`);
    }
 }

 for(let key in user)
 console.log(key  , user[key]);

 for(let key of Object.keys(user))
 console.log(key);

 
 for(let key of Object.entries(user))
 console.log(key);

 if ('name' in user) console.log('YES !!!');


  // ----------------------------------Cloning a JS Object --------------------------------------------\\

  const user1 = {
    name :'Torvi',
    getFullName(){
        console.log(`My Name is ${this.name}`);
    }
  }

  let another = {};

  //One - way :
  for (let key in user1) another[key] = user1[key]
  console.log(another);

    //Second - way :
    let another1 = Object.assign({age:24}, user1); console.log(another1);

      //Third - way : --> IMPORTANT (Spread Operator)

      let another2 = {...user1}; console.log( another2);

      
  // ----------------------------------Garbage Collection --------------------------------------------\\

  /* 
  
  i) In JS, Garbage collection is totally FREED because JS Engine take care of Garbage collectors.

  ii) In low -level language Java, C++ ..etc we've to maintain the garbage Collectors

  iii) But here we don't need Automatically it will clean 

  */

      
  // ---------------------------------- Math Object --------------------------------------------\\


//   Reference for math object = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

  let marks = [25,63,84,59,95];

//   let result = Math.max(marks) //--> it won't work because of Array [It return - NaN-> Not a Number]
  
// --- So, we are going to use SPREAD OPERATOR here.,

let result = Math.max(...marks) 

console.log("Maximum MArk : " + result);


     
  // ---------------------------------- String Object --------------------------------------------\\

  //-- Primitive types

  let firstName = "Bjorn";           // typeof -> String
  let middleName = 'Ragnar';          // typeof -> String
  let lastName =`Larthbrok`;          // typeof -> String

  const name10 = new String("Floki");  //typeof -> Object


  // Reference = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String



   // ---------------------------------- Template  Literals --------------------------------------------\\

   const name09 = 'Ketill Flatnose' 

   const message09 = `Thank You !!! ${name09},
   
   Watching the video. Its Great to see you

   With Kadhol,
   Ragnar`;

   console.log(message09);

 // ---------------------------------- Date Object --------------------------------------------\\

     //-- DATE

     const date = Date();

     console.log(date);  //Here, it will return as a String(For confirm typeof date)

     const date1 = new Date();

     console.log(date1);   //Here, it will return as a Object (For confirm typeof date1)

       // Reference = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


 // ----------------------------------   JS Array --------------------------------------------\\

 const empName = ["Ragnar", "Floki" ,"Bjorn", "Hvitserk"]



 empName.push("Torvi..")  // ADD at last index  

empName.unshift("Lagertha") // ADD at Starting index

empName.splice(5,0,"Erik")  // ADD at mid using index value


console.log(empName);

// -- Primitive value
console.log(empName.indexOf("Floki"));

console.log(empName.lastIndexOf("Hvitserk"));

console.log(empName.indexOf("Floki") !== -1);

console.log(empName.includes("Ragnar"));

//--Reference value

const orders = [
    {id:001, item:"iphone", quantity: 10},
    {id:002, item:"android", quantity: 9},
    {id:003, item:"windows", quantity: 5},
]

// let result11 = orders.find(function(order){
//     return order.item === "iphone"
// })

let result11 = orders.findIndex(function(order){
    return order.item === "iphone"
})

console.log(result11);


//-- Arrow Function

let result10 = orders.find((order) =>order.item === "android")

console.log(result10);

//-- Removing element in Array

const number10 =[10,23,15,26,65]

number10.pop()     //Remove the last element

number10.shift()     //Remove the first element

number10.splice(0,1)  //Remove  the 0-index and 1-element

console.log(number10); 


//-- Emptying an JS Array

let number09 =[20,25,63,1,2,3,5,1]

//Solution-1

number09 = []    // Right way to use in large data's and project

//Solution-2

// number09.length =0    // Right way to use in large data's and project

//Solution-3

// number09.splice(0, number09.length)    //it is not recommend for projects

//Solution-4

// while(number09.length) number09.pop(); //it is not recommend for projects

// console.log(number09);


//-- Combining and Extracting elements in JS Array

const shopping_Chart =["Shirt", "T-Shirt", "Shoe","Watch"]  //Primitive way

const shopping_Chart1 =[{ 
    item : "New Arrivals - Shirt (Peter England)"      //Reference type because object is used 
}]  

shopping_Chart1[0].item ="New Arrivals - Shirt (Basics)" // Changing the value using index value

const additional_Chart =["Fant","Shocks"]

let combine = shopping_Chart.concat(additional_Chart)

let extract = combine.slice(1,3)

console.log(combine);
console.log(extract);
console.log(shopping_Chart1)


//--Spread operators in JS Array

const amazonShoppingChart =["Shirt", "T-Shirt", "Shoe","Watch"]

const flipkartShoppingChart =["Fant","Shocks"]

let buy =[...amazonShoppingChart, 50, {name: "Ragnar Lothbrok"},...flipkartShoppingChart]
console.log(buy);


//-- Iterating element in JS Array

const vikings = ["Ragnar","Lagertha","Gunnihid"]

//for-of
for(let people of vikings){
    console.log(people);
}

//for-in
for(let people in vikings){
    console.log(people, vikings[people]);
}

//for-each

// vikings.forEach(function(people){
// console.log(people);
// });

// vikings.forEach(function(people, PeopleIndex){
// console.log(people,PeopleIndex);
// });

vikings.forEach(people => console.log(people))


//--Joining & Splitting in JS Array

const dailyRoutine =["Wake up","Eat","Read", "Sleep"]

let print =dailyRoutine.join(" ")
console.log(print);

let fullName ="Ivar The Boneless"
let userName = fullName.split(" ")

let firstName1 = userName[0];
let middleName1 = userName[1];
let lastName1 = userName[2];

console.log(`My First name is ${firstName1}
_ Middle name is ${middleName1}
_Last name is ${lastName1}
`);

//--Sorting a JS Array

const students =[ 1,2,3,5,8,7,9]  //--> PRimitive type

// students.sort()      //-> Ascending order

// students.sort(function(a,b){ return b- a;});     //-> descending order

students.reverse()

console.log(students);

const series = [                                   // --> Reference type
    {id:001, name:"Money heist", year:2022 , netflix:true},
    {id:002, name:"Breaking Bad", year:2019 , netflix:true},
    {id:003, name:"Vikings", year:2016 , netflix:true},
    {id:004, name:"Game of thrones", year:2016 , netflix:false},
];

series.sort((a,b) =>{
// a < b => -1
if(a.name < b.name) return -1

//a > b => 1
if(a.name > b.name) return 1

//a === b => 0
return 0;

});

console.log(series);


//--Primitives: Testing a JS Array

const queue_by_age = [25,19,35]             //Example-1

let isAllowed = queue_by_age.every(function(value,index,array){  
    return value >= 18;
});

console.log("isAllowed : ", isAllowed);

const numbers1=[1,2,4,5,3,8]                //Example-2

let isEven =numbers1.every(function(value){
    return value % 2 ==0
});

console.log("isEven :" , isEven);


//--Reference: Testing a JS Array


const netflixSeries = [             // --> Reference type
    {id:001, name:"Money heist", year:2022 , netflix:true},
    {id:002, name:"Breaking Bad", year:2019 , netflix:true},
    {id:003, name:"Vikings", year:2016 , netflix:true},
    {id:004, name:"Game of thrones", year:2016 , netflix:false},
];

let watchAble = netflixSeries.every(function(value){
return value.netflix == true;
});


let notWatchAble = netflixSeries.some(function(value){
    return value.netflix == true;
    });
console.log("watchAble" , watchAble);

console.log("notWatchAble", notWatchAble);


//--Filtering  a JS Array

const number08 =[1,2,5,4,7,8,1,2]                                   //-- Example - 1

let isEvenNum =numbers1.filter(function(value){
    return value % 2 == 0
});

let isOddNum =numbers1.filter(function(value){
    return value % 2 == 1
});

console.log("isEvenNum" , isEvenNum);
console.log("isOddNum" , isOddNum);

const cartItems = [
    {id:001, item :"iphone", cost:2563},
    {id:002, item :"android", cost:12563},                            //-- Example - 2
    {id:003, item :"windows", cost:2563},
];

let affortablePhones = cartItems.filter((value) => value.cost >= 10000); //return array[{Objects}]

console.log(affortablePhones);


//--Finding  a JS Array


const cartItems1 = [
    {id:001, item :"iphone", cost:2563},
    {id:002, item :"android", cost:12563},                           
    {id:003, item :"windows", cost:2563},
];

let affortablePhonesFind = cartItems.find((value) => value.cost >= 10000);  //Just return in object

let affortablePhonesFindINDex = cartItems.findIndex((value) => value.cost >= 10000);  

console.log(affortablePhonesFind); 

console.log(affortablePhonesFindINDex);
