
function calculate() {
    const result = document.getElementById("result");
    const principal = Number(document.getElementById("Principal").value);
    const rate = Number(document.getElementById("Rate").value);
    result.innerHTML =  (principal * rate) / 100;
    return totalInstalment ();

}
function totalInstalment (){
    const result = document.getElementById("result");
    const Installment = document.getElementById("instalmentAmount");
    const TotalAmount = document.getElementById("totalAmount");
    const principal = Number(document.getElementById("Principal").value);
    const Total = Number(document.getElementById("total").value);
    Installment.innerHTML = ( principal + result ) / Total;
    TotalAmount.innerHTML =  Installment * Total;





}