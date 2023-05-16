basic.clearScreen()
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(10)
    serial.writeValue("temperature = ",pins.analogReadPin(AnalogPin.P0))
})
