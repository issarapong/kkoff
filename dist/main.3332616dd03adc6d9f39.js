(()=>{"use strict";class t{constructor(){this.priceInput=document.getElementById("product-price"),this.quantityInput=document.getElementById("product-quantity"),this.shippingInput=document.getElementById("product-shipping"),this.resultBox=document.getElementById("result"),this.totalBtn=document.getElementById("total-btn")}getInputs(){return[this.priceInput.value,this.quantityInput.value,this.shippingInput.value]}showPrice(t){this.resultBox.innerText=t}onClick(t){this.totalBtn.addEventListener("click",t)}}const e=(...t)=>t.every((t=>"number"==typeof t&&!isNaN(t)));class r{constructor(){this.errorBox=document.getElementById("error")}hideError=()=>{this.errorBox.classList.add("invisible")};showError=()=>{this.errorBox.classList.remove("invisible")};showErrorMessage=(t,r)=>{const s=t.reduce(((t,s,n)=>(e(r[n])?t+="":t+=`${s} is not a number. `,t)),"");this.errorBox.innerText=s,this.showError()}}(()=>{const s=new t,n=new r;n.hideError();s.onClick((()=>{n.hideError();const t=s.getInputs(),r=((...t)=>t.map((t=>Number(t))))(...t);if(e(...r)){const[t,e,n]=r,i=t*e+n;s.showPrice(i)}else n.showErrorMessage(t,r)}))})()})();