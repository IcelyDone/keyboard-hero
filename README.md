# Project #1: Keyboard Hero

### The Game

This is a functional and responsive in-browser-replica of the popular console game Guitar Hero, where you get to play a virtual guitar and play cool songs (I didn't replicate the songs though, but you still get to rock on!)


[Play it here!](https://icelydone.github.io/keyboard-hero/)

### Instructions

The game is simple: hold down the 1-5 keys on your keyboard in correspondence to the notes traveling downwards on the page, and when they pass over the frets (numbered buttons), clicks the "Strum!" button with your mouse! If you successfully strum the note, you gain a point! If you fail to strum a note or mistime the strum, you lose HP!

You win when your points reach 50, or lose when you HP depletes to 0.

### Screenshots 

Loading up the game:
![](http://i.imgur.com/pmyLs1L.png)

Instructions and Difficulty Selections: 
![](http://i.imgur.com/4tq0d9W.png)

Playing the game:
![](http://i.imgur.com/tNK2poK.png)

Winning the game:
![](http://i.imgur.com/HoNwNjQ.png)

Losing the game:
![](http://i.imgur.com/d84qemq.png)

### Making of The Game

[Wireframe](https://imgur.com/yPhLXnY.jpg)

HTML, CSS, and Javascript were used to make this webpage.

The scoring of the notes work by testing if, when strumming, the combination of the notes above the fret buttons (saved in a string) exactly match the combination of the buttons pressed (also saved in a string). If there is a match, the note divs are deleted and score is augmented. Any other situation when strumming leads to HP decrement.

The adding of the notes work by appending note divs to the top of the fret divs, then animating them to the bottom of the page. At the end of the animation they decrement the score; this does not happen if they are correctly strummed before that (deleted).

The note randomization works by recursion of a function that generated multiple settimeouts with random time delays (higher difficulties makes the recursion more frequent and the time delays shorter; this makes more notes more often) 

**Made by:** Soren Soroush
