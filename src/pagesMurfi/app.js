const calcBtn = document.getElementById('calcbtn');
const resetBtn = document.getElementById('resetbtn');
const hInput = document.getElementById('h-input');
const wInput = document.getElementById('w-input');
const resultbmi = document.getElementById('result');
const resetInput = () => {
    hInput.value = '';
    wInput.value = '';
}

const calculateBMI = () => {
    const enteredHeight = +hInput.value;
    const enteredWeight = +wInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    if (isNaN (bmi)){
        alert('Errror! Please enter digits only')
        return;
    }
    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
    <ion-card-content>
        <h2>${bmi}</h2>
    </ion-card-content>
    `;
    resultbmi.innerHTML = '';
    resultbmi.appendChild(resultElement);
};

calcBtn.addEventListener('click', calculateBMI);
resetBtn.addEventListener('click', resetInput);