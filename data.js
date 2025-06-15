// "data" @by datasculptor - direct sample loading
const base = 'https://raw.githubusercontent.com/Grossculptor/mus_data/main/data/'
await samples({
  data: base + 'data.wav',
  data_1: base + 'data_1.wav',
  data_2: base + 'data_2.wav',
  data_3: base + 'data_3.wav',
  data_4: base + 'data_4.wav',
  data_5: base + 'data_5.wav'
})

setcps(.03)
let chords = chord("<Bbm9 Fm9>/4").dict('ireal')
stack(
  stack( // DRUMS - using available samples
    s("data <data data data data>").struct("<[x*<1 2> [~@3 x]] x>"),
    s("~ [data, data:<2 3>]").room("<0 .2>"),
    n("[0 <1 3>]*<2!3 4>").s("data"),
    s("data:<1!3 2>*2").mask("<0 0 1 1>/16").gain(.8)._scope()
    
  )
  .mask("<[0 1] 1 1 1>/16".early(.5))
  , // CHORDS
  chords.offset(-1).voicing().s("data_2")
  .phaser(4).room(.5)
  , // MELODY
  n("<0!3 1*2>").set(chords).mode("root:g2")
  .voicing().s("data_3"),
  chords.n("[0 <4 3 <2 5>>*2](<3 5>,8)")
  .anchor("D5").voicing()
  .segment(4).clip(rand.range(.4,.8))
  .room(.75).shape(.3).delay(.25)
  .fm(sine.range(3,8).slow(3))
  .lpf(sine.range(500,1000).slow(8)).lpq(5)
  .rarely(ply("2")).chunk(4, fast(2))
  .gain(perlin.range(.6, .9))
  .mask("<0 1 1 0>/16")
  .s("data_3")._scope()
)
.late("[0 .01]*4").late("[0 .01]*2").size(4)
