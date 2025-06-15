// "data_2" @by datasculptor - extended feature demo
const base = 'https://raw.githubusercontent.com/Grossculptor/mus_data/main/data/';
await samples({
  data: base + 'data.wav',
  data_1: base + 'data_1.wav',
  data_2: base + 'data_2.wav',
  data_3: base + 'data_3.wav',
  data_4: base + 'data_4.wav',
  data_5: base + 'data_5.wav'
});

setcps(.5);
let chords = chord("<Bbm9 Fm9>/4").dict('ireal');

stack(
  stack( // DRUMS using sample wav files
    s("data <data_4 data_5>")
      .struct("<[x*<1 2> [~@3 x]] x>")
      .ply("<1 2 3>")
      .mask("<0 0 1 1>/16")
      .gain("[.5 1]*4"),
    s("~ [data_1,data_2:<2 3>]")
      .room("<0 .2>")
      .pan("<0 1>")
      .delay(.25),
    n("[0 <1 3>]*<2!3 4>")
      .s("data_3")
      .off(1/16, x => x.add(2).gain(.5))
      .speed("<1 2>")
  )
  .mask("<[0 1] 1 1 1>/16".early(.5)),
  // CHORDS with filtering and FM
  chords.offset(-1)
    .voicing()
    .s("data")
    .lpf(sine.range(500,2000).slow(4))
    .fm(sine.range(3,8)),
  // Melody with vowel filter and stereo tricks
  n("<0!3 1*2>")
    .set(chords)
    .mode("root:g2")
    .voicing()
    .s("data_2")
    .vowel("<a e i o>")
    .jux(rev)
    .add("<0 1>")
    .gain(perlin.range(.6,.9))
    .pan(sine.range(-1,1).slow(2)),
  // Additional arpeggio line
  chords.n("[0 <4 3 <2 5>>*2](<3 5>,8)")
    .anchor("D5")
    .voicing()
    .segment(4)
    .clip(rand.range(.4,.8))
    .room(.75)
    .shape(.3)
    .delay(.25)
    .lpf(sine.range(500,1000).slow(8))
    .lpq(5)
    .rarely(ply('2'))
    .chunk(4, fast(2))
    .mask("<0 1 1 0>/16")
    .s("data_3")
);
