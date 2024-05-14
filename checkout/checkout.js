window.onload = function(){

    let selected = '' ;
    let selPack = document.getElementById('selectedPackage');
    let packPrice = document.getElementById('packagePrice');
    let taxes = document.getElementById('tax');
    let finalPrice = document.getElementById('finPrice');
    let circ1 = document.getElementById('circ1');
    let circ2 = document.getElementById('circ2');
    let circ3 = document.getElementById('circ3');
    
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
    
    document.getElementById('sel1').addEventListener('click', function() {
        selected = 'circ1';
        selPack.innerHTML = 'Team Package';
        packPrice.innerHTML = '₱499.99';
        taxes.innerHTML = '₱' + (499.99 * 0.12).toFixed(2); // Calculating taxes
        finalPrice.innerHTML = '₱' + (499.99 + (499.99 * 0.12)).toFixed(2); // Calculating final price
        changeSelPackage();
    });

    document.getElementById('sel2').addEventListener('click', function() {
        selected = 'circ2';
        selPack.innerHTML = 'Business Package';
        packPrice.innerHTML = '₱999.99';
        taxes.innerHTML = '₱' + (999.99 * 0.12).toFixed(2);
        finalPrice.innerHTML = '₱' + (999.99 + (999.99 * 0.12)).toFixed(2);
        changeSelPackage();
    });

    document.getElementById('sel3').addEventListener('click', function() {
        selected = 'circ3';
        selPack.innerHTML = 'Corporate Package';
        packPrice.innerHTML = '₱2,999.99';
        taxes.innerHTML = '₱' + (2999.99 * 0.12).toFixed(2);
        finalPrice.innerHTML = '₱' + (2999.99 + (2999.99 * 0.12)).toFixed(2);
        changeSelPackage();
    });
}