radio.onReceivedString(function (receivedString) {
    seconds = 0
    basic.showString(receivedString)
})
let seconds = 0
radio.setGroup(1)
seconds = 0
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, input.lightLevel() / 256 * 180)
})
basic.forever(function () {
    basic.pause(1000)
    seconds += 1
    if (seconds > 10) {
        soundExpression.giggle.playUntilDone()
        seconds = 0
    }
})
