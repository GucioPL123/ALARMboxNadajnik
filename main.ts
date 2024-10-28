input.onButtonPressed(Button.A, function () {
    Sounds_ONOFF = false
})
function pin () {
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
}
input.onButtonPressed(Button.B, function () {
    Sounds_ONOFF = true
})
let Sounds_ONOFF = false
pins.digitalWritePin(DigitalPin.P0, 1)
music.setVolume(255)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        music.stopAllSounds()
    } else if (Sounds_ONOFF == false) {
        pin()
        radio.sendNumber(1)
    }
})
