// "data_1" @by datasculptor - direct sample loading
const base = 'https://raw.githubusercontent.com/Grossculptor/mus_data/main/data/'
await samples({
  data: base + 'data.wav',
  data_1: base + 'data_1.wav',
  data_2: base + 'data_2.wav',
  data_3: base + 'data_3.wav',
  data_4: base + 'data_4.wav',
  data_5: base + 'data_5.wav'
})

//"Industrial for Elise Pattern" @by Chicca
stack(
// Harter Industrial Kick
s("bd ~ ~ ~").gain(1.5).distort(0.8).cutoff(120),
// Industrial Für Elise (verzerrt und aggressiv)
note("e3 d#3 e3 d#3")
.s("akaimpc60")
.cutoff(300)
.distort(0.7)
.gain(0.8)
.room(0.1),
// Aggressive Industrial Bass
note("c1 ~ c2 ~ c1 c2 ~ c1")
.s("bossdr110")
.cutoff(200)
.distort(0.9)
.gain(1.0),
// Metallische Percussion
s("~ [alesissr16:1 data_1:2] ~ bossdr550:3")
.gain(0.7).distort(0.6).room(0.05)
)
