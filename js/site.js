function getValues() {
    let fizzValues = document.getElementById('fizzValue').value;
    let buzzValues = document.getElementById('buzzValue').value;
    let stopValues = document.getElementById('stopValue').value;


    fizzValues = parseInt(fizzValues);
    buzzValues = parseInt(buzzValues);
    stopValues = parseInt(stopValues);

    if (Number.isInteger(fizzValues) && Number.isInteger(buzzValues) && Number.isInteger(stopValues) && fizzValues < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Let keep thing in the Positive!',
            text: 'Please enter positive number :)'
        });
    } else if (Number.isInteger(fizzValues) && Number.isInteger(buzzValues) && Number.isInteger(stopValues) && buzzValues < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Let keep thing in the Positive!',
            text: 'Please enter positive number :)'
        });
    } else if (Number.isInteger(fizzValues) && Number.isInteger(buzzValues) && Number.isInteger(stopValues) && stopValues < (fizzValues * buzzValues)) {
        Swal.fire({
            icon: 'error',
            title: 'Let give it somemore number to work with >_<',
            text: 'Make sure the Multiplication of Fizz Values and Buzz Values is greater then Stop Value so we get atleast one FizzBuzz :)'
        });
    } else if (Number.isInteger(fizzValues) && Number.isInteger(buzzValues) && Number.isInteger(stopValues) && stopValues > 9000) {
        Swal.fire({
            icon: 'error',
            title: '>_< IT OVER 9000 >_<',
            text: 'Ensure that the Number you pick doesnt go over the LIMIT:)'
        });
    } else if (Number.isInteger(fizzValues) && Number.isInteger(buzzValues) && Number.isInteger(stopValues)) {
        let generateNumbers = generateValues(stopValues);
        displayValues(generateNumbers, fizzValues, buzzValues);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Please enter valid numbers nad ensure that your START number is less than your END number.'
        });

    }


}
function generateValues(stop) {

    let numbers = [];
    for (let n = 1; n <= stop; n = n + 1) {
        if (stop <= 9000) {
            numbers.push(n);
        }       
    }

    return numbers;
}

function displayValues(numbers, fizz, buzz) {
    let html = '';

    for (let index = 0; index < numbers.length; index += 1) {

        let currentNumbers = numbers[index]

        let className = '';

        if (currentNumbers % fizz == 0 && currentNumbers % buzz == 0) {
            className = 'fizzBuzz',
            currentNumbers = 'FizzBuzz';
        } else if (currentNumbers % fizz == 0) {
            className = 'fizz';
            currentNumbers = 'Fizz';
        } else if (currentNumbers % buzz == 0) {
            className = 'buzz';
            currentNumbers = 'Buzz'
        }        
        html += `<div class="col border border-1 ${className}">${currentNumbers}</div>`
    }

    let col = document.getElementById('results');

    col.innerHTML = html;
}