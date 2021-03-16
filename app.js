// JavaScript Assighnment

// Chapter no 1  "Alerts"

// Q1

// alert(Hello User!);



// Q2

// alert("Error! Please enter a valid password")



// Q3

// var abc = "Welcome to JS Land...\n Happy Coding!";
// alert(abc);



// Q4

// alert("Welcome to JS Land...");
// alert("Happy Coding!");



// Q5

// alert("Hello... I can run JS through my web browser's console")





// Chapter no 2  "Variables for Strings"

// Q1

// var username



// Q2

// var myName;
// myName = "Qambar Ali"


// Q3

// var meassage;
// meassage = "Hello World";
// alert(meassage);



// Q4

// var username = "Qambar Ali";
// var age = "21 years old";
// var work = "Web and Mobile App Developer"
// alert(username);
// alert(age);
// alert(work);



// Q5

// var pizza = " PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(pizza);



// Q6

// var email = "aliexample@gmail.com"
// var message = "My email address is" + " " +email;
// alert(message);



// Q7

// var book = "A smarter way to learn JavaScript";
// var message = "I am trying to learn from a Booke named as " + book;
// alert(message);



// Q8

// document.write("Yah! I can write Html content through JavaScript")



// Q9

// var logo = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(logo);





// Chapter no 3  "VARIABLES FOR NUMBERS"

// Q1

// var age;
// age = 15;
// var showAge = "I am "+ age + " years old "
// alert(showAge);



// Q2

// var visits = 14;
// var noOfVisits = "You have visited this site "+ visits + " times ";
// alert(noOfVisits);



// Q3

// var birthYear = 2001;
// var birthMessage = " My birth year is " + birthYear +"<br> Data type of my birthyear is integer"
// document.write(birthMessage);



// Q4

// var visitorName = prompt("What is Your name ?");
// var product = prompt("What type of product do you want");
// var quantity = +prompt("How many products you want to order");
// var finalMessage = visitorName + " " + "ordered"+" "+ quantity + " " + product + " from ABC Clothing Store.";
// document.write(finalMessage);






// Capter no 4 "VARIABLE NAMES: LEGAL & ILLEGAL"


// Q1

// var $firstNo = 2;
// var _secondNo = 4;
// var sum = $firstNo + _secondNo;
// alert(sum);



// Q2
// Legal Variable names

// var $abc;
// var _xyz;
// var myName;
// var User_name;
// var user1;


//illegal Variable names

// var 1abc;
// var #user;
// var *student;
// var user name;
// var 1234;




// Q3

// var heading = " <h2> Rules for Naming JS Variable </h2>";
// var rule1 = "Variable names can only contain letters , numbers , $ and _ (underscore). For example my_Name , $user";
// var rule2 = "Variables must begin with a letter , _  or $ . For example $name, _name or name";
// var rule3 = "Variable names are case sensitive";
// var rule4 = "Variable names should not be JS keywords";

// document.write( heading + "<br>" + rule1 + "<br>" + rule2 + "<br>" + rule3 + "<br>" + rule4 );





// Chapter no 5 "MATH EXPRESSIONS"



// Q1

//For Addition of two number

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a+b;
// document.write("Sum of " + a +" and " + b + " is " + c);



// Q2

// For Subtraction of two numbers

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a-b;
// document.write("Difference of " + a +" and " + b + " is " + c);



// For Multiplication of two numbers

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a*b;
// document.write("Product of " + a +" and " + b + " is " + c);



// For Division of two numbers

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a/b;
// document.write("Ratio of " + a +" and " + b + " is " + c);



// For Modulus of two numbers

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a%b;
// document.write("Modulus of " + a +" and " + b + " is " + c);




// Q3


// var number1;
// document.write("Value after variable decleration is : " + number1);
// number1 = 5;
// document.write("<br>")
// document.write("Initial Value : " + number1);
// number1++;
// document.write("<br>")
// document.write("Value after increment is " + number1);
// var nums = number1 + 7;
// document.write("<br>");
// document.write("Value after addition is " + nums);
// nums--;
// document.write("<br>")
// document.write("Value after decrement is " + nums)
// var divideNo = nums/3;
// document.write("<br>");
// document.write("Value after division with 3 is " + divideNo);
// document.write("<br>")
// document.write("The remainder is 0 ")




