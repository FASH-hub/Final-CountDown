import { upcomingTime } from "./timeSetting";

/**
 * Picks the event name and the its date.
 * It stores it in the localStorage
 * It displays the event and the remaining time until the event happens
 */
export let eventChoice = () => {

    let storedEvents = JSON.parse(localStorage.getItem('events'))
    if (!storedEvents) {
        storedEvents = [];
    } else {

        let eventName = document.querySelector('#eventName')
        let eventDate = document.querySelector('#date')
        let button = document.querySelector('button')

        button.addEventListener('click', function() {
            let event = {
                name: eventName.value,
                date: eventDate.value
            }

            storedEvents.push(event);
            localStorage.setItem('events', JSON.stringify(storedEvents))
            console.log(storedEvents)


            let p = document.createElement('p')
            let display = upcomingTime(event.date, event.name)

            p.innerText = display;
            main.appendChild(p)

        })
    }
}