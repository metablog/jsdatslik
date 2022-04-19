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
const mySentence = "freeCodeCamp is an awesome resource"; 
const words = mySentence.split(" "); 
for (let i = 0; i < words.length; i++) { 
    words[i] = words[i][0].toUpperCase() + words[i].substr(1); 
  
    
}
let a =  words.join(" ")
console.log(words)
console.log(a)
const b = 
`##########
##      ##
# #    # #
#  #  #  #
#   ##   #
#   ##   #
#  #  #  #
# #    # #
##      ##
##########
 `;
 console.log(b)