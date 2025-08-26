enum RadioMessage {
    StartTijd = 340,
    Finish = 5694,
    Checkpoint3Behaald = 11045,
    rechtdoor = 12848,
    Checkpoint4Behaald = 14638,
    Checkpoint2Behaald = 24361,
    Checkpoint1 = 25201,
    links = 30556,
    Checkpoint2 = 32327,
    rechts = 39515,
    achteruit = 43484,
    vooruit = 44692,
    message1 = 49434,
    Checkpoint4 = 53120,
    Start = 56380,
    Checkpoint1Behaald = 56413,
    rem = 58635,
    Checkpoint3 = 63779
}
input.onButtonPressed(Button.A, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
radio.onReceivedMessage(RadioMessage.rechts, function () {
    if (gestart == 0) {
        Min = 0
        Sec = 0
        gestart = 1
        for (let index = 0; index < 10000000000000000; index++) {
            basic.pause(1000)
            Sec += 1
            if (Sec == 60) {
                Sec = 0
                Min += 1
            }
        }
    }
})
radio.onReceivedMessage(RadioMessage.Checkpoint1Behaald, function () {
    serial.writeLine("Checkpoint 1 is behaald op " + Sec + " seconden en " + ("" + Min + " minuten."))
})
radio.onReceivedMessage(RadioMessage.vooruit, function () {
    if (gestart == 0) {
        Min = 0
        Sec = 0
        gestart = 1
        for (let index = 0; index < 10000000000000000; index++) {
            basic.pause(1000)
            Sec += 1
            if (Sec == 60) {
                Sec = 0
                Min += 1
            }
        }
    }
})
radio.onReceivedMessage(RadioMessage.links, function () {
    if (gestart == 0) {
        Min = 0
        Sec = 0
        gestart = 1
        for (let index = 0; index < 10000000000000000; index++) {
            basic.pause(1000)
            Sec += 1
            if (Sec == 60) {
                Sec = 0
                Min += 1
            }
        }
    }
})
radio.onReceivedMessage(RadioMessage.achteruit, function () {
    if (gestart == 0) {
        Min = 0
        Sec = 0
        gestart = 1
        for (let index = 0; index < 10000000000000000; index++) {
            basic.pause(1000)
            Sec += 1
            if (Sec == 60) {
                Sec = 0
                Min += 1
            }
        }
    }
})
radio.onReceivedMessage(RadioMessage.StartTijd, function () {
	
})
let Sec = 0
let Min = 0
let gestart = 0
led.plot(2, 2)
gestart = 0
radio.setGroup(35)
for (let index = 0; index < 10000000000000000; index++) {
    led.plot(2, 0)
    basic.pause(200)
    led.plot(3, 0)
    basic.pause(200)
    led.plot(4, 1)
    basic.pause(200)
    led.plot(4, 2)
    basic.pause(200)
    led.plot(4, 3)
    basic.pause(200)
    led.plot(3, 4)
    basic.pause(200)
    led.plot(2, 4)
    basic.pause(200)
    led.plot(1, 4)
    basic.pause(200)
    led.plot(0, 3)
    basic.pause(200)
    led.plot(0, 2)
    basic.pause(200)
    led.plot(0, 1)
    basic.pause(200)
    led.plot(1, 0)
    basic.pause(200)
    led.unplot(2, 0)
    basic.pause(200)
    led.unplot(3, 0)
    basic.pause(200)
    led.unplot(4, 1)
    basic.pause(200)
    led.unplot(4, 2)
    basic.pause(200)
    led.unplot(4, 3)
    basic.pause(200)
    led.unplot(3, 4)
    basic.pause(200)
    led.unplot(2, 4)
    basic.pause(200)
    led.unplot(1, 4)
    basic.pause(200)
    led.unplot(0, 3)
    basic.pause(200)
    led.unplot(0, 2)
    basic.pause(200)
    led.unplot(0, 1)
    basic.pause(200)
    led.unplot(1, 0)
    basic.pause(200)
}
