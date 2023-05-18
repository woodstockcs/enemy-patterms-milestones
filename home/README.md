## 00: files

## 01: draw canvas
- start @ 1:25:33 => [link](https://youtu.be/GFO_txvwK_c?t=85m33s)
- end @ 1:27:47 => [link](https://youtu.be/GFO_txvwK_c?t=87m47s)
- demo => [link](https://woodstockcs.github.io/enemy-patterns/milestone-01/)
- code => [link](https://github.com/woodstockcs/enemy-patterns/tree/main/milestone-01)

![100 black squares in random positions](wcs-em-01.png)

## 02: draw enemy
- start @ 1:27:47 => [link](https://youtu.be/GFO_txvwK_c?t=87m47s)
- end @ 1:30:26 => [link](https://youtu.be/GFO_txvwK_c?t=90m26s)
- demo => [link](https://woodstockcs.github.io/enemy-patterns/milestone-02/)
- code => [link](https://github.com/woodstockcs/enemy-patterns/tree/main/milestone-02)

![one black square](wcs-em-02.png)

## 03: animate enemy
- start @ 1:30:26 => [link](https://youtu.be/GFO_txvwK_c?t=90m26s)
- end @ 1:31:26 => [link](https://youtu.be/GFO_txvwK_c?t=91m26s)
- demo => [link](https://woodstockcs.github.io/enemy-patterns/milestone-03/)
- code => [link](https://github.com/woodstockcs/enemy-patterns/tree/main/milestone-03)

![one black square, moving](wcs-em-03.png)

## 04: animate two enemies
- start @ 1:31:26 => [link](https://youtu.be/GFO_txvwK_c?t=91m26s)
- end @ 1:34:17 => [link](https://youtu.be/GFO_txvwK_c?t=94m17s)
- demo => [link](https://woodstockcs.github.io/enemy-patterns/milestone-04/)
- code => [link](https://github.com/woodstockcs/enemy-patterns/tree/main/milestone-04)

![two black squares, moving](wcs-em-04.png)

## 05: create enemy class
- start @ 1:34:17 => [link](https://youtu.be/GFO_txvwK_c?t=94m17s)
- end @ 1:36:10 => [link](https://youtu.be/GFO_txvwK_c?t=96m10s)
- demo => [link](https://woodstockcs.github.io/enemy-patterns/milestone-05/)
- TODO: code => [link](https://github.com/woodstockcs/enemy-patterns/tree/main/milestone-05)

![one black square, moving](wcs-em-05.png)

## 06: animate 100 shapes
- start @ 1:36:10 => [link](https://youtu.be/GFO_txvwK_c?t=96m10s)
- end @ 1:40:50 => [link](https://youtu.be/GFO_txvwK_c?t=100m50s)
- demo => [link](https://woodstockcs.github.io/enemy-patterns/milestone-06/)
- code => [link](https://github.com/woodstockcs/enemy-patterns/tree/main/milestone-06)

![100 black squares, moving](https://github.com/woodstockcs/enemy-patterns/assets/7727226/0bd425d6-10e1-4132-9409-db0379ad862c)

## 07: show sprite
- start @ 1:40:50 => [link](https://youtu.be/GFO_txvwK_c?t=100m50s)
- end @ 1:46:07 => [link](https://youtu.be/GFO_txvwK_c?t=106m07s)
- demo => [link](https://woodstockcs.github.io/enemy-patterns/milestone-06/)
- code => [link](https://github.com/woodstockcs/enemy-patterns/tree/main/milestone-06)

![100 black bat images, moving](https://github.com/woodstockcs/enemy-patterns/assets/7727226/d817c62c-9ca8-45d8-a716-8985c7597e7d)



## 08: animate sprite

## procedure
#### create animated gif
1. on chromebook, ctrl+shift+boxBarBar to record video of part of screen. it's saved as webm.
2. generate palette with `ffmpeg -y -i FILENAME.webm -vf palettegen palette.png`
3. convert with `ffmpeg -y -i FILENAME.webm -i palette.png -filter_complex paletteuse -r 10 FILENAME_TMP.gif`
4. optimize and resize with `gifsicle -O3 FILENAME_TMP.gif --resize-width 150 -o FILENAME.gif`
