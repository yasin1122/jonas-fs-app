const btn = document.querySelector('.btn-open')
const form = document.querySelector('.fact-form')

btn.addEventListener('click', function () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden')
    btn.textContent = 'Close'
  } else {
    form.classList.add('hidden')
    btn.textContent = 'Share a Fact'
  }
})

function calcFactAge(year) {
  const currentYear = new Date().getFullYear()
  const age = currentYear - year

  if (age >= 0) return age
  else return `Age cannot be calculated with a year after ${currentYear}.`
}
console.log(calcFactAge(2031))

const fact = ['Lisbon is the capital of Portugal', 2015, true]
const [text, createdIn, isCorrect] = fact // destructuring
const newFact = [...fact, 'society'] // spread operator
console.log(text)

const testArr = [2, 4, 6, 8]
testArr.forEach(el => {
  console.log(el)
})
const newTestArr = testArr.map(el => {
  return el * 10
})
console.log(newTestArr.join('---'))
