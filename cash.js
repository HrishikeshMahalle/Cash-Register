const bill = document.querySelector('#bill');
const cash = document.querySelector('#cash');
const calculate = document.querySelector('#calc');

const amount = ['twok', 'fiveh', 'twoh', 'oneh', 'fifty', 'twenty', 'ten', 'five', 'two', 'one'];

const calcChange = (bill, cash) => {
    const fixed = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    const ans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let giveback = cash - bill;

    for (let i = 0; i < 10; i++) {
            while (giveback >= fixed[i]) {
                giveback -= fixed[i];
                ans[i] += 1;
            }
    }

    return ans;
};

calculate.addEventListener('click', (e) => {
    const billAmount = Number(bill.value);
    const cashAmount = Number(cash.value);

    if(billAmount <= 0 || cashAmount <= 0 || billAmount == '' || cashAmount == '') {
        document.querySelector('#text').textContent = 'Please provide a valid input';
        setTimeout(() => document.querySelector('.warning').style.visibility = "visible", 500);
        setTimeout(() => document.querySelector('.warning').style.visibility = "hidden", 2000);
    } else if (billAmount > cashAmount) {
        document.querySelector('#text').textContent = 'Provided cash cannot be lass than the bill amount';
        setTimeout(() => document.querySelector('.warning').style.visibility = "visible", 500);
        setTimeout(() => document.querySelector('.warning').style.visibility = "hidden", 2000);
    } else {
        const cashback = calcChange(billAmount, cashAmount);
        for(let i = 0; i < 10; i++) {
            document.querySelector(`#${amount[i]}`).textContent = cashback[i];
        }
        document.querySelector('#giveback').textContent = cashAmount - billAmount;
    }

    e.preventDefault();
});
