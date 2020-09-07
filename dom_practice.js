//🔵 Get the element with the id you assigned and save it to a variable . Console.log that variable.
let container = document.querySelector('#pic');
console.log(container);
// 🔵 Get the h2 element and save it to a variable h2. Console.log that variable.
let h2 = document.querySelector('h2');
console.log(h2);
// 🔵 Using JavaScript, change the innerText of your h2 to have 3 exclamation points at the end
h2.innerText = 'Welcome to Temple!!!';
// 🔵 Get all of the elements with the class you assigned and save them to a variable. Console.log that variable.
let titles = document.getElementsByClassName('titles');
console.log(titles);
// 🔵 Change the style/color of the text of your ONE of your li elements to your favorite html color
let li = document.getElementsByTagName('li');
li[0].style.color = 'blue';
// 🔵 Change the innerText of one of your list items to 'Jamboree sandwich at the Jambo-ree'
li[1].innerText = 'Jamboree sandwich at the Jambo-ree';
// Create an element and append it
// 🔵 Create a new img element using document.createElement()
const newImg = document.createElement('IMG');
// 🔵 Add an attribute for the source url of your new image using .setAttribute()
newImg.setAttribute('src', './ga.jpeg');
console.log(newImg);
// 🔵 Append it to your page, somewhere, using .appendChild()
document.querySelector('body').appendChild(newImg);
// 🔵 Check that your image has appeared

// Remove an element:
// 🔵 Select any element using querySelector and save it to a variable

// 🔵 and remove it from your page using .remove()