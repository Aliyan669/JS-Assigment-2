///////       Chapter : Array and Loop      //////////
//
/// Ques No : 01
//
// var fruit = [ [],[]]
//
/// Ques No : 02
//
// var mat=[[0 , 1, 2, 3],
//          [1 , 0 , 1 , 2],
//          [ 2 , 1 , 0 ,1]
// ]
// for(i= 0 ; i < 4; i++ ){
//     for(z=0;z<4;z++){
//         document.write(mat[i][z])
//     }
//       document.write("<br/>")
// }
//
///Ques No : 03
//
// for (i=1 ;i<=10; i++){
//     document.write(i+"<br>")
// }
//
/// Ques No : 04
//
//    var table = prompt("Enter Table Number") 
//    var length = prompt("Enter Number Length")
//     for(i= 1; i<=length ; i++)
// {
//  document.write ( table + " x " + i + " = "+table*i+"<br/>");
// }
//
/// Ques No 05
//
//  var fruits = ["apple", "banana", "mango", "orange","strawberry"] 
// for(i=0;i<5;i++){
//     document.write(fruits [i]+"<br/>")
// }
//  var fruits = ["apple", "banana", "mango", "orange","strawberry"] 
// for(i=0;i<5;i++){
//     document.write(  " Element at index "+ i  + " is "+fruits [i]+"<br/>")
// }
//
/// Ques No : 06   (A)
//
//    for(i=1;i<=15;i++){
//        document.write(i+",")
//    }
//   
/// Ques No : 06   (B)
//
//    for(i=15;i>=0;i--){
//     document.write(i+",")
//    }
//
/// Ques No : 06   (C)
//
// for(i= 0;i<=20;i+=2){
// document.write(i+",");
// }
//
//  Ques No : 06   (D)
//
// for(i= 1;i<=20;i+=2){
// document.write(i+",");
// }
//
//   Ques No : 06   (E)
//
// for(i= 2;i<=20;i+=2){
// document.write(i+"k,");
// }
//
// / Ques No : 07 
//
// var user = prompt("Enter Bakery items")
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
//  if ( user == A [2]){
//    document.write("Cookies is availible at index 2 in our bakery ")
//  }else{
//      document.write ("We are Sorry "+ user+" is not availible in bakery" )
//  }
//
///  Ques No : 08
//
// var arr = [24, 53, 78, 91, 12,6]
// var max = Math.max(...arr)
// document.write("The Largest number is  "+max);
//
///  Ques No : 09
//
// var arr = [24, 53, 78, 91, 12,]
// var min = Math.min(...arr)
// document.write("The smallest number is  "+min);
//
///  Ques No : 10
//
//   for(i=5;i<=100;i+=5){
//      document.write(i+" , ")
//   }
//
/////       Chapter : Array      //////
//
/// Ques No : 01
//
//   var student = [ ]
//   document.write( student)
//
/// Ques No : 02
//
//   var student= new Array()
//   document.write(student)
//
/// Ques No : 03
//
//   var city=["'karachi'","'lahore'","'multan'","'pindi'"]
// document.write(city)
//
/// Ques No : 04
// 
//
/// Ques No : 05
//
//  var bolean = [true,false]
//  document.write(bolean)
//
/// Ques No : 06
//
//  var mixed = ["Ali", 5566,true]
//  document.write(mixed);
//
/// Ques No : 07
//
//  document.write("<h1>Qualification</h1></br>")
//  var qual =[ "SSC", "HSC","BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
//  for(i=1;i<qual.length;i++){
//  document.write(i+") "+qual[i] +"<br/>")
//  }
//
/// Ques No : 08
//
// var arrAy=["Micheal","John", "Tonny"]
// var arr=[320,230,480]
// var per1= arr[0] / 500 *100
// var per2= arr[1] / 500 *100
// var per3= arr[2] / 500 *100
// document.write("Score of "+ arrAy[0]+ " is " + arr[0]+". Percentage :" + per1 +"%"+"</br>")
// document.write("Score of "+ arrAy[0]+ " is " + arr[0]+". Percentage :" + per2+"%"+"</br>")
// document.write("Score of "+ arrAy[0]+ " is " + arr[0]+". Percentage :" + per3+"%"+"</br>")
//
/// Ques No : 09
//
//   ( A )
//  var color =[ "Orange","Blue","Green","Pink" ]
//  var user = prompt( "Add the color")
//  color.unshift(user)
//  document.write(color)
//
//   ( B )
//  var color =[ "Orange","Blue","Green","Pink" ]
//  var user = prompt( "Add the color")
//  color.push(user)
//  document.write(color)
//
//   ( C )
//  var color =[ "Orange","Blue","Green","Pink" ]
//  var user1 = prompt( "Add the first color")
//  var user2 = prompt( "Add the Second color")
//  color.unshift(user1)
//  color.unshift(user2)
//  document.write(color)
//
//   ( D )
//   var color =[ "Orange","Blue","Green","Pink"  ]
//   color.shift()
//   document.write(color)
//
//    ( E)
//   var color =[ "Orange","Blue","Green","Pink"]
//   color.pop()
//   document.write(color)
//
//     ( F )
// var index= prompt( "Enter the index");
// var colorName=prompt("Enter color name ");
// var color= ["Orange","Pink","White"] 
// color.splice(index,0,colorName)
// document.write(color);
//
//     ( G )
// var index= prompt( "Enter the index");
// var dlete =prompt("Enter delete color  ");
// var color= ["Orange","Pink","White","Black","Green"]
// color.splice(index,dlete,"")
// document.write(color);
//
/// Ques No : 10
//  
// var score = [320,230,480,120]
// document.write(score.sort())
//
/// Ques No : 11
//
// var cities =[ " Karachi " , " Lahore " , " Islamabad ", " Quetta ", " Peshawar ","</br>"]
// document.write("Cities List : </br>")
// document.write(cities)
// document.write("Selected Cities : </br>")
// var cities =[ " Karachi " , " Lahore " , " Islamabad ", " Quetta ", " Peshawar "]
// document.write(cities.slice(2,4))
//
//  Ques No : 12
//
// var arr = ["This ", " is ", " my ", " cat"];
// document.write(arr.join(" "))
//
//  Ques  No : 13
//
//   var arr =["keyboard","Mouse","Printer","Moniter"]
//   document.write("Devices : </br>"+ arr+"</br></br>");
//   for(i=0;i<arr.length;i++){
//       document.write("out :</br>"+arr[i]+"</br>")
//  }
//
//  Ques No : 14
//
// var arr =["keyboard","Mouse","Printer","Moniter"]
// document.write("Devices : </br>"+ arr+"</br></br>");
// var arr =["keyboard","Mouse","Printer","Moniter"]
// arr.reverse()
// for(i=0;i<arr.length;i++){
// document.write("out :</br>"+arr[i]+"</br>")
// }
//
// Ques No : 15
//
// var arr = ["Apple","Samsung", "Motorola", "Nokia","Sony" , "Haier"]
// document.write("<select>"+"<option>" + arr[0] + "</option>");
// document.write("<option>" + arr[1] + "</option>");
// document.write("<option>" + arr[2] + "</option>");
// document.write("<option>" + arr[3] + "</option>");
// document.write("<option>" + arr[4] + "</option>");
// document.write("</select>");
//
//








