
// Chapter 21-25

// ********** Q1 *********** 

// var input1=prompt("Enter your First Name")
// var input2=prompt("Enter your Last Name")

// var fullName=input1+ " " +input2;
// console.log("Your full name is " + fullName);

// ********** Q2 *********** 

// var mobile=prompt("Enter your Favourite Mobile Model Name")
// console.log("Your favourite mobile phone model name is " +mobile)
// console.log("Length of String: "+ mobile.length)

// ********** Q3 *********** 

// var nationality="Pakistani"
// console.log("Index of 'n': " + nationality.indexOf('n') );

// ********** Q4 *********** 

// var s='Hello World';
// console.log("String: "+ s  )
// console.log("Last Index of 'l': "+ s.lastIndexOf('l'))

// ********** Q5 *********** 

// var p="Pakistani"
// console.log("String: " + p );
// console.log("Character at index 3: " + p.charAt(3) );

// ********** Q7 *********** 

// var city='Hyderabad'
// var replace=city.replace('Hyder','Islam')
// console.log("City: " + city)
// console.log("After Replacement: "+replace)

// ********** Q8 *********** 

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep=message.replaceAll('and','&')
// console.log("message before replacing 'and' : " + message)
// console.log("message after Replacement with &: "+rep)

// ********** Q9 *********** 

// var nums='472'
// console.log("Value : " + nums)
// console.log(" Type: " + typeof(nums))
// // var num=nums.charCodeAt(0)+32 + nums.charCodeAt(1)+32 + nums.charCodeAt(2)+32
// console.log("Value : " + nums)
// console.log(" Type: " + typeof(+nums))

// ********** Q10 *********** 

// var userIn=prompt("Enter a word to capitalize")
// var cap=userIn.toUpperCase()
// console.log("User Input " + userIn )
// console.log("Upper Case :" + cap)

// ********** Q11 *********** 

// var userIn=prompt("Enter a word to Title case")
// var cap=userIn.charAt(0).toUpperCase()
// console.log("User Input " + userIn )
// console.log("Title Case :" + cap + userIn.slice(1))

// ********** Q12 *********** 

// var num='35.36'
// var a =num.replace('.','')
// console.log("Value : " + num)
// console.log("Result: " + a)
// console.log(typeof(a));
// a=+a;
// console.log(typeof(a));

// ********** Q13 *********** 

// var inp=prompt('Enter user name')
// for(i=0; i<inp.length; i++){
    
//     var charCode=inp.charCodeAt(i)
//     if(charCode==33 || charCode==44 || charCode==46 || charCode==64 )

// {
//     alert("Please enter a valid username")

// }
    

// }

// ********** Q14 ***********

// var bakery=["cake", "apple pie", "cookie", "chips", "patties"]
// var itemSearch=prompt("What would you like to eat?")

// var flagValue=false;
// for(i=0; i<bakery.length; i++){
// if(itemSearch.toLowerCase()===(bakery[i])){
//     flagValue=true;
// break;
    
// }
// }
// if(flagValue==true){
// console.log("We have this item at shelf no. "+ i)
// }
// else {
//     console.log("We dont have this item")
// }

// ********** Q15 ***********





// ********** Q16 ***********

// var univ="University of Karachi";
// for(i=0; i<univ.length; i++){
//     univ.split(",")
//     console.log(univ[i]);    
// }

// ********** Q17 ***********

// var inp=prompt("Enter any letter")
// for(i=0; i<inp.length; i++){
//     var lastCh= inp.charAt(i)
//    console.log(inp.charAt(i));
// console.log(inp.lastIndexof(i)); /// can be used 
// }
// console.log("Last Character is " + lastCh);

// ********** Q18 ***********

// var text="The quick brown fox jumps over the lazy dog"
// var arr=[];
// var count=0;
// var tSearch="he"
// var textWord="";
// for(i=0; i<text.length; i++){
    
//     // arr+=(text[i])
//     if(text.includes(tSearch)) {
//     // text.split("")
     
//     // break;
//     // textWord=arr+=text;    
//     count++
// console.log(text.indexOf("the"))   
//         // console.log(text[i]);
// }
// else {
//     console.log("Not found")
// }

// // console.log(arr+=text[i]);
// }

// console.log("Number of occurrences of words in the sentence is " + count )
// console.log(arr)
// console.log(typeof(arr))




// Chapter 26-30

// ********** Q1 ***********

// var num=prompt("Enter a positive number")
// document.write("Number " + num + "<br>")
// var round=Math.round(num)
// document.write("Round off value " + round + "<br>") 
// var flr=Math.floor(num)
// document.write("Floor value " + flr + "<br>")
// var cil=Math.ceil(num)
// document.write("Ceiling value " + cil + "<br>")

// ********** Q2 ***********

// var fl=prompt("Enter a negative number")
// document.write("Number " + fl + "<br>")
// var round=Math.round(fl)
// document.write("Round off value " + round + "<br>") 
// var flr=Math.floor(fl)
// document.write("Floor value " + flr + "<br>")
// var cil=Math.ceil(fl)
// document.write("Ceiling value " + cil + "<br>")

// ********** Q3 ***********

// var a =prompt("Enter a number")
// var Abs=Math.abs(a)
// document.write("Absolute value of " + a + "is " + Abs)

// ********** Q4 ***********

// var dice=Math.round(Math.random()*6)
// if(dice!==0){
//     document.write("Random dice value is " + dice)
// }
// else {
//     document.write("The dice was not thrown correctly")
// }

// var coin=Math.round(Math.random()*2)
// if(coin===0){
//     document.write("Rethrow the coin")
// }
// else if(coin==1){
//     document.write(" value is heads")
// }
// else {
//     document.write(" value is tails")
// }


