function getValues() {

    let fizzValue = document.getElementById('fizzValue').value; 
    let buzzValue = document.getElementById('buzzValue').value; 
    let stopValue = document.getElementById('stopValue').value; 

    fizzValue = parseInt(fizzValue); 
    buzzValue = parseInt(buzzValue); 
    stopValue = parseInt(stopValue); 
 
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue) && fizzValue <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Let keep thing above ZERO!',
            text: 'Please enter Number that are greater than ZERO :)'
        });
    } else if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue) && buzzValue <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Let keep thing above ZERO!',
            text: 'Please enter Number that are greater than ZERO :)'
        });
    } else if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue) && stopValue <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Let keep thing above ZERO!',
            text: 'Please enter Number that are greater than ZERO :)'
        });
    } else if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue) && stopValue < (fizzValue * buzzValue)) {
        Swal.fire({
            icon: 'error',
            title: 'Let give it somemore number to work with >_<',
            text: 'Make sure the Multiplication of FizzValue and BuzzValue is greater then StopValue so we get at least one FizzBuzz :)'
        });
    } else if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue) && stopValue > 9000) {
        Swal.fire({
            icon: 'error',
            title: '>_< IT OVER 9000 >_<',
            text: 'Ensure that the Number you pick does not go over the LIMIT:)'
        });
    } else if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue)) {
        let generateNumbers = generateFizzBuzz(stopValue, fizzValue, buzzValue);
        displayFizzBuzz(generateNumbers);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Please enter valid numbers.'
        });
    }   
}

function generateFizzBuzz(stopValue, fizzValue, buzzValue) {

    let FizzBuzz = [];
    for (let n = 1; n <= stopValue; n = n + 1) {
        
        if (n % fizzValue == 0 && n % buzzValue == 0) {
           FizzBuzz.push('FizzBuzz');
        } else if (n % fizzValue == 0) {
            FizzBuzz.push('Fizz');
        } else if (n % buzzValue == 0) {
            FizzBuzz.push('Buzz');
        } else{
            FizzBuzz.push(n); 
        }          
    }
    return FizzBuzz;
}

function displayFizzBuzz(numbers) {
    let html = '';

    for (let index = 0; index < numbers.length; index += 1) {

        let currentNumbers = numbers[index]

        let className = '';

        if (currentNumbers == 'FizzBuzz') {
            className = 'fizzBuzz';
        } else if (currentNumbers == 'Fizz') {
            className = 'fizz';
        } else if ( currentNumbers == 'Buzz') {
            className = 'buzz';
        }
        html += `<div class="col border ${className}">${currentNumbers}</div>`;
    }

    let column = document.getElementById('results');

    column.innerHTML = html;
}