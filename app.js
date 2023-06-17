let donuts = 0;
let autoButtonCount1 = 0;
let autoButtonCount2 = 0;
let autoButtonCount3 = 0;
let autoButtonCount4 = 0;
let autoInterval;

function makeDonutButton() {
    donuts++;
    document.getElementById('DonutCount').innerText = donuts;
}

const makeDonutButtonElement = document.getElementById('makeDonutButton');
makeDonutButtonElement.addEventListener('click', makeDonutButton);

function purchaseAutoMakerButton1() {
    const autoButtonCost = 100;
    if (donuts >= autoButtonCost) {
        donuts -= autoButtonCost;
        autoButtonCount1++;
        upgradeAutoButtonCount1();
    
        autoInterval = setInterval(function() {
            donuts++;
            document.getElementById('DonutCount').innerText = donuts;
        }, 1000);
    }
}

const purchaseAutoMakerButton1Element = document.getElementById('purchaseAutoMakerButton1');
purchaseAutoMakerButton1Element.addEventListener('click', purchaseAutoMakerButton1);

function purchaseAutoMakerButton2() {
    const autoButtonCost = 110;
    if (donuts >= autoButtonCost) {
        donuts -= autoButtonCost;
        autoButtonCount2++;
        upgradeAutoButtonCount2();
    }
}

const purchaseAutoMakerButton2Element = document.getElementById('purchaseAutoMakerButton2');
purchaseAutoMakerButton2Element.addEventListener('click', purchaseAutoMakerButton2);

function purchaseAutoMakerButton3() {
    const autoButtonCost = 121;
    if (donuts >= autoButtonCost) {
        donuts -= autoButtonCost;
        autoButtonCount3++;
        upgradeAutoButtonCount3();
    }
}

const purchaseAutoMakerButton3Element = document.getElementById('purchaseAutoMakerButton3');
purchaseAutoMakerButton3Element.addEventListener('click', purchaseAutoMakerButton3);

function purchaseAutoMakerButton4() {
    const autoButtonCost = 133;
    if (donuts >= autoButtonCost) {
        donuts -= autoButtonCost;
        autoButtonCount4++;
        upgradeAutoButtonCount4();
    }
}

const purchaseAutoMakerButton4Element = document.getElementById('purchaseAutoMakerButton4');
purchaseAutoMakerButton4Element.addEventListener('click', purchaseAutoMakerButton4);

function upgradeAutoButtonCount1() {
    const autoButtonCountElement = document.getElementById('autoButtonCount1');
    autoButtonCountElement.textContent = autoButtonCount1;
}

function upgradeAutoButtonCount2() {
    const autoButtonCountElement = document.getElementById('autoButtonCount2');
    autoButtonCountElement.textContent = autoButtonCount2;
}

function upgradeAutoButtonCount3() {
    const autoButtonCountElement = document.getElementById('autoButtonCount3');
    autoButtonCountElement.textContent = autoButtonCount3;
}

function upgradeAutoButtonCount4() {
    const autoButtonCountElement = document.getElementById('autoButtonCount4');
    autoButtonCountElement.textContent = autoButtonCount4;
}
//Adding a reset button

function resetGame() {
    donuts = 0;
    autoButtonCount1 = 0;
    autoButtonCount2 = 0;
    autoButtonCount3 = 0;
    autoButtonCount4 = 0;
    clearInterval(autoInterval);

    document.getElementById('DonutCount').innerText = donuts;
    upgradeAutoButtonCount1();
    upgradeAutoButtonCount2();
    upgradeAutoButtonCount3();
    upgradeAutoButtonCount4();
}

const resetButtonElement = document.getElementById('resetButton');
resetButtonElement.addEventListener('click', resetGame);