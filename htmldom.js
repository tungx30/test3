//  let heading2 = document.getElementById('heading');
//  let heading3 = document.getElementsByTagName('heading-class');
//  let heading4 = document.querySelector('h1');
// // console.log(heading2);
// console.log(heading3);
// // console.log({
// //     Element: heading2,
// // })

let heading =document.querySelector('.heading-class');
let heading2 =document.querySelector('.box');
let heading3 =document.querySelector('.nhapNhay');
console.log(heading.classList.contains('heading-class'));  
heading.classList.add('doimau');
heading2.classList.add('doimau');
setTimeout(function hengio(){
    heading2.classList.remove('doimau');
},3000)
setInterval(function hengio2(){ 
    heading3.classList.toggle('doimau');
},1000)


