document.getElementById('btnn').addEventListener('click', function() {
    const input1 = document.getElementById('input-1');
    const input2 = document.getElementById('input-2');
    
    const result = (input1.value * input2.value) * 0.5;
    const output=document.getElementById('output');
    output.value = `Triangle is: ${result}`;
    input1.value='';
    input2.value='';
});

document.getElementById('btnn2').addEventListener('click', function() {
    const input1 = document.getElementById('ret-input-1');
    const input2 = document.getElementById('ret-input-2');
    const result = input1.value * input2.value;
    const output = document.getElementById('output');
    output.value = `Rectangle is: ${result}`;
    input1.value = '';
    input2.value = '';
});
