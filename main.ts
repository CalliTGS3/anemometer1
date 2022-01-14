let tm = TM1637.create(
DigitalPin.C16,
DigitalPin.C17,
7,
4
)
let Spannung = 0
basic.forever(function () {
    Spannung = pins.analogReadPin(AnalogPin.C4)
    tm.showNumber(Math.map(Spannung, 0, 1023, 0, 3000))
    basic.pause(500)
})
