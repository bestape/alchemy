# alchemy

## *an animated SVG printer using a* metal-Pythag *engine*

### what

Create vanishing point cellular automata moving images like the famous Golden Ratio:

<img src="https://github.com/bestape/alchemy/blob/master/images/100by50.svg?raw=true" width="50%" >

These images can be used, among other things, as geometric clock timers or a box of Infinite objects with every object observable from above.

### use

1. Have `node.js` installed on your machine;

2. download the `app.js` and `app.json` files; ensure `app.js` is executable;

3. change the values in `app.json` to your preference;

4. run `./app.js` in your terminal; and

5. enjoy the SVG printout!

### contents

1. [what](#what)

2. [use](#use)

3. [options](#options)

4. [example tiles](#example-tiles)

5. [technology](#technology)

6. [why](#why)

7. [problem & opportunity](#problem--opportunity)

8. [how](#how)

9. [next](#next)

10. [app.js](#app.js)

11. [license](#license)

### options

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
| clickStart       | boolean | false = auto start; true = manual start  |
| colours          | array   | repeating rectangle's colour sequence    |
| cork             | string  | remainder rectangle included if true     |
| file             | string  | file name and relative path              |
| lead             | boolean | false = each repeat starts from the top  |
| loop             | boolean | animation auto restarts when finished    |
| repeat           | number  | number of repeating rectangles >= 1      |
| rotateCenter     | string  | x and y axis parent point of rotation    |
| speed            | string  | the time it takes to move by 1 exponent  |
| viewBoxAdd       | object  | the width and height axis canvas size    |

If you need to calculate a number option:

1. open and edit `app.js`;

2. mute the option in the `App(){ ... }` constructor function with `//`; and

3. write the modified option below the muted option.

Please see the `this.a` option in `App(){ ... }` for an example.

### example tiles

To run the following animations:

1. click on the image, it'll open in a new tab; and

2. within the new tab, click on the repeating rectangle at the top of the parent rectangle.

Vera's [Metallic Means](https://verasmathematicworld.org/) can be SVG printed by `app.js`:

* set the `a` value in `app.json` to 100; and

* set the `b2` value in `app.json` to 100, then 200, then 300 and so on.

As a continuum rather than a natural count, the Metallic Means are SVG printed by `app.js` whenever `a <= b2` in `app.json`.

Here's the first Metallic Mean natural count, the Golden Ratio:

<img src="https://github.com/bestape/alchemy/blob/master/images/goldenRatio.svg?raw=true" width="10%" >

Here's the fifth Metallic Mean natural count:

<img src="https://github.com/bestape/alchemy/blob/master/images/fifth.svg?raw=true" width="10%" >

As `b2` tends toward Infinity, the repeating rectangles quickly become invisible to the naked eye.

Here's the tenth Metallic Mean natural count, with `a = 100; b2 = 1000` in `app.json`:

<img src="https://github.com/bestape/alchemy/blob/master/images/metalTen.svg?raw=true" width="10%" >

However, if `b2 <= a` in `app.json`, the repeating rectangle takes much longer to become invisible to the naked eye, and not because of `x` scale exponentiation.

Here's the second natural count in the `b2 <= a` direction:

<img src="https://github.com/bestape/alchemy/blob/master/images/beyondMetal.svg?raw=true" width="10%" >

Here's `b2 <= a` when `x = 99/100`:

<img src="https://github.com/bestape/alchemy/blob/master/images/yellowBrickRoad.svg?raw=true" width="10%" >

As `b2` approaches a magnitude Infinitely larger than `a`, the automation approaches a more accurate definition of `2^( 1 / 2 )`.

### technology

Please read `app.js`.

`app.js` uses a grammar structure I invented with inspiration from music and contract techniques. 

`app.js` is a well-woven tapestry kind of script.

To make `app.js` without being overwhelmed by the grammar's interconnections, I built it with my patent pending Hierarchical Script Database "kernel" module.

After I was done building `app.js`, I removed the kernel as if it was a loom or scaffolding used to construct and then take down when finished.

In other words, I built a Hierarchical Script Database, then I threw out the database part and published the hierarchical script end product.

[Here's a YouTube demo](https://www.youtube.com/watch?v=IaNc1jQLnX4&list=PLL0gyjXno6eihH_BNd5rtpglSyJnsgk5P) of an app that retains its Hierarchical Script Database kernel & structure during runtime:

[![SeedTreeDB programmable SMS "2020-PAGER" demo](https://img.youtube.com/vi/IaNc1jQLnX4/0.jpg)](https://www.youtube.com/watch?v=IaNc1jQLnX4&list=PLL0gyjXno6eihH_BNd5rtpglSyJnsgk5P)

Please visit [seedtree.io](https://seedtreedb.com) for more about the kernel and Hierarchical Script Databases.

### why

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

### problem & opportunity 

Phenomenologically, the irrational number of a right triangle diagonal like `2^( 1 / 2 )` is not so much irrational Nature as it is a non-halting *anthyphairesis* process.

When measure is intended to reconcile an irrational number with a rational unit, the non-halting process of the irrational number means it's incommensurate unless approximate.

In this context, without a [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm#/media/File:Euclidean_algorithm_1071_462.gif) *greatest common divisor*, an irrational number is problematic because its measure is inaccurate compared to rational numbers.

However, when measure is intended to perpetuate an ongoing sequence, an irrational number's non-halting process is an invaluable abstract perpetual motion engine.

### how

The non-halting property of a right triangle diagonal is not limited to the diagonal.

By removing the orthogonal lengths of a right triangle from its diagonal, the remaining value is the non-halting part.

This non-halting part is the scale-symmetry base & exponent recursion of a rectangle of a particular resonance.

This rectangular resonance zig-zags between positive and negative exponents. 

For a `( a^2 + b^2 )^( 1 / 2 )` diagonal, the non-halting part is `(c - b) / a` and the resonating rectangle is `( a^2 + ( 2 * b )^2 )^( 1 / 2 )`.

* The function as an object is `( a^2 + ( b + c )^2 )^( 1 / 2 )`; 

* the function as an action is `( c - b ) / a`; 

* the input-output data as an object is `( a^2 + ( 2 * b )^2 )^( 1 / 2 )`; and

* the unique identifier of an input-output data object is `( ( c - b ) / a )^n`.

### next

[This Wolfram blog post](https://community.wolfram.com/groups/-/m/t/1719229) explores other potential uses of the non-halting property, including many beyond the scope of this repository.

[These YouTube videos](https://www.youtube.com/playlist?list=PLL0gyjXno6ehsPQI3heOW21iPpggmDIWe) also explore other potential uses of the non-halting property, including:

[![how to make generic Metallic Means part 4: probability tiles of "a-by-(diagonal-minus-b)" rectangles](https://img.youtube.com/vi/d83iVzpaHPc/0.jpg)](https://www.youtube.com/watch?v=d83iVzpaHPc&list=PLL0gyjXno6ehsPQI3heOW21iPpggmDIWe)

[![Thalesian Pinwheel Rotation](https://img.youtube.com/vi/s2_8grzsYvw/0.jpg)](https://www.youtube.com/watch?v=s2_8grzsYvw&list=PLL0gyjXno6ehsPQI3heOW21iPpggmDIWe)

[![The Hyper Metal Multi-Dimension](https://img.youtube.com/vi/I84qsslRH8w/0.jpg)](https://www.youtube.com/watch?v=I84qsslRH8w&list=PLL0gyjXno6ehsPQI3heOW21iPpggmDIWe)

[This Instagram profile](https://www.instagram.com/bestape/) explores some of the artistic values of the non-halting property, including:

<img src="https://github.com/bestape/alchemy/blob/master/images/lucky.png?raw=true" width="50%" >

### app.js

Text-sequence function-object structure:

* `app.js`
 * `animateToFrom( ... ) { ... }`
 * `animateSize( ... ) { ... }`
 * `animateTransform( ... ) { ... }`
 * `animateXY( ... ) { ... }`
 * `dynamicObjects( ... ) { ... }`
  * `next( ... ) { ... }`
  * `*instructions*`
  * `DynamicObjects() { ... }`
 * `footer() { ... }`
  * `next( ... ) { ... }`
  * `*instructions*`
  * `Footer() { ... }`
 * `header() { ... }`
  * `next( ... ) { ... }`
  * `*instructions*`
  * `Header() { ... }`
 * `metalPythag() { ... }`
  * `*instructions*`
  * `MetalPythag() { ... }`
 * `part1() { ... }`
  * `addToRecord() { ... }`
  * `next( ... ) { ... }`
  * `*instructions*`
  * `Part1() { ... }`
 * `part2() { ... }`
  * `addToRecord() { ... }`
  * `next( ... ) { ... }`
  * `*instructions*`
  * `Part2() { ... }`
 * `part3() { ... }`
  * `addToRecord() { ... }`
  * `next( ... ) { ... }`
  * `*instructions*`
  * `Part3() { ... }`
 * `part4() { ... }`
  * `addToRecord() { ... }`
  * `next( ... ) { ... }`
  * `*instructions*`
  * `Part4() { ... }`
 * `*instructions*`
 * `App() { ... }`

Action-sequence function-object structure at the functions-with-internal-constructor-functions level:

1. `app()`
2. `metalPythag()`
3. `header()`
4. `dynamicObjects()`
5. `Part1()`
6. `Part2()`
7. `Part3()`
8. `Part4()`
9. `footer()`

`Part1()` to `part4()` loop until the repeat option in `app.json` is met and then `footer()` is called. 


##

### license

Copyrighted by [bestape](mailto:alchemy.github.bestape@besta.pe), 2020.

Licensed under the `./LICENSE.txt` file included in this repository.

`./LICENSE.txt` is an [Attribution-ShareAlike 4.0 International](https://choosealicense.com/licenses/cc-by-sa-4.0/#) Creative Commons license with Section 2 Clause b Subclause 3 removed.
