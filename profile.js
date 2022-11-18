const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');

const giveColor = () => {
    alert('My favorite color is yellow')
}
const givePlace = () => {
    alert("My favorite place is the house I grew up in.")
}
const giveRitual = () => {
    alert('My favorite ritual is taking morning walks.')
}
colorBtn.addEventListener('click', giveColor);
placeBtn.addEventListener('click', givePlace);
ritualBtn.addEventListener('click', giveRitual);
