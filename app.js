let donuts = 0;
let autoButtonCount1 = 0;
let autoButtonCount2 = 0;
let autoButtonCount3 = 0;

function makeDonutButton() {
    donuts++;
    document.getElementById('DonutCount').innerText = donuts;
}



function purchaseAutoMakerButton1() {
    const autoButtonCost = 100;
    if (donuts >= autoButtonCost) {
        donuts -= autoButtonCost;
        autoButtonCount1++;
        upgradeAutoButtonCount1();
    }
}

function purchaseAutoMakerButton2() {
    const autoButtonCost = 110;
    if (donuts >= autoButtonCost) {
        donuts -= autoButtonCost;
        autoButtonCount2++;
        upgradeAutoButtonCount2();
    }
}

function purchaseAutoMakerButton3() {
    const autoButtonCost = 121;
    if (donuts >= autoButtonCost) {
        donuts -= autoButtonCost;
        autoButtonCount3++;
        upgradeAutoButtonCount3();
    }
}

function purchaseAutoMakerButton4() {
    const autoButtonCost = 133;
    if (donuts >= autoButtonCost) {
        donuts -= autoButtonCost;
        autoButtonCount4++;
        upgradeAutoButtonCount4();
    }
}

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

