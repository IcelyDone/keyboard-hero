const button1 = document.querySelector('#button1')
let button1Pressed = false
const button2 = document.querySelector('#button2')
let button2Pressed = false
const button3 = document.querySelector('#button3')
let button3Pressed = false
const button4 = document.querySelector('#button4')
let button4Pressed = false
const button5 = document.querySelector('#button5')
let button5Pressed = false

const addNote = function(noteNum) {
  newNote = document.createElement('div')
  newNote.classList.add('note')
  switch (noteNum) {
    case 1:
      newNote.style.backgroundColor = 'rgba(0,255,0,0.5)'
      break
    case 2:
      newNote.style.backgroundColor = 'rgba(255,0,0,0.5)'
      break
    case 3:
      newNote.style.backgroundColor = 'rgba(255,255,0,0.5)'
      break
    case 4:
      newNote.style.backgroundColor = 'rgba(0,0,255,0.5)'
      break
    case 5:
      newNote.style.backgroundColor = 'rgba(255,187,0,0.5)'
      break
  }
  document.querySelector('#fret' + noteNum).appendChild(newNote)
}

addNote(1)
addNote(2)
addNote(3)
addNote(4)
addNote(5)

document.body.addEventListener('keydown', e => {
  if (e.key == 1) {
    button1Pressed = true
    console.log('Button 1 pressed:', button1Pressed)
    button1.innerHTML = 'PRESSED'
    button1.style.boxShadow = '-2px -2px gray'
    button1.style.backgroundColor = '#00BB00'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 1) {
    button1Pressed = false
    console.log('Button 1 pressed:', button1Pressed)
    button1.innerHTML = '1'
    button1.style.boxShadow = '0px 0px'
    button1.style.backgroundColor = '#00FF00'
  }
})

document.body.addEventListener('keydown', e => {
  if (e.key == 2) {
    button2Pressed = true
    console.log('Button 2 pressed:', button2Pressed)
    button2.innerHTML = 'PRESSED'
    button2.style.boxShadow = '-2px -2px gray'
    button2.style.backgroundColor = '#BB0000'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 2) {
    button2Pressed = false
    console.log('Button 2 pressed:', button2Pressed)
    button2.innerHTML = '2'
    button2.style.boxShadow = '0px 0px'
    button2.style.backgroundColor = '#FF0000'
  }
})

document.body.addEventListener('keydown', e => {
  if (e.key == 3) {
    button3Pressed = true
    console.log('Button 3 pressed:', button3Pressed)
    button3.innerHTML = 'PRESSED'
    button3.style.boxShadow = '-2px -2px gray'
    button3.style.backgroundColor = '#BBBB00'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 3) {
    button3Pressed = false
    console.log('Button 3 pressed:', button3Pressed)
    button3.innerHTML = '3'
    button3.style.boxShadow = '0px 0px'
    button3.style.backgroundColor = '#FFFF00'
  }
})

document.body.addEventListener('keydown', e => {
  if (e.key == 4) {
    button4Pressed = true
    console.log('Button 4 pressed:', button4Pressed)
    button4.innerHTML = 'PRESSED'
    button4.style.boxShadow = '-2px -2px gray'
    button4.style.backgroundColor = '#0000BB'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 4) {
    button4Pressed = false
    console.log('Button 4 pressed:', button4Pressed)
    button4.innerHTML = '4'
    button4.style.boxShadow = '0px 0px'
    button4.style.backgroundColor = '#0000FF'
  }
})

document.body.addEventListener('keydown', e => {
  if (e.key == 5) {
    button5Pressed = true
    console.log('Button 5 pressed:', button5Pressed)
    button5.innerHTML = 'PRESSED'
    button5.style.boxShadow = '-2px -2px gray'
    button5.style.backgroundColor = '#BB9900'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 5) {
    button5Pressed = false
    console.log('Button 5 pressed:', button5Pressed)
    button5.innerHTML = '5'
    button5.style.boxShadow = '0px 0px'
    button5.style.backgroundColor = '#FFBB00'
  }
})

