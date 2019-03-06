const button1 = document.querySelector('#button1')
let button1Pressed = 0
const button2 = document.querySelector('#button2')
let button2Pressed = 0
const button3 = document.querySelector('#button3')
let button3Pressed = 0
const button4 = document.querySelector('#button4')
let button4Pressed = 0
const button5 = document.querySelector('#button5')
let button5Pressed = 0

let gameHP = 5;
let gameScore = 0;

const addNote = function(noteNum) {
  newNote = document.createElement('div')
  newNote.classList.add('note')
  switch (noteNum) {
    case 1:
      newNote.style.backgroundColor = 'rgba(0,255,0,0.5)'
      newNote.classList.add('note1')
      break
    case 2:
      newNote.style.backgroundColor = 'rgba(255,0,0,0.5)'
      newNote.classList.add('note2')
      break
    case 3:
      newNote.style.backgroundColor = 'rgba(255,255,0,0.5)'
      newNote.classList.add('note3')
      break
    case 4:
      newNote.style.backgroundColor = 'rgba(0,0,255,0.5)'
      newNote.classList.add('note4')
      break
    case 5:

      newNote.style.backgroundColor = 'rgba(255,187,0,0.5)'
      newNote.classList.add('note5')
      break
  }
  document.querySelector('#fret' + noteNum).appendChild(newNote)
}

setInterval( () => {addNote(1)}, 4000)
setInterval( () => {addNote(2)}, 5000)
setInterval( () => {addNote(3)}, 6000)
setInterval( () => {addNote(4)}, 7000)
setInterval( () => {addNote(5)}, 8000)

/*
setTimeout( () => {addNote(1)}, 0)
setTimeout( () => {addNote(1)}, 4000)
setTimeout( () => {addNote(1)}, 8000)
setTimeout( () => {addNote(1)}, 12000)
setTimeout( () => {addNote(1)}, 16000)
*/

const buttonPos = button1.getBoundingClientRect()
const buttonUpperY = buttonPos.y - (buttonPos.height / 2)
const buttonLowerY = buttonPos.y + (buttonPos.height / 2)

console.log(buttonPos.y)
console.log(buttonUpperY)
console.log(buttonLowerY)

const updateHP = function() {
  document.querySelector('#hp').innerText = `HP: ${gameHP}`
}

const updateScore = function() {
  document.querySelector('#score').innerText = `Score: ${gameScore}`
}

const checkNotePos = function(note) {
  let noteY = note.getBoundingClientRect().y
  return noteY > buttonUpperY && noteY < buttonLowerY
}

const checkStrum = function() {
  const buttonCode = button1Pressed.toString() + button2Pressed + button3Pressed + button4Pressed + button5Pressed 
  let noteCode = ''
  for (i = 1; i < 6; i++) {
    const notes = document.querySelectorAll('.note' + i)
    const notesArray = Array.from(notes)
    const noteIndex = notesArray.findIndex(checkNotePos)
    if (noteIndex > -1) {
      noteCode += '1'
    } else {
      noteCode += '0'
    }
  }
  if (buttonCode === noteCode && noteCode !== '00000') {
    gameScore++
    updateScore()
  } else {
    gameHP--
    updateHP()
  }
}

/*   

-When strumming, check if there is a button being pressed
  -If there is no corresponding note above it, remove 1 HP
  -If there is a corresponding note above it, remove the note and augment score
-If strumming with no buttons pressed, remove 1 HP

^^^^Scrap this I have better logic in mind

-Every time a strum is done, take the state of all the buttons pressed (0 or 1), and take the state of notes being above the fret
    -If they match, remove all notes above fret and augment score according to how many notes are strummed
    -If no match, remove HP























*/










document.querySelector('#strum').addEventListener('click', checkStrum)






document.body.addEventListener('keydown', e => {
  if (e.key == 1) {
    button1Pressed = 1
    button1.innerHTML = 'PRESSED'
    button1.style.boxShadow = '-2px -2px gray'
    button1.style.backgroundColor = '#00BB00'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 1) {
    button1Pressed = 0
    button1.innerHTML = '1'
    button1.style.boxShadow = '0px 0px'
    button1.style.backgroundColor = '#00FF00'
  }
})

document.body.addEventListener('keydown', e => {
  if (e.key == 2) {
    button2Pressed = 1
    button2.innerHTML = 'PRESSED'
    button2.style.boxShadow = '-2px -2px gray'
    button2.style.backgroundColor = '#BB0000'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 2) {
    button2Pressed = 0
    button2.innerHTML = '2'
    button2.style.boxShadow = '0px 0px'
    button2.style.backgroundColor = '#FF0000'
  }
})

document.body.addEventListener('keydown', e => {
  if (e.key == 3) {
    button3Pressed = 1
    button3.innerHTML = 'PRESSED'
    button3.style.boxShadow = '-2px -2px gray'
    button3.style.backgroundColor = '#BBBB00'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 3) {
    button3Pressed = 0
    button3.innerHTML = '3'
    button3.style.boxShadow = '0px 0px'
    button3.style.backgroundColor = '#FFFF00'
  }
})

document.body.addEventListener('keydown', e => {
  if (e.key == 4) {
    button4Pressed = 1
    button4.innerHTML = 'PRESSED'
    button4.style.boxShadow = '-2px -2px gray'
    button4.style.backgroundColor = '#0000BB'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 4) {
    button4Pressed = 0
    button4.innerHTML = '4'
    button4.style.boxShadow = '0px 0px'
    button4.style.backgroundColor = '#0000FF'
  }
})

document.body.addEventListener('keydown', e => {
  if (e.key == 5) {
    button5Pressed = 1
    button5.innerHTML = 'PRESSED'
    button5.style.boxShadow = '-2px -2px gray'
    button5.style.backgroundColor = '#BB9900'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 5) {
    button5Pressed = 0
    button5.innerHTML = '5'
    button5.style.boxShadow = '0px 0px'
    button5.style.backgroundColor = '#FFBB00'
  }
})

