/**
 * Gives the remaining time for the received event to happen from the current time.
 */
upcomingTime = (date, eventName) => {

    let timestamp = new Date(date).getTime() - new Date().getTime()

    let readableTimestamps = [{
            name: 'week ',
            value: 1000 * 60 * 60 * 24 * 7
        },

        {
            name: 'day ',
            value: 1000 * 60 * 60 * 24
        },

        {
            name: 'hour ',
            value: 1000 * 60 * 60
        },

        {
            name: 'minute ',
            value: 1000 * 60
        },

        {
            name: 'second ',
            value: 1000
        },
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
upcomingTime()