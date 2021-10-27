const form = document.createElement('form')
let main = document.querySelector('main')

/**
 * Fills the event name in the form
 */
createEventName = () => {

        let input = document.createElement('input')
        input.id = 'eventName'
        input.type = 'text'
        form.appendChild(input);

    }
    /**
     * Fills the dates in the form
     */
createEventDate = () => {

        let inputDate = document.createElement('input')
        inputDate.id = 'date'
        inputDate.type = 'datetime-local'
        form.appendChild(inputDate);
        main.appendChild(form)

    }
    /**
     * Creates the display and store button
     */
createBtn = () => {
    let button = document.createElement('button')
    button.innerHTML = 'Display'
    main.appendChild(button)

}


eventChoice = () => {

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
            console.table(storedEvents)

            let p = document.createElement('p')
            p.innerText = event.name + ' ' + ' takes place on ' + event.date
            main.appendChild(p)

        })
    }
}

createEventName();
createEventDate();
createBtn();
eventChoice();