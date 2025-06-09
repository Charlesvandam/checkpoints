

let clickUpgrades = {
    pickaxe: {
        price: 10,
        quantity: 0,
        multiplier: 1
    },
    silverPickaxe: {
        price: 50,
        quantity: 0,
        multiplier: 5
    },
    goldPickaxe: {
        price: 500,
        quantity: 0,
        multiplier: 100
    }
};

let automaticUpgrades = {
    rover: {
        price: 250,
        quantity: 0,
        multiplier: 10
    },
    rover2: {
        price: 1250,
        quantity: 0,
        multiplier: 100
    }
};


let cheese = 0;

function mine() {
    cheese += 1 + (clickUpgrades.pickaxe.quantity * clickUpgrades.pickaxe.multiplier)
        + (clickUpgrades.silverPickaxe.quantity * clickUpgrades.silverPickaxe.multiplier)
    // console.log('mining', cheese)
    document.getElementById('cheese').innerText = cheese
    if (cheese > 0) {
        document.getElementById('cheese').innerHTML =
            `Cheese: <span class="text-success" id="cheese">${cheese}</span>`
    }
}

function buyPickaxe() {
    if (cheese >= clickUpgrades.pickaxe.price) {
        // console.log('purchased', clickUpgrades.pickaxe)
        cheese -= clickUpgrades.pickaxe.price
        clickUpgrades.pickaxe.quantity += 1
        clickUpgrades.pickaxe.price += 5
        cheesePerClick()
        document.getElementById('cheese').innerText = cheese
        document.getElementById('pickaxe').innerText = clickUpgrades.pickaxe.quantity
        document.getElementById('pickaxeprice').innerText = clickUpgrades.pickaxe.price
        document.getElementById('pickaxe-p').innerHTML =
            `Pickaxes: <span class="text-success" id="pickaxe">${clickUpgrades.pickaxe.quantity}</span>`
    }

}

function buySilverPickaxe() {
    if (cheese >= clickUpgrades.silverPickaxe.price) {
        // console.log('purchased', clickUpgrades.silverPickaxe)
        cheese -= clickUpgrades.silverPickaxe.price
        clickUpgrades.silverPickaxe.quantity += 1
        clickUpgrades.silverPickaxe.price += 25
        cheesePerClick()
        document.getElementById('cheese').innerText = cheese
        document.getElementById('silverPickaxe').innerText = clickUpgrades.silverPickaxe.quantity
        document.getElementById('silverPickaxeprice').innerText = clickUpgrades.silverPickaxe.price
        document.getElementById('silverPickaxe-p').innerHTML =
            `Pickaxes: <span class="text-success" id="silverPickaxe">${clickUpgrades.silverPickaxe.quantity}</span>`
    }
}

function buyRover() {
    if (cheese >= automaticUpgrades.rover.price) {
        // console.log('purchased', automaticUpgrades.rover)
        cheese -= automaticUpgrades.rover.price
        automaticUpgrades.rover.quantity += 1
        automaticUpgrades.rover.price += 125
        document.getElementById('cheese').innerText = cheese
        document.getElementById('rover').innerText = automaticUpgrades.rover.quantity
        document.getElementById('roverprice').innerText = automaticUpgrades.rover.price
        document.getElementById('rover-p').innerHTML =
            `Rovers: <span class="text-success" id="rover">${automaticUpgrades.rover.quantity}</span>`
        cheesePerSecond()
    }
}

function buyRoverUpgrade() {
    if (cheese >= automaticUpgrades.rover2.price) {
        // console.log('purchased', automaticUpgrades.rover2)
        cheese -= automaticUpgrades.rover2.price
        automaticUpgrades.rover2.quantity += 1
        automaticUpgrades.rover2.price += 625
        document.getElementById('cheese').innerText = cheese
        document.getElementById('rover2').innerText = automaticUpgrades.rover2.quantity
        document.getElementById('rover2price').innerText = automaticUpgrades.rover2.price
        document.getElementById('rover2-p').innerHTML =
            `Rover Upgrade: <span class="text-success" id="rover2">${automaticUpgrades.rover2.quantity}</span>`
        cheesePerSecond()
    }
}

function collectAutoUpgrades() {
    cheese += 0 + (automaticUpgrades.rover.quantity * automaticUpgrades.rover.multiplier)
        + (automaticUpgrades.rover2.quantity * automaticUpgrades.rover2.multiplier)
    document.getElementById('cheese').innerText = cheese
    // console.log('collecting auto upgrades', cheese)
}

let cps = 0

function cheesePerSecond() {
    cps = 0 + (automaticUpgrades.rover.quantity * automaticUpgrades.rover.multiplier)
        + (automaticUpgrades.rover2.quantity * automaticUpgrades.rover2.multiplier)
    document.getElementById('cps').innerText = cps.toFixed(2)
    if (cps > 0) {
        document.getElementById('cps-p').innerHTML =
            `Cheese Per Second: <span class="text-success"id="cps">${cps}</span>`
    }
}

let cpc = 1

function cheesePerClick() {
    cpc = 1 + (clickUpgrades.pickaxe.quantity * clickUpgrades.pickaxe.multiplier)
        + (clickUpgrades.silverPickaxe.quantity * clickUpgrades.silverPickaxe.multiplier)
    document.getElementById('cpc').innerText = cpc
}


setInterval(collectAutoUpgrades, 1000);
setInterval(cheesePerSecond, 1000);