function pin () {
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
}
pins.digitalWritePin(DigitalPin.P0, 1)
music.setVolume(255)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        serial.writeValue("x", 0)
    } else {
        serial.writeValue("x", 1)
        pin()
    }
})
