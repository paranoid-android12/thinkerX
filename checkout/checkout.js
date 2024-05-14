const data = {
    "standard": {
        teamsPrice: 299.99,
        businessPrice: 599.99,
        corporationPrice: 1999.99,
        teamsBenefit1: "20 GB NVMe Storage",
        businessBenefit1: "40 GB NVMe Storage",
        corporationBenefit1: "60 GB NVMe Storage",
        selectedPlan: "Selected Plan: Standard"
    },
    "business": {
        teamsPrice: 399.99,
        businessPrice: 799.99,
        corporationPrice: 2499.99,
        teamsBenefit1: "40 GB NVMe Storage",
        businessBenefit1: "80 GB NVMe Storage",
        corporationBenefit1: "120 GB NVMe Storage",
        selectedPlan: "Selected Plan: Business"
    },
    "premium": {
        teamsPrice: 499.99,
        businessPrice: 999.99,
        corporationPrice: 2999.99,
        teamsBenefit1: "60 GB NVMe Storage",
        businessBenefit1: "100 GB NVMe Storage",
        corporationBenefit1: "200 GB NVMe Storage",
        selectedPlan: "Selected Plan: Premium"
    }
}

const inputs = document.querySelectorAll('.fullInput');
const submitButton = document.querySelector('.submitButton');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
    submitButton.disabled = !allFilled;
  });
});


window.onload = function(){

    let selected = '' ;
    let payMethod = '';
    let selPack = document.getElementById('selectedPackage');
    let packPrice = document.getElementById('packagePrice');
    let taxes = document.getElementById('tax');
    let finalPrice = document.getElementById('finPrice');
    let circ1 = document.getElementById('circ1');
    let circ2 = document.getElementById('circ2');
    let circ3 = document.getElementById('circ3');

    let pay1 = document.getElementById('pay1');
    let pay2 = document.getElementById('pay2');
    let pay3 = document.getElementById('pay3');

    let package = localStorage.getItem('package');

    let teamsPrice = document.getElementById('teamsPrice');
    let businessPrice = document.getElementById('businessPrice');
    let corporationPrice = document.getElementById('corporationPrice');
    let teamsBenefit1 = document.getElementById('teamsBenefit1');
    let businessBenefit1 = document.getElementById('businessBenefit1');
    let corporationBenefit1 = document.getElementById('corporationBenefit1');
    let selectedPlan = document.getElementById('selectedPlan');

    teamsPrice.innerHTML = `₱${data[package].teamsPrice}`;
    businessPrice.innerHTML = `₱${data[package].businessPrice}`;
    corporationPrice.innerHTML = `₱${data[package].corporationPrice}`;
    teamsBenefit1.innerHTML = `${data[package].teamsBenefit1}`;
    businessBenefit1.innerHTML = `${data[package].businessBenefit1}`;
    corporationBenefit1.innerHTML = `${data[package].corporationBenefit1}`;
    selectedPlan.innerHTML = `${data[package].selectedPlan}`;

    

    function changeSelPackage() {
        switch (selected) {
            case 'circ1':
                circ1.style.backgroundColor="#862282";
                circ2.style.backgroundColor="black";
                circ3.style.backgroundColor="black";
                break;

            case 'circ2':
                circ1.style.backgroundColor="black";
                circ2.style.backgroundColor="#862282";
                circ3.style.backgroundColor="black";
                break;

            case 'circ3':
                circ1.style.backgroundColor="black";
                circ2.style.backgroundColor="black";
                circ3.style.backgroundColor="#862282";
                break;
        
            default:
                break;
        }
    }

    function changePay() {
        switch (payMethod) {
            case 'PayPal':
                pay1.style.backgroundColor="#862282";
                pay2.style.backgroundColor="white";
                pay3.style.backgroundColor="white";
                break;

            case 'GCash':
                pay1.style.backgroundColor="white";
                pay2.style.backgroundColor="#862282";
                pay3.style.backgroundColor="white";
                break;

            case 'Pay Maya':
                pay1.style.backgroundColor="white";
                pay2.style.backgroundColor="white";
                pay3.style.backgroundColor="#862282";
                break;
        
            default:
                break;
        }
    }

    document.getElementById('payOp1').addEventListener('click', function() {
        payMethod = 'PayPal';
        pay1.style.backgroundColor="#862282";
        pay2.style.backgroundColor="white";
        pay3.style.backgroundColor="white";
    });

    document.getElementById('payOp2').addEventListener('click', function() {
        payMethod = 'GCash';
        pay1.style.backgroundColor="white";
        pay2.style.backgroundColor="#862282";
        pay3.style.backgroundColor="white";
    });

    document.getElementById('payOp3').addEventListener('click', function() {
        payMethod = 'Pay Maya';
        pay1.style.backgroundColor="white";
        pay2.style.backgroundColor="white";
        pay3.style.backgroundColor="#862282";
    });
    
    document.getElementById('sel1').addEventListener('click', function() {
        selected = 'circ1';
        selPack.innerHTML = 'Team Package';
        packPrice.innerHTML = `₱${data[package].teamsPrice}`;
        taxes.innerHTML = '₱' + (data[package].teamsPrice * 0.12).toFixed(2); // Calculating taxes
        finalPrice.innerHTML = '₱' + (data[package].teamsPrice + (data[package].teamsPrice * 0.12)).toFixed(2); // Calculating final price
        changeSelPackage();
    });

    document.getElementById('sel2').addEventListener('click', function() {
        selected = 'circ2';
        selPack.innerHTML = 'Business Package';
        packPrice.innerHTML = `₱${data[package].businessPrice}`;
        taxes.innerHTML = '₱' + (data[package].businessPrice * 0.12).toFixed(2);
        finalPrice.innerHTML = '₱' + (data[package].businessPrice + (data[package].businessPrice * 0.12)).toFixed(2);
        changeSelPackage();
    });

    document.getElementById('sel3').addEventListener('click', function() {
        selected = 'circ3';
        selPack.innerHTML = 'Corporate Package';
        packPrice.innerHTML = `₱${data[package].corporationPrice}`;
        taxes.innerHTML = '₱' + (data[package].corporationPrice * 0.12).toFixed(2);
        finalPrice.innerHTML = '₱' + (data[package].corporationPrice + (data[package].corporationPrice * 0.12)).toFixed(2);
        changeSelPackage();
    });
}