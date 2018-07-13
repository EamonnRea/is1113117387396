/* global $ */

function calcSub(){
    
    var parmSubTotal;
    
    if(document.getElementById('salesforce').click) {
      parmSubTotal = 100;
    }
    if (document.getElementById('cloud9').click){
      parmSubTotal = 200;
    }
    if (document.getElementById('aws').click){
      parmSubTotal = 300;
    }
    if(document.getElementById('gmail').click) {
      parmSubTotal = 400;;
    }
    display(parmSubTotal);
    calcDisVatTotal(parmSubTotal);
}


function calcDisVatTotal(parmSubTotal){
  var subTotal = parmSubTotal
  var discountAmt;
  var vatAmt;
  var totalPrice;

  discountAmt = (parmSubTotal * 0.05);
  vatAmt = ((parmSubTotal - discountAmt) * 0.1);
  totalPrice = ((parmSubTotal + vatAmt) - discountAmt);
  display(subTotal, discountAmt, vatAmt, totalPrice);
}


function display(parm1, parm2, parm3, parm4){
  
  document.getElementById("subtotal").value = parm1;
  document.getElementById("discount").value = parm2;
  document.getElementById("vat").value = parm3;
  document.getElementById("total").value = parm4;
}
