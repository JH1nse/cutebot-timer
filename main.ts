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
radio.onReceivedMessage(RadioMessage.Checkpoint1Behaald, function () {
    serial.writeLine("Checkpoint 1 is behaald op " + Sec + " seconden en " + ("" + Min + " minuten."))
})
radio.onReceivedMessage(RadioMessage.StartTijd, function () {
	
})
let Min = 0
let Sec = 0
radio.setGroup(35)
for (let index = 0; index < 9999999999; index++) {
    serial.writeValue("Secondes", Sec)
    serial.writeValue("Minuten", Min)
    basic.pause(1000)
    Sec += 1
}
basic.forever(function () {
    if (Sec == 60) {
        Sec = 0
        Min += 1
    }
})
