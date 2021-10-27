const form = document.createElement('form')
let main = document.querySelector('main')
const events = [{
        name: '',
        date: ''
    }]
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
createBtn = () => {
    let button = document.createElement('button')
    button.innerHTML = 'Display'
    main.appendChild(button)
}

/**
 * Displays the picked event in the form.
 * It also stores the picked event in local storage
 */
eventChoice = () => {

    let eventName = document.querySelector('#eventName')
    let eventDate = document.querySelector('#date')
    let button = document.querySelector('button')

    button.addEventListener('click', function() {
        let event = {
            name: eventName.value,
            date: eventDate.value
        }
        let p = document.createElement('p')
        p.innerText = event.name + ' ' + ' will be on ' + event.date
        main.appendChild(p)
        storeEvent(JSON.stringify(event))

    })
}


/**
 * Store the picked event in local storage
 */
let pickedEvent = {};
storeEvent = (pickedEvent) => {
    window.localStorage.setItem('event', pickedEvent);
}
checkStore = () => {
    if (!window.localStorage.getItem('event')) {
        storeEvent();
    }
}

createEventName();
createEventDate();
createBtn();
eventChoice();