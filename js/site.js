function getValues() {

    let chillValue = document.getElementById('chillValue').value; 
    let popValue = document.getElementById('popValue').value; 
    let stopValue = document.getElementById('stopValue').value; 

    chillValue = parseInt(chillValue); 
    popValue = parseInt(popValue); 
    stopValue = parseInt(stopValue); 
 
    if (Number.isInteger(chillValue) && Number.isInteger(popValue) && Number.isInteger(stopValue) && chillValue <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Let keep thing above ZERO!',
            text: 'Please enter Number that are greater than ZERO :)'
        });
    } else if (Number.isInteger(chillValue) && Number.isInteger(popValue) && Number.isInteger(stopValue) && popValue <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Let keep thing above ZERO!',
            text: 'Please enter Number that are greater than ZERO :)'
        });
    } else if (Number.isInteger(chillValue) && Number.isInteger(popValue) && Number.isInteger(stopValue) && stopValue <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Let keep thing above ZERO!',
            text: 'Please enter Number that are greater than ZERO :)'
        });
    } else if (Number.isInteger(chillValue) && Number.isInteger(popValue) && Number.isInteger(stopValue) && stopValue < (chillValue * popValue)) {
        Swal.fire({
            icon: 'error',
            title: 'Let give it somemore number to work with >_<',
            text: 'Make sure the Multiplication of ChillValue and PopValue is greater then StopValue so we get at least one ChillPop :)'
        });
    } else if (Number.isInteger(chillValue) && Number.isInteger(popValue) && Number.isInteger(stopValue) && stopValue > 9000) {
        Swal.fire({
            icon: 'error',
            title: '>_< IT OVER 9000 >_<',
            text: 'Ensure that the Number you pick does not go over the LIMIT:)'
        });
    } else if (Number.isInteger(chillValue) && Number.isInteger(popValue) && Number.isInteger(stopValue)) {
        let generateNumbers = generateChillPop(stopValue, chillValue, popValue);
        displayChillPop(generateNumbers);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Please enter valid numbers.'
        });
    }   
}

function generateChillPop(stopValue, chillValue, popValue) {

    let ChillPop = [];
    for (let n = 1; n <= stopValue; n = n + 1) {
        
        if (n % chillValue == 0 && n % popValue == 0) {
           ChillPop.push('ChillingPop');
        } else if (n % chillValue == 0) {
            ChillPop.push('Chill');
        } else if (n % popValue == 0) {
            ChillPop.push('Pop');
        } else{
            ChillPop.push(n); 
        }          
    }
    return ChillPop;
}

function displayChillPop(numbers) {
    let html = '';

    for (let index = 0; index < numbers.length; index += 1) {

        let currentNumbers = numbers[index]

        let className = '';

        if (currentNumbers == 'ChillPop') {
            className = 'chillPop';
        } else if (currentNumbers == 'Chill') {
            className = 'chill';
        } else if ( currentNumbers == 'Pop') {
            className = 'pop';
        }
        html += `<div class="col border ${className}">${currentNumbers}</div>`;
    }

    let column = document.getElementById('results');

    column.innerHTML = html;
}