// Q4

// var costOfOne = 600;
// alert("Cost of 1 ticket is " + costOfOne + " PKR ");
// var quantity = +prompt("How many tickets do you want?");
// var totalCost = costOfOne*quantity;
// document.write("The total cost to buy " + quantity + " tickets to a movie is " + totalCost + " PKR ");




// Q5

// var a = +prompt("Enter number for printing table");
// for(i=1;i<=10;i++){
//     document.write(a+" x "+i+" = "+a*i+"<br>");
// }




// Q6


// Converts Celcius into Farenheit

// var C = +prompt("Enter temperature in Celcius");
// var Farenheit = (C*9/5)*32;
// document.write(C+" C is equal to "+Farenheit+" F ");



// Converts Farenheit into Celcius

// var F = +prompt("Enter temperature in Farenheit");
// var Celcius = (F-32)*5/9;
// document.write(F+" F is equal to "+Celcius+" F ");




// Q7

// var shirtPrice = 700;
// alert("Price of Shirt is "+shirtPrice);
// var shirtQuantitity = +prompt("How many Shirts you want to purchase");

// var jeanssPrice = 800;
// alert("Price of jeans is "+jeanssPrice);
// var jeansQuantity = +prompt("How many Jeans you want to purchase");

// var totalShirtPrice = shirtPrice*shirtQuantitity;
// var totalJeansPrice = jeanssPrice*jeansQuantity;
// var shippingCharges = 100;
// var totalBill = totalShirtPrice + totalJeansPrice + shippingCharges;
// document.write("Price of Shirt is "+shirtPrice+"<br>");
// document.write("Quantity of Shirt is "+shirtQuantitity+"<br>");
// document.write("Price of jeans is "+jeanssPrice+"<br>");
// document.write("Quantity of Jeans is "+jeansQuantity+"<br>");
// document.write("Shipping Charges "+shippingCharges+"<br>");
// document.write("Total cost of your order is "+totalBill);




// Q8

// var marksObtained = +prompt("Enter marks obtained");
// var totalMarks = +prompt("Enter total marks");
// var percentage = marksObtained/totalMarks*100;
// document.write("<h1>Marks Sheet</h1>")
// document.write("Total marks : "+totalMarks+"<br>");
// document.write("Marks Obtained : "+marksObtained+"<br>");
// document.write("Percentage : "+percentage+" % ");




// Q9

// var dollar = 157.01;
// var riyal = 41.86;
// var rupees = (10*dollar)+(25*riyal);
// document.write("<h1> Currency in PKR</h1>"+"<br>");
// document.write("Total currency in PKR : "+rupees);





// Q10

// var a = 5;
// var b = a+5*10/2;
// document.write("B = "+b);




// Q11

// var birthYear = +prompt("Enter Your birth year");
// var currentYear = +prompt("Enter current year");
// var age = currentYear - birthYear;
// document.write(" Current Year : "+currentYear+"<br>");
// document.write("Birth Year : "+birthYear+"<br>");
// document.write("Your Age :"+age);




// Q12

// var r = +prompt("Enter radius of circle");
// var pie = 3.142;
// var circumference = 2*pie*r;
// var area = pie*(r*r);
// document.write("<h1> The Geometrizer </h1>"+"<br>");
// document.write("The Circumference is :"+circumference+"<br>");
// document.write("The Area is : "+area);




// Q13

// var snackName = prompt("What is your favourite snack ? ");
// var currentAge = +prompt("What is your current age ?")
// var maxAge = 65;
// var snacksPerDay = +prompt("How many snacks you eat per day ?")
// var totalSnacks = snacksPerDay*(65-currentAge)*365;
// document.write("<h1> The Life Time Supply Calculator</h1>"+"<br>");
// document.write("Favourite Snack : "+snackName+"<br>");
// document.write("Current Age : "+currentAge+"<br>");
// document.write(" Estimated Maximum Age : "+maxAge+"<br>");
// document.write("Amount of snacks per day : "+snacksPerDay+"<br>");
// document.write(" You will need "+totalSnacks+" snacks to last you until the ripe old age of"+maxAge);







































