// // kvatrat tomonlari
// {
// let a = 5;
// let P = 4 * a;
// console.log(`kvadratning tomoni: ${P}`);
// }
// // kvadratning yuzi
// {
//     let a = 5;
//     let S = 2 * a;
//     console.log(`kvadratning yuzi: ${S}`);
// }
// // togri turtburchakning yuzi va peremetri
// {
//     let a = 5;
//     let b = 5;
//     let S = a * b;
//     let P = 2 * (a + b);
//     console.log(`togri turtburchakning yuzi: ${S}`);
//     console.log(`togri turtburchakning peremetri: ${P}`);
// }
// // aylananing uzunligi
// {
// const PI = 3.14;
// let d = 10;
// let L = PI * d;
// console.log(`aylananing uzunligi ${L}`);
// }
// // kubning hajmi va tula sirti
// {
//     let a = 2;
//     let V = a * a * a;
//     let S = 6 * (a * a);
//     console.log(`kubning hajmi: ${V}`);
//     console.log(`kubning tula sirti: ${S}`);
// }
// // paralapepet tomonlari va tula sirti
// {
//     let a = 2, b = 4, c = 5;
//     let V = a * b * c;
//     let S = 2 * (a * b + b * c + a * c);
//     console.log(`paralapepet tomonlari: ${V}`);
//     console.log(`paralapepet tula sirti: ${S}`);   
// }

// 100 va 200 orasida randdom sonni chiqarish
// const rand = Math.floor(Math.random()*100) + 100
// console.log(rand)    
 
// let rand1 = Math.floor(Math.random()*35)+1
// console.log(rand1)    

// let num = 8;
// let num = 8
// let a = 5;
// let r = num % a;


// console.log(r.toFixed())

// @ urniga a harfini quyish
// let string = 'Webr@in Ac@demy'
// console.log()


// keraksiz belgini olib tashlash
// let string1 = 'Ass#a###lamu al#e#kum'
// console.log(string1.replaceAll('#',''))


// har natingning birinchi harfini kata harifda quyish
// const mySentence = "freeCodeCamp is an awesome resource"; 
// const words = mySentence.split(" "); 
// for (let i = 0; i < words.length; i++) { 
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1); 
  
    
// }
// let a =  words.join(" ")
// console.log(words)
// console.log(a)
// const b = 
// `##########
// ##      ##
// # #    # #
// #  #  #  #
// #   ##   #
// #   ##   #
// #  #  #  #
// # #    # #
// ##      ##
// ##########
//  `;
//  console.log(b)

//  function kasiba(year){
//      return ((year % 4 == 0) && (year % 100 != 0) || year % 400 == 0) ? "kasiba yil" : "kasiba yil emas"
//  }
// console.log(kasiba(2024))
// console.log(kasiba(2023))

// function plusFive(num){
//     return num + 5;
// }
// console.log(plusFive(12))

// function plusTen(num){
//     return num + 10;
// }
// console.log(plusTen(202))



// function grade(baho){
//     if(baho >= 90){
//         console.log("A")
//     }else if(baho >=80){
//         console.log("B")
//     }else if(baho >=70){
//         console.log("C")
//     }else if(baho >=60){
//         console.log("D")
//     }else if(baho >=40){
//         console.log("E")
//     }else{
//         console.log("F")
//     }
    
// }
// grade(90)
// grade(80)
// grade(70)
// grade(60)
// grade(40)
// grade(39)

// 1. str1 va str2 stringlar berilgan agar str1 va str2 uzunligi bir biriga teng bolsa str1 ni aks holda str2 ni qaytaruvchi funksiya tuzing
// function s(name, name1){
//     if(name.length === name1.length){
//         console.log(name)
//         console.log(name.length)
//     }else{
//         console.log(name1)
//         console.log(name1.length)
//     }    
// }
// s("alli","vali")
// s("eshmat","toshmat")


//2. string berilgan uning oxirgi va boshidagi qiymatlarni olib tashlang
// function str(a){
//     console.log(a.slice(1,4))
// }
// str("hello")

// function str1(b){
//     console.log(b.slice(1,2))
// }
// str1("abs")
// function str2(c){
//     console.log(c.slice(1,1))
// }
// str2("va")

//5. Sonni toq yoki juftligini tekshiring
// function s(num){
//     if(num % 2 === 0){
//         console.log("juft son")
//     }else{
//         console.log("tog son")
//     }
// }
// s(2)
// s(3)

//4. 1-7 raqamlarga mos hafta kunini chiqazing
// let haftaKunlari = function(hafta){
//     if(hafta == 1){
//         console.log("dushanba")
//     }else if(hafta == 2){
//         console.log("seshanba")
//     }else if(hafta == 3){
//         console.log("chorshanba")
//     }else if(hafta == 4){
//         console.log("payshanba")
//     }else if(hafta == 5){
//         console.log("juma")
//     }else if(hafta == 6){
//         console.log("shanba")
//     }else if(hafta == 7){
//         console.log("bazor")
//     }else{
//         console.log("bunaqa kun yuq")
//     }
// }
// haftaKunlari(1)
// haftaKunlari(2)
// haftaKunlari(3)
// haftaKunlari(4)
// haftaKunlari(5)
// haftaKunlari(6)
// haftaKunlari(7)
// haftaKunlari(8)

// function grade(str, num){
//     if(str.length < num){
//         let result = num / str.length
//         console.log(`code.length = ${str.length} 10 / 4 qoldigi ${Math.floor(result)}`)
//     }
//     else if(num % 2 === 0){
//         console.log(str.substr(0, num).repeat(num))
//     }else{
//         console.log(str.substr(str.length -num).repeat(num))
//     }
    
    
// }
// grade("webbrain", 2)
// grade("webbrain", 3)
// grade("code", 10)


// for(let s = 1; s <= 9; s+=2){
//     console.log(" ".repeat((9-s) / 2) + "*".repeat(s))
// }

// let star = 1;

// while(star <= 9){
//     console.log(" ".repeat((9-star) / 2) + "*".repeat(star))
//     star +=2
// }

// var star = '';
// for (var i = 0; i < 5; i++) {
//     for (var j = 4; j > i; j--) {
//         star += ' ';
//     }
//     for (var k = 0; k <= (i * 2); k++) {
//         star += '*';
//     }
//     star += '-\n';
// }
// console.log(star);

// for(let i = 1; i <= 6; i+= 2){
//     console.log('1'.repeat((6 - i)/2), "*".repeat(i))
// }

function kattaharif(ism){
    return ism[0].toUpperCase() + ism.slice(1);
    
}
console.log(kattaharif("husan"))
console.log(kattaharif("ali"))
console.log(kattaharif("vali"))



function teskari(suz){
    
    return suz.split('').reverse().join('')
}
console.log(teskari("husan"))