let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18){
    greeting = 'Dobry wieczór!';
} else if (hourNow > 12){
    greeting = 'Dzień dobry!';
} else if (hourNow > 0){
    greeting = 'Dzień dobry!';
} else {
    greeting = 'Witamy!';
}
document.write('<h3>' + greeting + '</h3>');







