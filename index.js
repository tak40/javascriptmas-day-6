/** @format */

const people = ['Alice', 'Bob', 'Carly', 'Dan', 'Ed', 'Ferdinand', 'Ginny']

function generateSecretSantaPairs(arr) {
    let result = {}
    let givers = [...arr]
    let receivers = [...arr]

    for (let i = 0; i < arr.length; i++) {
        let giver = givers[i]
        let receiverIndex = Math.floor(Math.random() * receivers.length)
        let receiver = receivers[receiverIndex]

        // Ensure that a person doesn't get themselves
        while (giver === receiver) {
            receiverIndex = Math.floor(Math.random() * receivers.length)
            receiver = receivers[receiverIndex]
        }

        result[giver] = receiver
        // Remove the chosen receiver from the array
        receivers.splice(receiverIndex, 1)
    }
    return result
}

console.log(generateSecretSantaPairs(people))
