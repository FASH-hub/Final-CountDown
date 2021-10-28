const form = document.createElement('form')
let main = document.querySelector('main')

/**
 * Fills the event name in the form
 */
export let createEventName = () => {

        let input = document.createElement('input')
        input.id = 'eventName'
        input.type = 'text'
        form.appendChild(input);

    }
    /**
     * Fills the dates in the form
     */
export let createEventDate = () => {

        let inputDate = document.createElement('input')
        inputDate.id = 'date'
        inputDate.type = 'datetime-local'
        form.appendChild(inputDate);
        main.appendChild(form)

    }
    /**
     * Creates the display and store button
     */
export let createBtn = () => {
    let button = document.createElement('button')
    button.innerHTML = 'Display'
    main.appendChild(button)

}
createEventName();
createEventDate();
createBtn();