// "data_3" @by datasculptor - Strudel feature showcase
const base = 'https://raw.githubusercontent.com/Grossculptor/mus_data/main/data/'
await samples({
  data: base + 'data.wav',
  data_1: base + 'data_1.wav',
  data_2: base + 'data_2.wav',
  data_3: base + 'data_3.wav',
  data_4: base + 'data_4.wav',
  data_5: base + 'data_5.wav'
})

setcps(.5)
let chords = chord("<Bbm9 Fm9 Eb^7>/4").dict('ireal')
stack(
  stack(
    s("data <data_1 data_2 data_3>").struct("<[x*<1 2> [~@3 x]] x>").gain(.9),
    n("[0 <1 3>]*<2!3 4>").s("data_5"),
    s("data_4:<1!3 2>*2").mask("<0 0 1 1>/16").gain(.5)
  ).mask("<[0 1] 1 1 1>/16".early(.5)).ply("<1 2>").off(1/16, x=>x.rev())._scope(),
  chords.voicing().s("data_2")
  .phaser(4).room(.5)
  .lpf(sine.range(400,800).slow(16)).lpq(5).lpenv(sine.mul(4).slow(4))
  .ftype('24db'),
  n("<0!3 1*2>").set(chords).mode("root:g2")
  .voicing().s("data_3")
  .segment(4).clip(rand.range(.4,.8))
  .room(.75).shape(.3).delay(.25)
  .fm(sine.range(3,8).slow(3))
  .lpf(sine.range(500,1000).slow(8)).lpq(5)
  .rarely(ply("2")).chunk(4, fast(2))
  .gain(perlin.range(.6, .9))
  .mask("<0 1 1 0>/16")
  .superimpose(x=>x.add(note(12)).delay(.5).bpf(1000))
  .spiral()
)
.late("[0 .01]*4").late("[0 .01]*2").size(4)
