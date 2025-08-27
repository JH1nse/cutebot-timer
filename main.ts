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
// Als de finish behaald is dan wordt de behaalde tijd weergegeven in de output.
// 
// Er wordt gecheckt of de speler de finish op een onmogelijke tijd heeft gehaald, als dit waar is dan wordt er gemeld dat het valsspelen is en wordt de eindtijd met willekeurig 1 minuut tot 10 minuten verhoogd en worden er een heleboel decimalen bij de minuten toegevoegd (dat is de straf)
// 
// Als laatste wordt de valsspeel variabel gezet op 1 (waar) voor 5 seconden, daarna wordt het 0 (onwaar)
// 
// ((dat laatste is onnodig eigenlijk))
radio.onReceivedMessage(RadioMessage.Checkpoint3Behaald, function () {
    serial.writeLine("Gefinished op " + Sec + " seconden en " + ("" + Min + " minuten."))
    if (onmogelijke_tijd == 1) {
        serial.writeLine("DAT WAS GEEN EERLIJKE FINISH")
        basic.pause(2000)
        serial.writeLine("VALSSPELER")
        basic.pause(500)
        serial.writeLine("VALSSPELER")
        basic.pause(500)
        serial.writeLine("VALSSPELER")
        Min += randint(0.9, 10.1)
        serial.writeLine("EIGENLIJK GEFINISHED OP  " + Sec + " seconden en " + ("" + Min + " minuten."))
        basic.pause(2000)
        serial.writeLine("HA")
    }
    onmogelijke_tijd = 1
    basic.pause(5000)
    onmogelijke_tijd = 0
})
radio.onReceivedMessage(RadioMessage.rechts, function () {
    if (gestart == 0) {
        serial.writeLine("Tijd gestart")
        onmogelijke_tijd = 1
        Min = 0
        Sec = 0
        gestart = 1
        for (let index = 0; index < 5; index++) {
            basic.pause(1000)
            Sec += 1
            if (Sec == 60) {
                Sec = 0
                Min += 1
            }
        }
        onmogelijke_tijd = 0
        for (let index = 0; index < 99999999999999; index++) {
            basic.pause(1000)
            Sec += 1
            if (Sec == 60) {
                Sec = 0
                Min += 1
            }
        }
    }
})
// Als checkpoint 1 behaald is dan wordt de behaalde tijd weergegeven in de output.
// 
// Er wordt gecheckt of de speler de checkpoint op een onmogelijke tijd heeft gehaald, als dit waar is dan wordt er gemeld dat het valsspelen is en wordt de tijd met willekeurig 1 minuut tot 10 minuten verhoogd en worden er een heleboel decimalen bij de minuten toegevoegd (dat is de straf)
// 
// Als laatste wordt de valsspeel variabel gezet op 1 (waar) voor 5 seconden, daarna wordt het 0 (onwaar)
radio.onReceivedMessage(RadioMessage.Checkpoint1Behaald, function () {
    serial.writeLine("Checkpoint 1 is behaald op " + Sec + " seconden en " + ("" + Min + " minuten."))
    if (onmogelijke_tijd == 1) {
        serial.writeLine("MAAR DAT KAN NIET")
        basic.pause(2000)
        serial.writeLine("VALSSPELER")
        basic.pause(500)
        serial.writeLine("VALSSPELER")
        basic.pause(500)
        serial.writeLine("VALSSPELER")
        Min += randint(0.9, 10.1)
        serial.writeLine("Checkpoint 1 TIJD IS VERANDERD NAAR " + Sec + " seconden en " + ("" + Min + " minuten."))
    }
    onmogelijke_tijd = 1
    basic.pause(5000)
    onmogelijke_tijd = 0
})
// Als checkpoint 2 behaald is dan wordt de behaalde tijd weergegeven in de output.
// 
// Er wordt gecheckt of de speler de checkpoint op een onmogelijke tijd heeft gehaald, als dit waar is dan wordt er gemeld dat het valsspelen is en wordt de tijd met willekeurig 1 minuut tot 10 minuten verhoogd en worden er een heleboel decimalen bij de minuten toegevoegd (dat is de straf)
// 
// Als laatste wordt de valsspeel variabel gezet op 1 (waar) voor 5 seconden, daarna wordt het 0 (onwaar)
radio.onReceivedMessage(RadioMessage.Checkpoint2Behaald, function () {
    serial.writeLine("Checkpoint 2 is behaald op " + Sec + " seconden en " + ("" + Min + " minuten."))
    if (onmogelijke_tijd == 1) {
        serial.writeLine("MAAR DAT KAN NIET")
        basic.pause(2000)
        serial.writeLine("VALSSPELER")
        basic.pause(500)
        serial.writeLine("VALSSPELER")
        basic.pause(500)
    }
    onmogelijke_tijd = 1
    basic.pause(5000)
    onmogelijke_tijd = 0
})
radio.onReceivedMessage(RadioMessage.vooruit, function () {
    if (gestart == 0) {
        serial.writeLine("Tijd gestart")
        onmogelijke_tijd = 1
        Min = 0
        Sec = 0
        gestart = 1
        for (let index = 0; index < 5; index++) {
            basic.pause(1000)
            Sec += 1
            if (Sec == 60) {
                Sec = 0
                Min += 1
            }
        }
        onmogelijke_tijd = 0
        for (let index = 0; index < 99999999999999; index++) {
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
        serial.writeLine("Tijd gestart")
        onmogelijke_tijd = 1
        Min = 0
        Sec = 0
        gestart = 1
        for (let index = 0; index < 5; index++) {
            basic.pause(1000)
            Sec += 1
            if (Sec == 60) {
                Sec = 0
                Min += 1
            }
        }
        onmogelijke_tijd = 0
        for (let index = 0; index < 99999999999999; index++) {
            basic.pause(1000)
            Sec += 1
            if (Sec == 60) {
                Sec = 0
                Min += 1
            }
        }
    }
})
/**
 * Deze zorgen ervoor dat de tijd start als de auto begint te bewegen.
 * 
 * De tijd wordt gereset, gestart en een variabel die valspelen voorkomt wordt aangezet.
 * 
 * Na 5 seconden wordt deze valsspeel variabel uitgezet en dan telt de tijd door elke seconde en als er 60 seconden zijn wordt dit veranderd in een minuut
 */
radio.onReceivedMessage(RadioMessage.achteruit, function () {
    if (gestart == 0) {
        serial.writeLine("Tijd gestart")
        onmogelijke_tijd = 1
        Min = 0
        Sec = 0
        gestart = 1
        for (let index = 0; index < 5; index++) {
            basic.pause(1000)
            Sec += 1
            if (Sec == 60) {
                Sec = 0
                Min += 1
            }
        }
        onmogelijke_tijd = 0
        for (let index = 0; index < 99999999999999; index++) {
            basic.pause(1000)
            Sec += 1
            if (Sec == 60) {
                Sec = 0
                Min += 1
            }
        }
    }
})
// Dit reset variabelen en zet de radio op channel 35
// 
// Daarna speelt het oneindig lang een klok animatie
// 
// (Ik had de "Wissel x0 y0" blok kunnen gebruiken hier maar ik kwam daar te laat achter, dus eerst doet het lichtjes aan en daarna doet het ze een voor een weer uit)
let Min = 0
let Sec = 0
let onmogelijke_tijd = 0
let gestart = 0
led.plot(2, 2)
gestart = 0
onmogelijke_tijd = 1
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
