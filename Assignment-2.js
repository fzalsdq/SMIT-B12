
// // ************* Task-1 *************

// // ************* Q1 *************
// var a=prompt("Enter a number");
// document.write(`The value of a is ${a}, <br>`);
// document.write(`Now the value of ++a is ${++a}, <br>`);
// document.write(`Now the value of a++ is ${a++}, <br>`);
// document.write(`Now the value of --a is ${--a}, <br>`);
// document.write(`Now the value of a-- is ${a--}, <br>`);
// document.write(`Now the value of --a is ${--a}, <br>`);

// // ************* Q2 *************
// var a=2, b=1;
// document.write(`a is ${a}`);
// document.write(`b is ${b}`);
// var result =--a;
// document.write(`a is ${a}`);
// document.write(`b is ${b}`);
// var result=--b;
// document.write(`a is ${a}`);
// document.write(`b is ${b}`);

// var result = a-b;
// document.write(`a is ${a}`);
// document.write(`b is ${b}`);
// document.write(`Result is ${result}, <br>`);


// var result = result + ++b;
// document.write(`a is ${a}`);
// document.write(`b is ${b}`);
// document.write(`Result is ${result}, <br>`);

// var result = result + b--;
// document.write(`a is ${a}`);
// document.write(`b is ${b}`);
// document.write(`Result is ${result}, <br>`);

// // var result=--a - --b + ++b + b--;

// // ************* Q3 *************

// var name=prompt("What is your Name?");
// alert(`Hello! ${name}`);

// // ************* Q5 *************
// var num=prompt("Enter a number for table","5");

// for(count=1;count<=10; count++){
//     document.write(`${num} x ${count} = ${num*count},<br>`);
// }

// // ************* Q6 *************

// var eng=+prompt("Enter marks for English");
// var urdu=+prompt("Enter marks for Urdu");
// var math=+prompt("Enter marks for Math");


// var perE=eng/100 * 100;
// var perU=urdu/100*100;
// var perM=math/100*100;
// document.write("Subject : Total : Marks Obtained : Percentage"+"<br>");
// document.write("English : 100   : " + "            " + eng +"   "+ perE+"<br>");
// document.write("Urdu    : 100   : " + "            " + urdu +"   "+ perU+"<br>");
// document.write("Math    : 100   : " + "            " + math +"   "+ perM+"<br>");
// var total=100+100+100;
// var obtM=eng+urdu+math;
// var perT=obtM/total*100;

// document.write(total  +  "     " + obtM   +         perT+"<br>");

// ************* task-2 *************

// ************* Q1 *************

// var city = prompt("Enter a city name")
// if(city=="Karachi" || city=="karachi"){
//     alert("Welcome to City of lights");
// }

// ************* Q2 *************
// var gender=prompt("Enter male / female");
// if(gender=="male"){
//     alert("Good morning Sir!");
// }
// else if(gender=="female"){
//     alert("Good morning Maam!");
// }
// else{
//     alert("You better decide your gender");
// }

// // ************* Q3 *************

// var color=prompt("Enter Signal color");
// if(color=="red"){
//     alert("Must Stop");
// }
// else if(color=="yellow"){
//     alert("Ready to move");
// }
// else{
//     alert("Move Now");
// }

// ************* Q4 *************

// var remfuel=prompt("Enter amount of remaining fuel in litres");
// if(remfuel<0.25){
//     alert("Please refill the fuel in your car");
// }

// ************* Q6 *************

// var sub1=+prompt("Enter marks for Subject-1")
// var sub2=+prompt("Enter marks for Subject-2")
// var sub3=+prompt("Enter marks for Subject-3")
// var total=300
// var oMarks=sub1+sub2+sub3

// var per=oMarks/total*100;

// if(per>=80){
//     document.write("Total marks = 300 " + "<br>")
//     document.write("Marks Obtained = " + oMarks + "<br>" )
//     document.write("Percentage = " + per + "<br>")
//     document.write("Grade =  A-One " + "<br>")
//     document.write("Remarks = Excellent" + "<br>")
// }
// else if(per>=70){
//     document.write("Total marks = 300 " + "<br>")
//     document.write("Marks Obtained = " + oMarks + "<br>" )
//     document.write("Percentage = " + per + "<br>" )
//     document.write("Grade =  A " + "<br>" )
//     document.write("Remarks = Good" + "<br>")
// }
// else if(per>=60){
//     document.write("Total marks = 300 " + "<br>")
//     document.write("Marks Obtained = " + oMarks + "<br>" )
//     document.write("Percentage = " + per + "<br>" )
//     document.write("Grade =  B " + "<br>")
//     document.write("Remarks = You need to improve" + "<br>")
// }
// else {
//     document.write("Total marks = 300 " + "<br>")
//     document.write("Marks Obtained = " + oMarks + "<br>"  )
//     document.write("Percentage = " + per + "<br>" )
//     document.write("Grade =  Fail " + "<br>")
//     document.write("Remarks = Sorry" + "<br>")
// }

// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// } // Condition is false 

// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } // Condition is false


// if (c === 13){ 
//         alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
//     alert("condition 3 is true"); 
// } 
// if(c === 14){ 
//         alert("condition 4 is true"); 
//  }

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// }
// if (true){ 
//     alert("True");
//  } 
//  if (false){
//      alert("False");
//      }

// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// }

// ************* Q7 *************
// var secret=7;
// var ans=prompt("Guess a number b/w 1-10");
// if(ans==7){
//     alert("You guessed right");
// }
// else {
//     alert("Try again !");
// }

// ************* Q8 *************

