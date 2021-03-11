input.onButtonPressed(Button.A, function () {
    while (true) {
        degrees = input.compassHeading()
        if (degrees < 45 || degrees >= 315) {
            basic.showString("N")
        } else if (degrees < 135) {
            basic.showString("E")
        } else if (degrees < 225) {
            basic.showString("S")
        } else {
            basic.showString("W")
        }
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
    }
})
input.onButtonPressed(Button.B, function () {
    tempt = input.temperature()
    basic.clearScreen()
    basic.showString("" + (tempt))
    basic.pause(500)
    basic.showIcon(IconNames.Yes)
})
let tempt = 0
let degrees = 0
basic.showString("PRESS A/B")