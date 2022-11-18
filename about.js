console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form submitted successfully.')
}


let form = document.querySelector('#contact');
let catImg = document.querySelector('#cat-img');

form.addEventListener('submit', handleSubmit);
catImg.addEventListener('mouseover', ()=> alert("You're awesome!"))