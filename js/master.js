//variáveis globais
valor = []
let aux
let num = false
//display
const display = document.querySelector('#display')
const display2 = document.querySelector('#display2')

//buttons númericos
const bt9 = document.querySelector('#nove')
const bt8 = document.querySelector('#oito')
const bt7 = document.querySelector('#sete')
const bt6 = document.querySelector('#seis')
const bt5 = document.querySelector('#cinco')
const bt4 = document.querySelector('#quatro')
const bt3 = document.querySelector('#tres')
const bt2 = document.querySelector('#dois')
const bt1 = document.querySelector('#um')
const bt0 = document.querySelector('#zero')
const bt00 = document.querySelector('#doisZero')

//butons operadores
const btDivide = document.querySelector('#divide')
const btVezes = document.querySelector('#vezes')
const btMenos = document.querySelector('#menos')
const btMais = document.querySelector('#mais')
const btIgual = document.querySelector('#igual')

//ouvidores buttons operadores
btDivide.addEventListener('click', () => {
  if (num == false) {
    num = parseFloat(display.value)
    display2.value += display.value + '/'
    display.value = ' '
    aux = 1
  } else {
    num = num
  }

})

btVezes.addEventListener('click', () => {
  if (num == false) {
    num = parseFloat(display.value)
    display2.value += display.value + 'x'
    display.value = ' '
    aux = 2
  } else {
    num = num
  }
})

btMenos.addEventListener('click', () => {
  if (num == false) {
    num = parseFloat(display.value)
    display2.value += display.value + '-'
    display.value = ' '
    aux = 3
  } else {
    num = num
  }
})

btMais.addEventListener('click', () => {
  if (num == false) {
    num = parseFloat(display.value)
    display2.value += display.value + '+'
    display.value = ' '
    aux = 4
  } else {
    num = num
  }
})

btIgual.addEventListener('click', () => {
  if (num == false) {
    display.style.border = '1px solid #f00'
    display2.style.border = '1px solid #f00'
  } else {

    display2.value += display.value

     switch (aux) {
       case 1:
         num = num / parseFloat(display.value)
         break;
       case 2:
         num = num * parseFloat(display.value)
         break;
       case 3:
         num = num - parseFloat(display.value)
         break;
       case 4:
         num = num + parseFloat(display.value)
         break;
     }
     display.value = num
  }
})

//ouvidores buttons númericos
bt9.addEventListener('click', () => {
  display.value += 9
})

bt8.addEventListener('click', () => {
  display.value += 8
})

bt7.addEventListener('click', () => {
  display.value += 7
})

bt6.addEventListener('click', () => {
  display.value += 6
})

bt5.addEventListener('click', () => {
  display.value += 5
})

bt4.addEventListener('click', () => {
  display.value += 4
})

bt3.addEventListener('click', () => {
  display.value += 3
})

bt2.addEventListener('click', () => {
  display.value += 2
})

bt1.addEventListener('click', () => {
  display.value += 1
})

bt0.addEventListener('click', () => {
  display.value += 0
})

bt00.addEventListener('click', () => {
  display.value = ''
  display2.value = ''
  num = false
})
