radio.onReceivedNumber(function (receivedNumber) {
    seconds = 0
    basic.showNumber(receivedNumber)
})
let seconds = 0
radio.setGroup(1)
seconds = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, input.lightLevel() / 256 * 180)
})
basic.forever(function () {
    basic.pause(1000)
    seconds += 1
    if (seconds > 60) {
        soundExpression.giggle.playUntilDone()
        basic.showIcon(IconNames.Sad)
        seconds = 0
    }
})