// var num=prompt("Enter any number");
// if(num%3==0){
//     alert("The number is divisible by 3");
// }
// else {
//     alert("The number is not divisible by 3");
// }

// ************* Q9 *************

// var num=prompt("Enter any number");
// if(num%2==0){
//     alert("The number is even")
// }
// else {
//     alert("The number entered is odd");
// }




// ************* Q10 *************
// var temp=prompt("Enter temperature");
// if(temp>40){
//     alert("Its too hot outside")
// }

// else if(temp>30){
//     alert("The Weather today is normal")
// }
// else if(temp>20){
//     alert("Today the weather is cool")
// }
// else if(temp>10){
//     alert("OmG Today Weather is so Cool")
// }



// // ************* Q11 *************
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var operator=prompt("Enter operator( + - * / %) ");

// if(operator=="+"){
//     alert("Result is" +  " "+ + num1+ +num2) // Not Working
// }
// else if(operator=="-"){
//     alert("Result is" +  " "+ + num1- +num2) // Not Working
// }
// else if(operator=="*"){
//     alert("Result is" +  " "+ + num1* +num2) // Working
// }
// else if(operator=="/"){
//     alert("Result is" +  " "+ + num1/ +num2) // Working
// }
// else if(operator=="%"){
//     alert("Result is" +  " "+ + num1% +num2) // Working
// }

// ************* Task-3 ************* 

// ************* Q1 *************

// var char=prompt("Enter any number or alphabet");
//  document.write(char)
//  var conv=charCodeAt(char); // Not working
//  document.write(conv)
  
// if(conv>65 && conv<=90){
//     alert("You entered uppercase alphabet")
// }
// if(conv>97 && conv<=122){
//     alert("You entered lowercase alphabet")
// }

// ************* Q2 *************

// var a=prompt("Enter first number");
// var b=prompt("Enter second number");
// if(a>b){
//     document.write("a is greater than b")
// }
// else if(a<b){
//     document.write("a is less than b")
// }
// else {
//     document.write("a is equal to b")
// }

// ************* Q3 *************

// var a=prompt("Enter any number");
// if(a>0){
//     document.write("Number is positive")
// }
// else if(a<0){
//     document.write("Number is negative")
// }
// else {
//     document.write("You entered zero")
// }


// ************* Q4 *************

// var letter=prompt("Enter any alphabet");
// if(letter==='a' || letter==='e' || letter==='i' || letter==='o' || letter==='u'){
//     document.write("This letter is a vowel")
// }
// else {
//     document.write("You typed a consonant")
// }

// ************* Q5 *************

// var cpass="enter206";
// var pass=prompt("Enter your password");
// if(pass==='enter206'){
//     document.write("Correct! The password you typed matches the original password")
// }
// else {
//     document.write("You typed a wrong password, Please Re-enter your password")
// }

// ************* Q6 *************

// var greeting; 
// var hour = 13; 
// if(hour < 18){
//     document.write("greeting = Good day");
// } 
// else {
//     document.write("greeting = Good evening"); 
//     }

// ************* Q7 *************

// var time=1900;
// if(time>=0 && time<=1200){
//     document.write("Good Morning");
// }
// else if(time>=1200 && time<=1700){
//     document.write("Good Afternoon");
// }
// else if(time>=1700 && time<=2100){
//     document.write("Good Evening");
// }
// else if(time>=2100 && time<=2359){
//     document.write("Good Evening");
// }

// Continued from chapter 13 **************** 

// Chapter 14-16

// ************* Q 1-7 *************

// var sname=[];
// var sname=new []
// var str=["cat", "dog", "horse"]
// var num=[1,3,5,7];
// var b=[true];
// var mix=[1,4,"red", "pen", "cat",10];

// var qual=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

// document.write("<b> Qualifications </b>" + "<br>")

// document.write("1)" + " " + qual[0] + "<br>")

// document.write("2)" + " " + qual[1]+ "<br>")
// document.write("3)" + " " + qual[2]+ "<br>")
// document.write("4)" + " " + qual[3]+ "<br>")
// document.write("5)" + " " + qual[4]+ "<br>")
// document.write("6)" + " " + qual[5]+ "<br>")
// document.write("7)" + " " + qual[6]+ "<br>")
// document.write("8)" + " " + qual[7]+ "<br>")

// ************* Q 8 *************

// var sname=["Aslam", "Manzoor", "Islam"];
// var scoreA=[45,65,78,52,68]
// var scoreM=[75,64,78,45,65]
// var scoreI=[65,85,75,45,86]

// var totalA=scoreA[0]+scoreA[1]+scoreA[2]+scoreA[3]+scoreA[4]
// var totalM=scoreM[0]+scoreM[1]+scoreM[2]+scoreM[3]+scoreM[4]
// var totalI=scoreI[0]+scoreI[1]+scoreI[2]+scoreI[3]+scoreI[4]

// var perA=totalA/500*100
// var perM=totalM/500*100
// var perI=totalI/500*100

// document.write("Score of " + sname[0] +" " + "is" + " " + totalA + " " +"Percentage =" + perA +"<BR>" )
// document.write("Score of " + sname[1] +" " + "is" + " " + totalM + " " +"Percentage =" + perM +"<BR>")
// document.write("Score of " + sname[2] +" " + "is" + " " + totalI + " " +"Percentage =" + perI +"<BR>")

// ************* Q 9 *************

// var color=["red","white", "orange","green","blue","yellow"];
// var s=" "
// var arr1=[]
// var col1=prompt("What color you want to be first?")
// for(i=0; i<color.length; i++){
    
//     if(col1==color[i]){
//         color[i]+=s
//         break;
//         arr1.push(col1);
        
//     }
    
    
//     document.write(arr1)    
// }




