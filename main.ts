radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        seconds = 0
        steps += 2
        basic.showNumber(steps)
    }
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
    basic.showNumber(steps)
})
let steps = 0
let seconds = 0
radio.setGroup(1)
seconds = 0
steps = 0
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
