<p align="center">

   <img src="https://github.com/bestape/bestape/blob/master/images/caterpill.svg?raw=true" width="100%">

</p>

# alchemy

## *an animated SVG printer using a* metal-Pythag *engine*

!!! **[TIP JAR](https://github.com/sponsors/bestape)** !!!

### 0. contents

<details>

<summary>contents</summary>

1. [what](#1-what)

2. [use](#2-use)

3. [options](#3-options)

4. [example tiles](#4-example-tiles)

5. [technology](#5-technology)

6. [why](#6-why)

7. [problem & opportunity](#7-problem--opportunity)

8. [how](#8-how)

9. [next](#9-next)

10. [app.js](#10-appjs)

11. [to do](#11-to-do)

12. [license](#12-license)

</details>

### 1. what

<details>

<summary>what</summary>

Create vanishing point cellular automata moving images like the famous Golden Ratio:

<img src="https://github.com/bestape/alchemy/blob/master/images/100by50.svg?raw=true" width="50%" >

These images can be used, among other things, as geometric clock timers or a box of Infinite objects with every object observable from above.

</details>

### 2. use

<details>

<summary>details</summary>

1. Have `node.js` installed on your machine;

2. download the `app.js` and `app.json` files; ensure `app.js` is executable;

3. change the values in `app.json` to your preference;

4. run `./app.js` in your terminal; and

5. enjoy the SVG printout!

</details>

### 3. options

<details>

<summary>options</summary>

Please read `app.js`.

The `app.json` file lists the options.

Change its values to the choices you want then run `app.js` in a terminal with Node.js installed.

| option           | type    | description                              |
| ---------------- | ------- | ---------------------------------------- |
| a                | number  | repeating rectangle's horizontal measure |
| author           | string  | the person who made the program          |
| b2               | number  | repeating rectangle's vertical measure   |
| background       | string  | parent rectangle's colour; can be *null* |
| borderColour     | string  | parent rectangle's border colour         |
| borderSize       | number  | parent rectangle's border size >= 0      |
| cellBorderColour | string  | repeating rectangle's border colour      |
| cellBorderSize   | number  | repeating rectangle's border size >= 0   |
| clickStart       | boolean | **false** = auto start; **true** = manual start  |
| colours          | array   | repeating rectangle's colour sequence    |
| cork             | string  | remainder rectangle included if colour   |
| embed            | boolean | use to copy/paste code into an SVG file  |
| file             | string  | file name and relative path              |
| vertical         | boolean | reapeating rectangle starts vertical     |
| id               | string  | combine with other code; use with embed  |
| images           | array   | repeating images; images[0] = start only |
| lead             | boolean | **false** = each repeat starts from the top  |
| loop             | boolean | animation auto restarts when finished    |
| offset           | object  | use with embed and id to add to SVG file |
| repeat           | number  | number of repeating rectangles >= 1      |
| rotateCenter     | string  | x and y axis parent point of rotation    |
| speed            | string  | the time it takes to move by 1 exponent  |
| viewBoxAdd       | object  | the width and height axis canvas size    |

If you need to calculate a number option:

1. open and edit `app.js`;

2. mute the option in the `App(){ ... }` constructor function with `//`; and

3. write the modified option below the muted option.

Please see the `this.a` option in `App(){ ... }` for an example.

</details>

### 4. example tiles

<details>

<summary>example tiles</summary>

To run the following animations:

1. click on the image, it'll open in a new tab; and

2. within the new tab, click on the repeating rectangle at the top of the parent rectangle.

Vera's [Metallic Means](https://verasmathematicworld.org/) can be SVG printed by `app.js`:

* set the `a` value in `app.json` to 100; and

* set the `b2` value in `app.json` to 100, then 200, then 300 and so on.

As a continuum rather than a natural count, the Metallic Means are SVG printed by `app.js` whenever `a <= b2` ( `a` is less than or equal to `b2` ) in `app.json`.

Here's the first Metallic Mean natural count, the Golden Ratio:

<img src="https://github.com/bestape/alchemy/blob/master/images/goldenRatio.svg?raw=true" width="25%" >

Here's the fifth Metallic Mean natural count:

<img src="https://github.com/bestape/alchemy/blob/master/images/fifth.svg?raw=true" width="25%" >

As `b2` tends toward Infinity, the repeating rectangles quickly become invisible to the naked eye.

Here's the tenth Metallic Mean natural count, with `a = 100; b2 = 1000` in `app.json`:

<img src="https://github.com/bestape/alchemy/blob/master/images/metalTen.svg?raw=true" width="25%" >

However, if `b2 <= a` ( `b2` is less than or equal to `a` ) in `app.json`, the repeating rectangle takes much longer to become invisible to the naked eye, and not because of `x` scale exponentiation.

Here's the second natural count in the `b2 <= a` direction:

<img src="https://github.com/bestape/alchemy/blob/master/images/beyondMetal.svg?raw=true" width="25%" >

Here's `b2 <= a` when `x = 99 / 100`, in other words no irrational parts but still non-halting, [using this formula](https://www.wolframalpha.com/input/?i=h+%3D+100%2F2%3B+w%3B+w+%3D+w%28x%5E2%29+%2B+2hx%3B+x+%3D+99%2F100%3B+x):

<img src="https://github.com/bestape/alchemy/blob/master/images/yellowBrickRoad.svg?raw=true" width="25%" >

As `b2` approaches a magnitude Infinitely larger than `a`, the automation approaches a more accurate definition of `2^( 1 / 2 )`.

</details>

### 5. technology

<details>

<summary>technology</summary>

Please read `app.js`.

`app.js` uses a grammar structure I invented with inspiration from music and contract techniques. 

`app.js` is a well-woven tapestry kind of script.

To make `app.js` without being overwhelmed by the grammar's interconnections, I built it with my patent pending Hierarchical Script Database "kernel" module.

After I was done building `app.js`, I removed the kernel as if it was a loom or scaffolding used to construct and then take down when finished.

In other words, I built a Hierarchical Script Database, then I threw out the database part and published the hierarchical script end product.

[Here's a YouTube demo](https://www.youtube.com/watch?v=IaNc1jQLnX4&list=PLL0gyjXno6eihH_BNd5rtpglSyJnsgk5P) of an app that retains its Hierarchical Script Database kernel & structure during runtime:

[![SeedTreeDB programmable SMS "2020-PAGER" demo](https://img.youtube.com/vi/IaNc1jQLnX4/0.jpg)](https://www.youtube.com/watch?v=IaNc1jQLnX4&list=PLL0gyjXno6eihH_BNd5rtpglSyJnsgk5P)

Please visit [seedtree.io](https://seedtreedb.com) for more about the kernel and Hierarchical Script Databases.

</details>

### 6. why

<details>

<summary>why</summary>

I define code (function, verb):

* as data (object, noun); with

* the potential to produce (action) an Infinite stack of unique input-output data:

  * within itself if along a positive count; and

  * beyond itself if along a negative count.

I do this so that I can define a module as a subject and write complete sentences -- computational prose -- in JavaScript.

This means that a torus's point-at-Infinity loop-around cannot fixate my definition of code because it repeats itself.

Instead, this repository uses a *metal-Pythag* point-at-Infinity loop-around I invented that can fixate my definition of code.

A *metal-Pythag*'s point-at-Infinity loop-around has a finite modulo sequence (rotation, iteration), like a torus does.

However, unlike a torus, a *metal-Pythag*'s point-at-Infinity loop-around also has a positive & negative Infinite number-line sequence (fractal, recursion).

This positive (forward) & negative (backward) number-line exists as an exponent of a scale-symmetry base and provides the Infinite stack index for my definition of unique input-output data, like a [sequence generating function](https://en.wikipedia.org/wiki/Generating_function) does.

</details>

### 7. problem & opportunity 

<details>

<summary>problem & opportunity</summary>

Phenomenologically, the irrational number of a right triangle diagonal like `2^( 1 / 2 )` is not so much irrational Nature as it is a non-halting *anthyphairesis* process.

When measure is intended to reconcile an irrational number with a rational unit, the non-halting process of the irrational number means it's incommensurate unless approximate.

In this context, without a [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm#/media/File:Euclidean_algorithm_1071_462.gif) *greatest common divisor*, an irrational number is problematic because its measure is inaccurate compared to rational numbers.

However, when measure is intended to perpetuate an ongoing sequence, an irrational number's non-halting process is an invaluable abstract perpetual motion engine.

</details>

### 8. how

<details>

<summary>how</summary>

The non-halting property of a right triangle diagonal is not limited to the diagonal.

By removing the orthogonal lengths of a right triangle from its diagonal, the remaining value is the non-halting part.

This non-halting part is the scale-symmetry base & exponent recursion of a rectangle of a particular resonance.

This rectangular resonance zig-zags between positive and negative exponents. 

For a `( a^2 + b^2 )^( 1 / 2 )` diagonal, the non-halting part is `(c - b) / a` and the resonating rectangle is `( a^2 + ( 2 * b )^2 )^( 1 / 2 )`.

* The function as an object is `( a^2 + ( b + c )^2 )^( 1 / 2 )`; 

* the function as an action is `( c - b ) / a`; 

* the input-output data as an object is `( a^2 + ( 2 * b )^2 )^( 1 / 2 )`; and

* the unique identifier of an input-output data object is `( ( c - b ) / a )^n`.

</details>

### 9. next

<details>

<summary>next</summary>

[This Wolfram blog post](https://community.wolfram.com/groups/-/m/t/1719229) explores other potential uses of the non-halting property, including many beyond the scope of this repository.

[These YouTube videos](https://www.youtube.com/playlist?list=PLL0gyjXno6ehsPQI3heOW21iPpggmDIWe) also explore other potential uses of the non-halting property, including:

[![how to make generic Metallic Means part 4: probability tiles of "a-by-(diagonal-minus-b)" rectangles](https://img.youtube.com/vi/d83iVzpaHPc/0.jpg)](https://www.youtube.com/watch?v=d83iVzpaHPc&list=PLL0gyjXno6ehsPQI3heOW21iPpggmDIWe)

[![Thalesian Pinwheel Rotation](https://img.youtube.com/vi/s2_8grzsYvw/0.jpg)](https://www.youtube.com/watch?v=s2_8grzsYvw&list=PLL0gyjXno6ehsPQI3heOW21iPpggmDIWe)

[This Instagram profile](https://www.instagram.com/bestape/) explores some of the artistic values of the non-halting property, including:

<img src="https://github.com/bestape/alchemy/blob/master/images/koko.jpg?raw=true" width="50%" >

</details>

### 10. app.js

<details>

<summary>app.js</summary>

Action-sequence along the main level:

1. `./app.js`

2. `metalPythag()`

3. `header()`

4. `dynamicObjects()`

5. `part1()`

6. `part2()`

7. `part3()`

8. `part4()`

9. `footer()`

`part1()` to `part4()` loop until the repeat option in `app.json` is met and then `footer()` is called.

Text-sequence function-object structure:

* `app.js`

  * `addRecord( ... ) { ... }`

  * `animateFromTo( ... ) { ... }`

  * `animateSize( ... ) { ... }`

    * *instructions*

    * `AnimateSize() { ... }`

  * `animateTransform( ... ) { ... }`

    * *instructions*

    * `AnimateTransform() { ... }`

  * `animateXY( ... ) { ... }`

    * *instructions*

    * `AnimateXY() { ... }`

  * `dynamicObjects( ... ) { ... }`

    * `readNext( ... ) { ... }`

    * `writeNext( ... ) { ... }`

    * *instructions*

    * `DynamicObjects() { ... }`

  * `endParts() { ... }`

  * `footer() { ... }`

    * `next( ... ) { ... }`

    * *instructions*

    * `Footer() { ... }`

  * `header() { ... }`

    * `readNext( ... ) { ... }`

    * `writeNext( ... ) { ... }`

    * *instructions*

    * `Header() { ... }`

  * `metalPythag() { ... }`

    * *instructions*

    * `MetalPythag() { ... }`

  * `part1() { ... }`

    * `addCorkRecord() { ... }`

    * `addRecord() { ... }`

    * `addToCorkRecord() { ... }`

    * `addToRecord() { ... }`

    * `changeBegin( ... ) { ... }`

    * `next( ... ) { ... }`

    * *instructions*

    * `Part1() { ... }`

  * `part2() { ... }`

    * `addCorkRecord() { ... }`

    * `addRecord() { ... }`

    * `addToCorkRecord() { ... }`

    * `addToRecord() { ... }`

    * `next( ... ) { ... }`

    * *instructions*

    * `Part2() { ... }`

  * `part3() { ... }`

    * `addCorkRecord() { ... }`

    * `addRecord() { ... }`

    * `addToCorkRecord() { ... }`

    * `addToRecord() { ... }`

    * `next( ... ) { ... }`

    * *instructions*

    * `Part3() { ... }`

  * `part4() { ... }`

    * `addCorkRecord() { ... }`

    * `addRecord() { ... }`

    * `addToCorkRecord() { ... }`

    * `addToRecord() { ... }`

    * `next( ... ) { ... }`

    * *instructions*

    * `Part4() { ... }`

  * `runPart() { ... }`

  * *instructions*

  * `App() { ... }`

</details>

### 11. to do

<details>

<summary>to do</summary>

##

`:0)` `:O)` `:o)`

Feel free fork this repo and hack away at some of these to dos. 

Or, do your own thing with it! 💖

`(o:` `(O:` `(0:`

##

Write and open source publish code that animates SVG with JavaScript, HTML and CSS.

Write and open source publish code that includes a Hierarchical Script Database runtime object-tree.

A layperson-cloud UX of this repo.

Write and open source publish code that prints the following SVG-SMIL animations:

* Label the repeating rectangles.

* ~~Images as repeating rectangles, YouTube example~~:

[![how to make generic Metallic Means part 1: spiral basics (4 min)](https://img.youtube.com/vi/smCDtjDLdf8/0.jpg)](https://www.youtube.com/watch?v=smCDtjDLdf8&list=PLL0gyjXno6ehsPQI3heOW21iPpggmDIWe)

* `x^( odd )` natural count along the horizontal; and

  * `x^( even )` natural count along the vertical.

* `x^( even )` natural count along the horizontal; and

  * `x^( odd )` natural count along the vertical, YouTube example:

[![how to make generic Metallic Means part 2: 4 colors, negative x values and diagonal Infinite order](https://img.youtube.com/vi/WAY4YjWVdH0/0.jpg)](https://www.youtube.com/watch?v=WAY4YjWVdH0&list=PLL0gyjXno6ehsPQI3heOW21iPpggmDIWe)

* All the spin starts:

  1. starting at `a` as the horizontal: 

	 1. ~~left-down (counter-clockwise)~~;

     2. left-up (clockwise);

     2. right-down (clockwise); and 

     3. right-up (counter-clockwise).

  2. starting at `a` as the vertical:

     1. left-down (clockwise);

     2. left-up (counter-clockwise);

     3. ~~right-down (counter-clockwise)~~; and

     4. right-up (clockwise).

* Use "AC" logic rather than "DC" logic for the `"lead" = false` option.

  * Improve the image animation for the `"lead" = false` option.

* Each square within a natural count rectangle colourable, stereogram example:

<img src="https://github.com/bestape/alchemy/blob/master/images/colourRail.jpg?raw=true" width="50%" >

* Curved lines rather than rectangles, example:

<img src="https://github.com/bestape/alchemy/blob/master/images/curvedLinesAmour.png?raw=true" width="50%" >

* With [Eisenstein coordinates](https://en.wikipedia.org/wiki/Eisenstein_integer), example:

<img src="https://github.com/bestape/alchemy/blob/master/images/lucky.png?raw=true" width="50%" >

* The Fibonacci approximation, example:

<img src="https://github.com/bestape/alchemy/blob/master/images/fibApprox.png?raw=true" width="50%" >

* A repeating rectangle that's also a parent rectangle, YouTube example:

[![how to make generic Metallic Means part 3: a Pythagorean triple parent as a Metallic Mean child-base](https://img.youtube.com/vi/izXJJFk6OYI/0.jpg)](https://www.youtube.com/watch?v=izXJJFk6OYI&list=PLL0gyjXno6ehsPQI3heOW21iPpggmDIWe)

* Add parents together, example:

<img src="https://github.com/bestape/alchemy/blob/master/images/addition.png?raw=true" width="50%" >

* The right triangle rather than rectangle tiling system, example:

<img src="https://github.com/bestape/alchemy/blob/master/images/metalTriangleChicken.png?raw=true" width="50%" >

* Pi/(natural count) parallelograms beyond Pi/2 rectangles, YouTube example:

[![The Hyper Metal Multi-Dimension](https://img.youtube.com/vi/I84qsslRH8w/0.jpg)](https://www.youtube.com/watch?v=I84qsslRH8w&list=PLL0gyjXno6ehsPQI3heOW21iPpggmDIWe)

</details>

##

### 12. license

Copyrighted by [bestape](mailto:alchemy.github.bestape@besta.pe), 2020.

Licensed under the `./LICENSE.txt` file included in this repository.

`./LICENSE.txt` is an [Attribution-ShareAlike 4.0 International](https://choosealicense.com/licenses/cc-by-sa-4.0/#) Creative Commons license with Section 2 Clause b Subclause 3 removed.
