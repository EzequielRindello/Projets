// Variables
const calculator = document.getElementById('calculator')
const result = document.getElementById('result')

// Events
calculator.addEventListener('click', addNumbers)

// Operations
let operations = []

// addNumbers function
function addNumbers(e) {
    if (e.target.getAttribute('type') === 'button') {
        if (e.target.className != 'operation') {
            result.value += e.target.innerText
        }
        if (e.target.id === 'add') {
            operations.push(result.value)
            operations.push('+')
            calculator.reset()
        }
        if (e.target.id === 'equals') {
            operations.push(result.value)
            calculator.reset()
            const operationResult = eval(operations.join(''))
            result.value = operationResult
            operations = []
        }
        if (e.target.id === 'subtract') {
            operations.push(result.value)
            operations.push('-')
            calculator.reset()
        }
        if (e.target.id === 'multiply') {
            operations.push(result.value)
            operations.push('*')
            calculator.reset()
        }
        if (e.target.id === 'divide') {
            operations.push(result.value)
            operations.push('/')
            calculator.reset()
        }
        if (e.target.id === 'clear') {
            operations = []
            calculator.reset()
        }
    }
}