const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const button4 = document.querySelector('#button4')
const button5 = document.querySelector('#button5')

/*
for (i = 1; i < 6; i++) {
  let index = i
  const colors1 = ['','#00BB00','#BB0000','#BBBB00','#0000BB','#BB7700']
  const colors2 = ['','#00FF00','#FF0000','#FFFF00','#0000FF','#FFAA00']
  document.body.addEventListener('keydown', e => {
    button1.innerHTML = 'PRESSED'
    button1.style.boxShadow = '-2px -2px gray'
    button1.style.backgroundColor = colors1[index]
  })
  console.log(i)
  document.body.addEventListener('keyup', e => {
    button1.innerHTML = '1'
    button1.style.boxShadow = '0px 0px'
    button1.style.backgroundColor = colors2[index]
  })
}
*/

document.body.addEventListener('keydown', e => {
  if (e.key == 1) {
    button1.innerHTML = 'PRESSED'
    button1.style.boxShadow = '-2px -2px gray'
    button1.style.backgroundColor = '#00BB00'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 1) {
    button1.innerHTML = '1'
    button1.style.boxShadow = '0px 0px'
    button1.style.backgroundColor = '#00FF00'
  }
})

document.body.addEventListener('keydown', e => {
  if (e.key == 2) {
    button2.innerHTML = 'PRESSED'
    button2.style.boxShadow = '-2px -2px gray'
    button2.style.backgroundColor = '#BB0000'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 2) {
    button2.innerHTML = '2'
    button2.style.boxShadow = '0px 0px'
    button2.style.backgroundColor = '#FF0000'
  }
})

document.body.addEventListener('keydown', e => {
  if (e.key == 3) {
    button3.innerHTML = 'PRESSED'
    button3.style.boxShadow = '-2px -2px gray'
    button3.style.backgroundColor = '#BBBB00'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 3) {
    button3.innerHTML = '3'
    button3.style.boxShadow = '0px 0px'
    button3.style.backgroundColor = '#FFFF00'
  }
})

document.body.addEventListener('keydown', e => {
  if (e.key == 4) {
    button4.innerHTML = 'PRESSED'
    button4.style.boxShadow = '-2px -2px gray'
    button4.style.backgroundColor = '#0000BB'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 4) {
    button4.innerHTML = '4'
    button4.style.boxShadow = '0px 0px'
    button4.style.backgroundColor = '#0000FF'
  }
})

document.body.addEventListener('keydown', e => {
  if (e.key == 5) {
    button5.innerHTML = 'PRESSED'
    button5.style.boxShadow = '-2px -2px gray'
    button5.style.backgroundColor = '#BB9900'
  }
})
document.body.addEventListener('keyup', e => {
  if (e.key == 5) {
    button5.innerHTML = '5'
    button5.style.boxShadow = '0px 0px'
    button5.style.backgroundColor = '#FFBB00'
  }
})


