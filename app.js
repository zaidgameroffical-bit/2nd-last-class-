var firebaseConfig = {
  apiKey: "AIzaSyCi6ThMK2CZuJUEBI5aR_TvvPgvj_HIaDg",
  authDomain: "js-class-13cec.firebaseapp.com",
  projectId: "js-class-13cec",
  storageBucket: "js-class-13cec.firebasestorage.app",
  messagingSenderId: "932831346661",
  appId: "1:932831346661:web:59fe70d53e08c3f44df90c",
  measurementId: "G-2473F18KH9"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
var auth = firebase.auth()

console.log(app);


// data type



// 1.string
// 2.function
// 3.Number
// 4.array
// 5.object
// 6.null
// 7.undefined
// 8.bolean












// function getRandomChar() {
//   let numbers = "0123456789";
//   let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   let specials = "!@#$%^&*()_+[]{}<>?/|";
  
//   let allChars = numbers + alphabets + specials;

//   let randomIndex = Math.floor(Math.random() * allChars.length);

//   return allChars[randomIndex];
// }

// function getRandomChar() {
//   let numbers = "0123456789";
//   let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   let specials = "!@#$%^&*()_+[]{}<>?/|";
  
//   let allChars = numbers + alphabets + specials;

//   let randomIndex = Math.floor(Math.random() * allChars.length);

//   return allChars[randomIndex];
// }


// function getRandomString(length) {
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     result += getRandomChar();
//   }
//   return result;
// }

// console.log(getRandomString(10)); 



// var date = new Date()

// var ramdanmillisecond = new Date ("feb 17 ,2026").getTime();

// var currentmillisecond = new Date().getTime();

// var diff = ramdanmillisecond - currentmillisecond;

// var month = diff / (1000 * 60 * 24 * 30);

// document.write(month)




    // function calculateAge() {
    //   let dob = document.getElementById("dob").value;
    //   if (!dob) {
    //     document.getElementById("result").innerText = "Please select your date of birth.";
    //     return;
    //   }

    //   let dobDate = new Date(dob);
    //   let today = new Date();
    //   let ageInMs = today.getTime() - dobDate.getTime();
    //   let ageDate = new Date(ageInMs);
    //   let age = Math.abs(ageDate.getUTCFullYear() - 1970);

    //   document.getElementById("result").innerText = "Your Age is: " + age + " years" + "🖕" ;
    // }







// function abc(num1,num2){
//     console.log(num1 + num2);
// }



// abc(1000,11);




















// function greet(message){
//     alert(message);
// }






// greet("hello world");








// function sum(num1, num2){
//     var aad = num1 + num2;
//     return addEventListener;
// }

// var getVAL = sum(2,10);

// console.log(getVAL)







// function bio(name) {
//     var exp = "hello my name is"
//     name;
//     return exp;
// }

// var getVAL = bio("zaid")

// console.log(getVAL);




















// function mulitplication_table(table){
    // console.log(table);
    // for(var i = 1;i<=10;i++){
    //     document.write(table, "x", i, "=", table * i, "<br>")
    // }

// var i = 1;

// do{
//     document.write(table, "x", i, "=", table * i, "<br>")
//     i++;
// } while (i <= range);


// while(i <= range){


//      document.write(table, "x", i, "=", table * i, "<br>")
//     i++;
// }
// }


// mulitplication_table(+prompt("enter a number"), +prompt("enter a range"))












// var city = prompt("Enter your city");

// switch(city) {
//     case "karachi":
//         alert("allow");
//         break;
//         case "multan":
//         alert("allow");
//         break;

// case "multan":
//         alert("allow");
//         break;

//         default:
//             alert("Not allowed");
// }

// function changingStyle (element) {
//                             element.style.backgroundColor = "lightblue";
//                             element.style.outline = "none";
//                             element.style.border = "none";
//                             element.style.padding = "5px";
//                             element.style.borderRadius = "5px";
//                             element.style.margin = "5px";





// }

// function greet(){

// let timerInterval;
// Swal.fire({
//   title: "Auto close alert!",
//   html: "I will close in <b></b> milliseconds.",
//   timer: 2000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading();
//     const timer = Swal.getPopup().querySelector("b");
//     timerInterval = setInterval(() => {
//       timer.textContent = `${Swal.getTimerLeft()}`;
//     }, 100);
//   },
//   willClose: () => {
//     clearInterval(timerInterval);
//   }
// }).then((result) => {
//   /* Read more about handling dismissals below */
//   if (result.dismiss === Swal.DismissReason.timer) {
//     console.log("I was closed by the timer");
//   }
// });
    
    
// }


// var emailValue = document.getElementById("email");
// emailValue.style.color = "red";
// var passValue = document.getElementById("password");
// passValue.style.color = "aqua";

// function submit(){


//     if(emailValue.value === "" || passValue.value === ""){
//  Swal.fire({
//   text: "Required fields are missing",
//   icon: "error"
// });

//     }

//     else{
//         var values = emailValue.value + " " + passValue.value;
//         console.log(values);
        
//     }
    
    
// }













// var h1Element = document.getElementById("heading")
// var pElement = document.getElementById("para")
// var anchorElement = document.getElementById("link")


// console.log(h1Element.innerText);

// console.log(pElement.innerText);

// console.log(anchorElement.innerText);

// function fullpara() {
//     var pElement = document.getElementById("para");
//     var aElement = document.getElementById("link");

//     if (aElement.innerHTML === "Read More") {
//         pElement.innerHTML =
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non corporis alias aut impedit temporibus quod natus accusamus provident illum nostrum, nesciunt reiciendis obcaecati numquam odit esse. Sequi rerum labore cumque obcaecati harum doloremque, sint velit nam quos esse. Cum nobis eum error aperiam tempora molestias incidunt eaque dignissimos dicta!";
//         aElement.innerHTML = "Read Less";
//     } else {
//         pElement.innerHTML = "Lorem ipsum dolor sit amet.";
//         aElement.innerHTML = "Read More";
//     }
// }










// var allparas = document.getElementsByTagName("p")

// for (var i = 0; i < allparas.length; i++){
//     console.log(allparas[i]);
    
//     allparas[i].style.backgroundColor = "blue";
// }


// function timer() {
    
//     console.log("zaid");
// }

// setInterval(timer, 1);

// var Interval;

// Interval = setInterval(timer, 1000);


// function stop() {
//     clearInterval(Interval);
// }






//  var hourHeading = document.getElementById("hour");
//     var minHeading = document.getElementById("min");
//     var secHeading = document.getElementById("sec");
//     var msecHeading = document.getElementById("msec");

//     var hour = 0;
//     var min = 0;
//     var sec = 0;
//     var msec = 0;
//     var interval;

//     function timer() {
//       msec++;
//       if (msec >= 100) {
//         sec++;
//         msec = 0;
//       }
//       if (sec >= 60) {
//         min++;
//         sec = 0;
//       }
//       if (min >= 60) {
//         hour++;
//         min = 0;
//       }

//       // Update UI with leading zeros
//       hourHeading.innerHTML = hour.toString().padStart(2, '0');
//       minHeading.innerHTML = min.toString().padStart(2, '0');
//       secHeading.innerHTML = sec.toString().padStart(2, '0');
//       msecHeading.innerHTML = msec.toString().padStart(2, '0');
//     }

//     function startTimer() {
//       if (!interval) {
//         interval = setInterval(timer, 10);
//       }
//     }

//     function stopTimer() {
//       clearInterval(interval);
//       interval = null;
//     }

//     function resetTimer() {
//       stopTimer();
//       hour = 0;
//       min = 0;
//       sec = 0;
//       msec = 0;
//       hourHeading.innerHTML = "00";
//       minHeading.innerHTML = "00";
//       secHeading.innerHTML = "00";
//       msecHeading.innerHTML = "00";
//     }

// var divElement = document.getElementById("main")

// console.log(divElement.firstChild);

// console.log(divElement.lastChild);

// console.log(divElement.childNodes[3]);

// var divElement = document.getElementById("heading")


// console.log(divElement.parentElement);

// console.log(divElement.nextSibling);



// var divElement = document.getElementById("para")

// console.log(divElement.nodeName);




// var allpara = document.getElementsByTagName("p")

// console.log(allpara);

// for(var i = 0; i < allpara.length; i++){
//     console.log(allpara[i]);
    
// }





// var link = document.getElementById("link")

// link.setAttribute("class","anchor")

// console.log(link.attributes[0].nodeValue);



// link.setAttribute("href" , "https://www.google.com")


// console.log(link.hasAttribute("id"));

// console.log(link.getAttribute("id"));






// var h1Element = document.createElement('h1');

// var h1Text = document.createTextNode("Hello World");

// var divElement = document.getElementById("container")


// h1Element.appendChild(h1Text);

// divElement.appendChild(h1Element);

// console.log(h1Element);









// var aElement = document.createElement('a');

// var aText = document.createTextNode("link");

// var divElement = document.getElementById("container")


// h1Element.appendChild(aText);

// divElement.appendChild(aElement);

// console.log(aElement);





// var pElement = document.createElement('p');

// var pText = document.createTextNode("lorem imsum dolor");

// var divElement = document.getElementById("container");

// pElement.appendChild(pText);

// divElement.appendChild(pElement);

// console.log(pElement);

// object

// key:value pair


// var arr = ["zaid",16,undefined,false,500]
// var obj = {
//     name:"zaid",
//     email:"zaidgameroffical@gmail.com",
//     age:16
// }
// console.log(obj.email);
// console.log(obj.name);




// console.log(obj[age]);




// console.log(obj["age"]);















// var arr = ["zaid",16,undefined,false,500]




// var obj = {
//     name:"zaid",
//     email:"zaidgameroffical@gmail.com",
//     age:16
// };



// obj.courses= ['html','css',"js"]
// console.log(obj);

// obj.courses[3] = "php";






//  var obj = {
//      name:"zaid",
//      email:"zaidgameroffical@gmail.com",
//      age:16
// adress{
//     city["karachi","lahore"],
//     zipcode: 1324 ,

// }
//  }



// delete obj.email

// console.log(obj);








//  var obj = {
//      name:"zaid",
//      email:"zaidgameroffical@gmail.com",
//      age:16
//  }

// var result = "age" in obj


// console.log(obj);







//  {"if some one says you create methds you  defenately use objects"}

// {"if there is any fumction in any key then it is method not a key"}

// {"TYPES OF FUNCTION"}


// 1.Function declearition
// 2.annoymous function
// 3.arrow function












//  var obj = {
//      name:"zaid",
//      email:"zaidgameroffical@gmail.com",
//      age:16,
//      getname:function () {     "THIS IS DECLEARITION FUNCTION"
        
//      }
//  }





//  var obj = {
//      name:"zaid",
//      email:"zaidgameroffical@gmail.com",
//      age:16,
//      var func = function () {     "THIS IS ANNOMOUS FUNCTION"
        
//      }
//  }




//  var obj = {
//      name:"zaid",
//      email:"zaidgameroffical@gmail.com",
//      age:16,
//      getname:function () {     "THIS IS ARROW FUNCTION"
        
//      }
//  }













// function Student(name,age,email,gander){
//     this.stdName = name,
//     this.stdAge = age,
//     this.stdEmail = email,
//     this.stdGander = gander;
// }

// var obj = new Student("zaid",16,"zaidgamer@mail.com","Male");

// console.log(obj);






// function Book(name,author,price,quantity){
//     this.bookName = name,
//     this.bookAuthor = author,
//     this.bookPrice = price,
//     this.bookQuantity = quantity;
// }

// var bookObj = new Book("english","غالب بھائی",5000,200);



// console.log(bookObj);

//     Book.prototype.Book = function () {
//         console.log(Book);
        
//     }



// console.log(window);











// var str = "Hello world"
// console.log(str.includes("H"));

// var str = "Hello world"
// console.log(str.startsWith("H"));

// var arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.reverse());


// var str = "Hello javascript"
// console.log(str.substring(0,5));


// var str = "Hello javascript"

// var splitted_word = str.split(" ");

// console.log(splitted_word.join(" "));

// var str = ("posible,imposible")

// console.log(str.endsWith("imp"));



// var countries = ("Afghanistan, Albania, Algeria, Andorra, Angola, Antigua and Barbuda, Argentina, Armenia, Australia, Austria, Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bhutan, Bolivia, Bosnia and Herzegovina, Botswana, Brazil, Brunei, Bulgaria, Burkina Faso, Burundi, Cabo Verde, Cambodia, Cameroon, Canada, Central African Republic, Chad, Chile, China, Colombia, Comoros, Congo (Congo-Brazzaville), Costa Rica, Croatia, Cuba, Cyprus, Czech Republic, DR Congo (Congo-Kinshasa), Denmark, Djibouti, Dominica, Dominican Republic, Ecuador, Egypt, El Salvador, Equatorial Guinea, Eritrea, Estonia, Eswatini, Ethiopia, Fiji, Finland, France, Gabon, Gambia, Georgia, Germany, Ghana, Greece, Grenada, Guatemala, Guinea, Guinea-Bissau, Guyana, Haiti, Honduras, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Israel, Italy, Ivory Coast, Jamaica, Japan, Jordan, Kazakhstan, Kenya, Kiribati, Korea (North), Korea (South), Kuwait, Kyrgyzstan, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Marshall Islands, Mauritania, Mauritius, Mexico, Micronesia, Moldova, Monaco, Mongolia, Montenegro, Morocco, Mozambique, Myanmar, Namibia, Nauru, Nepal, Netherlands, New Zealand, Nicaragua, Niger, Nigeria, North Macedonia, Norway, Oman, Pakistan, Palau, Palestine, Panama, Papua New Guinea, Paraguay, Peru, Philippines, Poland, Portugal, Qatar, Romania, Russia, Rwanda, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, Samoa, San Marino, Sao Tome and Principe, Saudi Arabia, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovakia, Slovenia, Solomon Islands, Somalia, South Africa, South Sudan, Spain, Sri Lanka, State of Palestine, Sudan, Suriname, Sweden, Switzerland, Syria, Taiwan, Tajikistan, Tanzania, Thailand, Timor-Leste, Togo, Tonga, Trinidad and Tobago, Tunisia, Turkey, Turkmenistan, Tuvalu, Uganda, Ukraine, United Arab Emirates, United Kingdom, United States, Uruguay, Uzbekistan, Vanuatu, Vatican City, Venezuela, Vietnam, Yemen, Zambia, Zimbabwe")




// function serch() {
  
// }









// function signUp(){
//   try{
//       var nameInput = document.getElementById("name");
//     var emailInput = document.getElementById("email");
//     var passwordInput = document.getElementById("password");
//     auth
//     .createUserWithEmailAndPassword(emailInput.value,passwordInput.value)
//     .then(function(response){
//         console.log(response);
//         Swal.fire({
//   title: "Sign up succesfully....",
//   text: "You clicked the button!",
//   icon: "success"
// });

//     })
//     .catch(function (error){
//         console.log(error);
        
//     })
//   }
//   catch(error){

//     console.log(error);
//     Swal.fire({
//   title: error.code,
//   icon: "error"
// });
    
//   }
// }





// function login(){
//     try{

//     var emailInput = document.getElementById("email");
//     var passwordInput = document.getElementById("password");

//     auth.signInWithEmailAndPassword(emailInput.vale,passwordInput.value)
//     .then(function(response){
//            console.log(response);
//         Swal.fire({
//   title: "Sign up succesfully....",
//   icon: "success"
// });
//     })

    
//     }

//     catch(error){
//         console.log(error);
//     Swal.fire({
//   title: error.code,
//   icon: "error"
// });

//     }
// }


// function loginWithGoogle(){
//         var provider = new firebase.auth.GoogleAuthProvider();

//         firebase
//         .auth()
//         .signInWithPopup(provider)
//         .then(function(response){
//             console.log(response);
            
//         })
//         .catch(function (error) {
//             console.log(error);
            
//         })
// }
// var app = firebase.initializeApp(firebaseConfig);
// var db = firebase.database();

// function saveData() {
//   var name = document.getElementById("name").value;
//   var age = document.getElementById("number").value;
//   var city = document.getElementById("city").value;

//   var obj = {
//     user_name: name,
//     user_age: age,
//     user_city: city
//   };

//   console.log(obj);

//   // Save data to Firebase under a unique key
//   firebase.database().ref("users").push(obj);
// }

// function getdatafromdatabase() {
//   firebase.database().ref("users").on("child_added", function(data) {
//     console.log(data.val());
//   });
// }

// getdatafromdatabase();

// function deletedtafromfirebase() {
//   firebase.database().ref("user/-Oc6MpKEjoTKjlPoDprj").remove();
// }
// deletedtafromfirebase();
// save data on database

// set()



// push() 

