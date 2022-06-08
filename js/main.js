alert('Keep in mind this story will be about a dog.');
const adj = prompt('Please put an adjective.');
const vrb = prompt('Please put a verb.');
const noun = prompt('Please put a noun');

const sentence = `<h2 style="color: white; text-align: center; padding: 45vh 20vw 0px 20vw; ">There once was a ${adj} dog who wanted to ${vrb} to the ${noun}.</h2>`;

document.querySelector('main').innerHTML = sentence ;