function beforesubmit(){
let outputdate = document.querySelector('.outputdate');
let inputdate = document.querySelector('.inputdate');
console.log(typeof inputdate.value) // string
let formateddate = new Date(inputdate.value).toLocaleDateString("en-IN") // users locale is en_US we need to use en-US - WILL REPLACE _
outputdate.value = formateddate;
console.log(outputdate)
}