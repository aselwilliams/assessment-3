const randomRestoBtn = document.querySelector('#random-resto');
const mainEl = document.querySelector('main')

const randomPick = () => {
    let restoArr = [
        "Dickey's Barbecue Pit", "Dalrock Diner", "Opa Greek Taverna","Valentino's", "Napoli's", "Zuko Pizza Pasta", "Golden Pot", "Sammy Lou's Home Cooking & BBQ", "El Centro Mexican Restaurant", "Lakewood Cafe", "Shiny Wok", "Main Street Deli", "Mijas Taqueria", "Spice Village"]
    let content = restoArr[Math.floor(Math.random()*restoArr.length)]
   
    let heading = document.createElement('h3')
    heading.textContent = content;
    mainEl.appendChild(heading)
}
randomRestoBtn.addEventListener('click', randomPick)