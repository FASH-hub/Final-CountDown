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


upcomingTime = (date, eventName) => {

    let timestamp = new Date(date).getTime() - new Date().getTime()

    let readableTimestamps = [{
            name: 'week',
            value: 1000 * 60 * 60 * 24 * 7
        },

        {
            name: 'day',
            value: 1000 * 60 * 60 * 24
        },

        {
            name: 'hour',
            value: 1000 * 60 * 60
        },

        // {
        //     name: 'minute',
        //     value: 1000 * 60
        // },

        // {
        //     name: 'second',
        //     value: 1000
        // },
    ]

    let display = '';

    for (const readableTimestamp of readableTimestamps) {
        if (timestamp > readableTimestamp.value) {
            let result = Math.floor(timestamp / readableTimestamp.value)
            timestamp -= result * readableTimestamp.value
            display += result + ' ' + readableTimestamp.name

            if (result > 1) {
                display += 's'
                display += ' '
            }

        }
    }
    return display + ' until ' + eventName;
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


            let p = document.createElement('p')
            let timeStamp = new Date(event.date).getTime() - new Date().getTime();
            console.log(timeStamp)
            let display = upcomingTime(event.date, event.name)

            p.innerText = display;
            main.appendChild(p)

        })
    }
}

createEventName();
createEventDate();
createBtn();
eventChoice();