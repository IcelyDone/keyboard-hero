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

let gameHP, gameScore; 
let playsNotes1, playsNotes2, playsNotes3, playsNotes4, playsNotes5 

const gameEnd = function(win) {
  document.querySelector('#playZone').style.display = 'none'
  document.querySelector('#endPage').style.display = 'flex'
  if (win) {
    document.querySelector('#loseText').style.display = 'none'
  } else {
    document.querySelector('#winText').style.display = 'none'
  }
  document.querySelector('#endScore').innerText = 'Your score: ' + gameScore
  let notes = document.querySelectorAll('.note')
  notes.forEach( note => {note.remove()})
  setTimeout(() => {document.querySelector('#endPage').addEventListener('click', playGame)},1500)
  clearInterval(playNotes1)
  clearInterval(playNotes2)
  clearInterval(playNotes3)
  clearInterval(playNotes4)
  clearInterval(playNotes5)
}

const updateHP = function() {
  gameHP--
  document.querySelector('#hp').innerText = `HP: ${gameHP}`
  if (gameHP === 0) {gameEnd()}
}

const updateScore = function() {
  gameScore++
  document.querySelector('#score').innerText = `Score: ${gameScore}`
  if (gameScore === 50) {gameEnd('win')}
}

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
  newNote.addEventListener('animationend', e => {
    e.target.remove()
    updateHP()
  })
  document.querySelector('#fret' + noteNum).appendChild(newNote)
}

const noteRandomizer = function() {
 
}

let buttonPos, buttonUpperY, buttonLowerY

const playGame = function() {
  gameHP = 6
  gameScore = -1
  updateHP()
  updateScore()
  document.querySelector('#landingPage').style.display = 'none'
  document.querySelector('#playZone').style.display = 'flex'
  document.querySelector('#endPage').style.display = 'none'
  buttonPos = button1.getBoundingClientRect()
  buttonUpperY = buttonPos.y - (buttonPos.height / 2)
  buttonLowerY = buttonPos.y + (buttonPos.height / 2)
  playNotes1 = setInterval( () => {addNote(1)}, 4000)
  playNotes2 = setInterval( () => {addNote(2)}, 5000)
  playNotes3 = setInterval( () => {addNote(3)}, 6000)
  playNotes4 = setInterval( () => {addNote(4)}, 7000)
  playNotes5 = setInterval( () => {addNote(5)}, 8000)
}

const checkNotePos = function(note) {
  let noteY = note.getBoundingClientRect().y
  return noteY > buttonUpperY && noteY < buttonLowerY
}

const checkStrum = function() {
  const buttonCode = button1Pressed.toString() + button2Pressed + button3Pressed + button4Pressed + button5Pressed 
  const buggedNoteCodes = ['10011','01011','00111','11011','10111','01111','11111']
  let noteCode = ''
  const notesPlaying = []
  const notes1 = document.querySelectorAll('.note1')
  const notes2 = document.querySelectorAll('.note2')
  const notes3 = document.querySelectorAll('.note3')
  const notes4 = document.querySelectorAll('.note4')
  const notes5 = document.querySelectorAll('.note5')
  for (i = 1; i < 6; i++) {
    const notesArray = Array.from(eval(`notes${i}`))
    const noteIndex = notesArray.findIndex(checkNotePos)
    if (noteIndex > -1) {
      noteCode += '1'
      notesPlaying.push(noteIndex)
    } else {
      noteCode += '0'
      notesPlaying.push(undefined)
    }
    if (i === 5) {
      if (buttonCode === noteCode && noteCode !== '00000' || buggedNoteCodes.includes(noteCode)) {
        updateScore()
        for (j = 0; j < noteCode.length; j++) {
          if (notesPlaying[j] !== undefined) {
            eval(`notes${j+1}[notesPlaying[j]]`).remove()
          }
        }
      } else {
        updateHP()
      }
    }
  }
}

document.querySelector('#landingPage').addEventListener('click', playGame)

document.querySelector('#strum').addEventListener('click', checkStrum)

/*

Yes, I know all of these button event listeners are supposed to be in a for-loop to condense the code.
I tried. It kept bugging out with i values being used within the loop that were outside the range of the condition.
I could have probably made all this loopable earlier but I wanted to make sure the actual game was coded first, before worrying about aesthetical optimzations.
Now that I know that eval() exists, making this loopable should be easy.

*/

/*

for (i = 1; i < 6; i++) {
  document.body.addEventListener('keydown', e => {
    if (eval(`(e.key == ${i})`)) {
      eval(`button${i}Pressed`) = 1
      eval('button' + i + '.innerHTML') = 'PRESSED'
      eval(`button${i}.style.boxShadow`) = '-2px -2px gray'
      switch (i) {
        case 1:
          eval(`button${i}.style.backgroundColor`) = '#00BB00'
          break
        case 2:
          eval(`button${i}.style.backgroundColor`) = '#BB0000'
          break
        case 3:
          eval(`button${i}.style.backgroundColor`) = '#BBBB00'
          break
        case 4:
          eval(`button${i}.style.backgroundColor`) = '#0000BB'
          break
        case 5:
          eval(`button${i}.style.backgroundColor`) = '#BB9900'
          break
      }
    }
  })
  document.body.addEventListener('keyup', e => {
    if (eval(`(e.key == ${i})`)) {
      eval(`button${i}Pressed`) = 0
      eval(`button${i}.innerHTML`) = i
      eval(`button${i}.style.boxShadow`) = '0px 0px'
      switch (i) {
        case 1:
          eval(`button${i}.style.backgroundColor`) = '#00FF00'
          break
        case 2:
          eval(`button${i}.style.backgroundColor`) = '#FF0000'
          break
        case 3:
          eval(`button${i}.style.backgroundColor`) = '#FFFF00'
          break
        case 4:
          eval(`button${i}.style.backgroundColor`) = '#0000FF'
          break
        case 5:
          eval(`button${i}.style.backgroundColor`) = '#FFBB00'
          break
      }
    }
  })
}

*/


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


