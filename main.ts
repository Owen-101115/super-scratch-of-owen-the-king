let shut_up = 0
input.onButtonPressed(Button.A, function () {
    shut_up = control.deviceSerialNumber()
    led.setDisplayMode(DisplayMode.BlackAndWhite)
    ESP8266_IoT.connectThingSpeak()
    Environment.ledBrightness(AnalogPin.P0, true)
})
