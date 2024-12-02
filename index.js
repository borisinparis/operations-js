// operations Arithmetic Operators ****
    // Assignment Operators
    // Comparison Operators
    // Logical Operators
    // Conditional Operators
    // Type Operators


// ******** bodlogo ***********
// 8. Гурвалжингийн периметрийг олох
let a = 15; 
let b = 20;
let c = 10;
console.log(a+b+c + " ene bol perimetr");

// 9. Тойргийн талбайг олох

let r = 12;
const P=3.14;
var s = (r **2) * P;
console.log(s + " toirgiin talbai");
 
// 10. m = y2-y1/x2-x1 хариуг олох
let x = 2;
let y = 3;
 var m = (y*2 - y)/ (x*2 - x);
console.log(m);

// 11. 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.
var data = 15;
var sec = 3 ;
var bitRate = data / sec ;
console.log(bitRate);


// 12. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.

// 13. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.
var tsels = 50
 var farenget = (tsels * 1.8) + 32 
 console.log(farenget);
// 14. Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
let aTeam1Player = -96;
let aTeam2Player = 108;
let aTeam3Player = 89;
let bTeam1Player = -88;
let bTeam2Player = 91;
let bTeam3Player = 110;
var aTeamPlayerDundaj = (aTeam1Player + aTeam2Player + aTeam3Player)/3;
var bTeamPlayerDundaj = ( bTeam1Player + bTeam2Player + bTeam3Player)/3;
console.log(Math.floor(aTeamPlayerDundaj) + " a team dundaj " + Math.floor(bTeamPlayerDundaj) + " b team dundah");



// 15. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул:
var huwisagch1 = 15; 
var huwisagch2 = 20;
console.log(" urjeh huwisagch " + huwisagch1 * huwisagch2 + " huwaah " + huwisagch1 / huwisagch2 + " hasah " + (huwisagch1 - huwisagch2) + " nemeh " + (huwisagch1 + huwisagch2));



// Өгөгдсөн 2 тооны нийлбэр нь 25

// Өгөгдсөн 2 тооны ялгавар нь 5


// 16. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх
var cm = 5;
var inch = cm/2.54;
console.log(inch + " cm raas inch ruu horwuulsen too");
var cm = inch * 2.54;
console.log(cm + " inch ees cmd ruuu horwuulesen too");



// 17. Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.
// 18. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич
var enhniiTsiper= 323;
var enhniih = enhniiTsiper/100;
console.log(Math.floor(enhniih));

var utag1 = 110 ;
var utag2 = 90;
var utag3 =100;
if ( utag1 >= utag2) {
    utag1 = utag1

}
else { 
    utag1 = utag2  
} ;
if (utag1>=utag3) {
    console.log(utag1 + " hamgiin ih too");
    
}
else {
    console.log(utag3 + " hamgiin ih too");
    
};



 

