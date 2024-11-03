document.getElementById('btnn').addEventListener('click', function() {
    const input1 = document.getElementById('input-1');
    const input2 = document.getElementById('input-2');
    
    const result = (input1.value * input2.value) * 0.5;
    const output=document.getElementById('output');
    output.value = `Triangle area is: ${result}`;
    input1.value='';
    input2.value='';
});

document.getElementById('btnn2').addEventListener('click', function() {
    const input1 = document.getElementById('ret-input-1');
    const input2 = document.getElementById('ret-input-2');
    const result = input1.value * input2.value;
    const output = document.getElementById('output');
    output.value = `Rectangle area is: ${result}`;
    input1.value = '';
    input2.value = '';
});
document.getElementById('para-btn').addEventListener('click',function(){
    const paraBInput=document.getElementById('para-b');
    const paraBText=paraBInput.value;
    const b=parseFloat(paraBText);
    const parahInput=document.getElementById('para-h');
    const paraHText=parahInput.value;
    const h=parseFloat(paraHText);
    const result=b*h;
    const output=document.getElementById('output');
    output.value = `Parallelogram area is: ${result}`;
    paraBInput.value='';
    parahInput.value='';
})







document.getElementById('rhom-btn').addEventListener('click',function(){
    const rhomd1Input=document.getElementById('rhom-d1');
    const d1=parseFloat(rhomd1Input.value);
    const rhomd2Input=document.getElementById('rhom-d2');
    const d2=parseFloat(rhomd2Input.value);
    const result=0.5*d1*d2;
    const output=document.getElementById('output');
    output.value=`Rhombus area is: ${result}`;
})
document.getElementById('pen-btn').addEventListener('click',function(){
const p=getInputById('pen-p');
console.log(p);
const b=getInputById('pen-b');
console.log(b)
const result=0.5*p*b;
console.log(result)
const Output=out();
Output.value=`Pentagon area is: ${result}`;

});
function getInputById(idName){
    const inputValue=document.getElementById(idName);
    const value=parseFloat(inputValue.value);
    return value;

};
function out(){
    const output=document.getElementById('output');
    return output;

};
document.getElementById('ell-btn').addEventListener('click',function(){
    const a=getInputById('ell-a');
    const b=getInputById('ell-b');
    const result=3.1416*a*b;
    const Output=out();
    Output.value=`Ellips area is :${result}`;

})